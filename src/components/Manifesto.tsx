
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';

interface ManifestoProps {
  className?: string;
}

const Manifesto: React.FC<ManifestoProps> = ({ className }) => {
  return (
    <section id="thesis" className={cn('py-20 bg-white', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-10 text-left">A Behavioural Science Research Institute</h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="text-xl md:text-2xl leading-relaxed mb-12 font-serif text-left">
              Building an ecosystem to decode how people think , decide, and act - so products, policies, and products can work better for them..
            </p>
          </FadeIn>
          
          <FadeIn delay={200}>
            <p className="text-lg leading-relaxed text-muted-foreground text-left">
            Patronus Labs develops research and custom data collection infrastructure to bring behavioural science into the heart of real-world decision-making. Rooted in ethics, inclusion, and rigour, we advocate for an India where understanding people in real time isn’t a luxury—it’s the foundation for progress.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;

