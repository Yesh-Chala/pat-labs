import React from 'react';
import { Link } from 'react-router-dom';
import { routeForType, useAnnouncementPost, usePageBlock } from '@/content';

/**
 * The strip above the header. A post with `Home Slot = Announcement Bar` wins;
 * otherwise the `announcement` page block supplies the text and link.
 */
const AnnouncementBar: React.FC = () => {
  const block = usePageBlock('announcement');
  const post = useAnnouncementPost();

  if (!block) return null;

  const to = post ? `${routeForType[post.type]}/${post.slug}` : block.ctaLink;
  const label = post ? post.title : block.heading;
  const detail = post ? post.summary : block.subheading;
  const ctaLabel = block.ctaLabel || 'Read more';

  if (!to || !label) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-stone-100/95 backdrop-blur-sm border-b border-stone-200/80">
      <Link
        to={to}
        className="block w-full py-4 px-4 md:py-5 md:px-6 text-center text-sm text-stone-700 hover:bg-stone-200/60 hover:text-stone-900 transition-colors font-sans"
      >
        <span className="font-medium">New:</span> {label}
        {detail && ` — ${detail}`}{' '}
        <span className="inline-flex items-center text-stone-600 hover:text-stone-900">
          {ctaLabel}
          <svg className="ml-1 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Link>
    </div>
  );
};

export default AnnouncementBar;
