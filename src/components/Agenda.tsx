import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import RichText from './content/RichText';
import { firstBlockOfType, usePageBlock, type RichSpan } from '@/content';

interface AgendaProps {
  className?: string;
}

const FALLBACK_HEADING = 'Our agenda centres on slow, structural questions.';

const FALLBACK_QUESTIONS = [
  'How do digital habits form and become part of identity?',
  'How do people negotiate agency, trust, and vulnerability when interacting with algorithmic systems?',
  'What new social patterns emerge when everyday choices are mediated by automation?',
];

const FALLBACK_CLOSING =
  'These questions guide our long-term research, shaping the way we build tools and conduct fieldwork.';

const toSpans = (text: string): RichSpan[] => [{ text }];

const Agenda: React.FC<AgendaProps> = ({ className }) => {
  const block = usePageBlock('agenda');
  const list = firstBlockOfType(block?.body, 'bulleted_list');
  const closing = firstBlockOfType(block?.body, 'quote');

  const questions = list?.items.length
    ? list.items.map((item) => item.spans)
    : FALLBACK_QUESTIONS.map(toSpans);
  const closingSpans = closing?.spans.length ? closing.spans : toSpans(FALLBACK_CLOSING);

  return (
    <section className={cn('py-20 md:py-32 bg-stone-50', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-12 text-stone-900 leading-tight">
              {block?.heading || FALLBACK_HEADING}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {questions.map((spans, index) => (
              <FadeIn key={index} delay={100 * (index + 1)}>
                <div className="space-y-4">
                  <div className="w-12 h-1 bg-stone-300 mb-6"></div>
                  <p className="text-lg text-stone-700 leading-relaxed">
                    <RichText spans={spans} />
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <p className="mt-16 text-xl text-stone-600 italic border-l-4 border-stone-300 pl-6 py-2">
              <RichText spans={closingSpans} />
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
