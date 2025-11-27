import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface MethodologyProps {
    className?: string;
}

const Methodology: React.FC<MethodologyProps> = ({ className }) => {
    return (
        <section className={cn('py-20 md:py-32 bg-white', className)}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-900 leading-tight mb-6">
                            We maintain an integrated approach to evidence.
                        </h2>
                        <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-8">
                            Our team runs interviews and ethnographic studies, designs experiments, analyses large datasets, and builds custom infrastructure to observe behaviour in real time.
                        </p>
                        <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
                            This allows us to study transitions as they unfold rather than relying only on retrospective accounts or static datasets. The aim is to generate knowledge that captures both the surface behaviours and the underlying mechanisms driving them.
                        </p>
                    </FadeIn>

                    <div className="grid grid-cols-2 gap-4">
                        <FadeIn delay={200} className="bg-stone-100 p-8 rounded-2xl aspect-square flex flex-col justify-center items-center text-center hover:bg-stone-200 transition-colors duration-500">
                            <span className="text-4xl mb-4">🔍</span>
                            <span className="font-medium text-stone-800">Ethnography</span>
                        </FadeIn>
                        <FadeIn delay={300} className="bg-stone-100 p-8 rounded-2xl aspect-square flex flex-col justify-center items-center text-center hover:bg-stone-200 transition-colors duration-500 translate-y-8">
                            <span className="text-4xl mb-4">📊</span>
                            <span className="font-medium text-stone-800">Data Analysis</span>
                        </FadeIn>
                        <FadeIn delay={400} className="bg-stone-100 p-8 rounded-2xl aspect-square flex flex-col justify-center items-center text-center hover:bg-stone-200 transition-colors duration-500 -translate-y-8">
                            <span className="text-4xl mb-4">🧪</span>
                            <span className="font-medium text-stone-800">Experiments</span>
                        </FadeIn>
                        <FadeIn delay={500} className="bg-stone-100 p-8 rounded-2xl aspect-square flex flex-col justify-center items-center text-center hover:bg-stone-200 transition-colors duration-500">
                            <span className="text-4xl mb-4">🛠️</span>
                            <span className="font-medium text-stone-800">Infrastructure</span>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
