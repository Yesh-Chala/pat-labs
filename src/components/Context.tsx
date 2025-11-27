import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface ContextProps {
    className?: string;
}

const Context: React.FC<ContextProps> = ({ className }) => {
    return (
        <section className={cn('py-20 md:py-32 bg-stone-50', className)}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <FadeIn>
                        <p className="text-2xl md:text-3xl font-serif text-stone-800 leading-relaxed mb-10">
                            India is entering an intelligence-first era, where social, cultural, and technological systems will continually reshape one another.
                        </p>
                    </FadeIn>

                    <FadeIn delay={200}>
                        <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
                            Understanding these shifts requires independence, rigour, and an ability to work across methods. Patronus Labs exists to build that understanding, to document what is changing, and to examine how these changes influence everyday life, institutional behaviour, and the future of collective decision-making.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default Context;
