import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { blockText, firstBlockOfType, usePageBlock } from '@/content';

interface MethodologyProps {
    className?: string;
}

const FALLBACK_HEADING = 'We maintain an integrated approach to evidence.';

const FALLBACK_BODY = [
    'Our team runs interviews and ethnographic studies, designs experiments, analyses large datasets, and builds custom infrastructure to observe behaviour in real time.',
    'This allows us to study transitions as they unfold rather than relying only on retrospective accounts or static datasets. The aim is to generate knowledge that captures both the surface behaviours and the underlying mechanisms driving them.',
];

const FALLBACK_TILES = [
    { icon: '🔍', label: 'Ethnography' },
    { icon: '📊', label: 'Data Analysis' },
    { icon: '🧪', label: 'Experiments' },
    { icon: '🛠️', label: 'Infrastructure' },
];

/** Tiles are authored in Notion as bullets like "🔍 Ethnography". */
const LEADING_ICON = /^(\p{Extended_Pictographic}[\uFE0F\u200D\p{Extended_Pictographic}]*)\s*(.*)$/u;

const parseTile = (text: string) => {
    const match = text.match(LEADING_ICON);
    return match ? { icon: match[1], label: match[2] } : { icon: '', label: text };
};

const TILE_OFFSET = ['', 'translate-y-8', '-translate-y-8', ''];

const Methodology: React.FC<MethodologyProps> = ({ className }) => {
    const block = usePageBlock('methodology');
    const list = firstBlockOfType(block?.body, 'bulleted_list');

    const paragraphs = blockText(block?.body).filter(Boolean);
    const body = paragraphs.length ? paragraphs : FALLBACK_BODY;
    const tiles = list?.items.length
        ? list.items.map((item) => parseTile(item.spans.map((span) => span.text).join('')))
        : FALLBACK_TILES;

    return (
        <section className={cn('py-20 md:py-32 bg-white', className)}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-900 leading-tight mb-6">
                            {block?.heading || FALLBACK_HEADING}
                        </h2>
                        {body.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-lg md:text-xl text-stone-600 leading-relaxed mb-8 last:mb-0"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </FadeIn>

                    <div className="grid grid-cols-2 gap-4">
                        {tiles.map((tile, index) => (
                            <FadeIn
                                key={tile.label}
                                delay={200 + index * 100}
                                className={cn(
                                    'bg-stone-100 p-8 rounded-2xl aspect-square flex flex-col justify-center items-center text-center hover:bg-stone-200 transition-colors duration-500',
                                    TILE_OFFSET[index % TILE_OFFSET.length]
                                )}
                            >
                                {tile.icon && <span className="text-4xl mb-4">{tile.icon}</span>}
                                <span className="font-medium text-stone-800">{tile.label}</span>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
