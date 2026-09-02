import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import ContentCard from './content/ContentCard';
import { useFeaturedContent, usePageBlock } from '@/content';

interface FeaturedProps {
  className?: string;
}

const isExternal = (href: string) => /^https?:\/\//.test(href);

/** Grid of posts ticked "Show on Home". Renders nothing when none are ticked. */
const Featured: React.FC<FeaturedProps> = ({ className }) => {
  const block = usePageBlock('featured');
  const items = useFeaturedContent();

  if (!block || items.length === 0) return null;

  return (
    <section className={cn('py-20 md:py-32 bg-white', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="max-w-3xl mb-12">
            {block.heading && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 text-stone-900 leading-tight">
                {block.heading}
              </h2>
            )}
            {block.subheading && (
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed">{block.subheading}</p>
            )}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {items.map((item, index) => (
            <FadeIn key={item.id} delay={100 * (index + 1)}>
              <ContentCard item={item} />
            </FadeIn>
          ))}
        </div>

        {block.ctaLabel && block.ctaLink && (
          <FadeIn delay={400}>
            <div className="mt-12">
              {isExternal(block.ctaLink) ? (
                <a
                  href={block.ctaLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm font-medium underline decoration-stone-400 underline-offset-4 hover:decoration-stone-900"
                >
                  {block.ctaLabel}
                </a>
              ) : (
                <Link
                  to={block.ctaLink}
                  className="text-sm font-medium underline decoration-stone-400 underline-offset-4 hover:decoration-stone-900"
                >
                  {block.ctaLabel}
                </Link>
              )}
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};

export default Featured;
