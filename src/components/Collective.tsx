import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface CollectiveProps {
    className?: string;
}

const Collective: React.FC<CollectiveProps> = ({ className }) => {
    return (
        <section className={cn('py-20 md:py-32 bg-stone-900 text-stone-50', className)}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8 leading-tight">
                            Patronus Labs operates as a collective.
                        </h2>
                    </FadeIn>

                    <FadeIn delay={200}>
                        <p className="text-xl md:text-2xl text-stone-300 leading-relaxed mb-12 font-light">
                            We are not organised around clients, products, or commercial deliverables. Instead, our structure reflects the kind of work we do: open-ended inquiry, cross-disciplinary collaboration, and long-term thinking.
                        </p>
                    </FadeIn>

                    <FadeIn delay={400}>
                        <div className="inline-block border border-stone-700 rounded-full px-8 py-4 text-lg tracking-wide hover:bg-stone-800 transition-colors">
                            When we work with external partners, it is to extend research possibilities, not to produce simplified outputs.
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default Collective;
