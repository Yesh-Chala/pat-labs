
import React from 'react';
import { cn } from '@/lib/utils';
import FadeIn from './animations/FadeIn';
import { Card, CardContent } from '@/components/ui/card';

interface InvestmentApproachProps {
  className?: string;
}

const InvestmentApproach: React.FC<InvestmentApproachProps> = ({ className }) => {
  const investmentTiers = [
    {
      title: "Pre-Seed Accelerator Fund",
      description: "€30K–€150K tickets, with teams participating in our 16-week acceleration program focused on validation and early traction."
    },
    {
      title: "Seed Fund",
      description: "€200K–€400K investments in 15+ startups to support scaling, market expansion, and team growth, with follow-on capital available."
    }
  ];

  return (
    <section id="investment" className={cn('py-20 bg-gray-50', className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">Thesis</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg text-left text-muted-foreground mb-12">
            As India transitions from a digital economy to an intelligence-first society, the defining advantage will be a deep, real-time understanding of people—those we serve, sell to, and are accountable to. While code becomes cheaper and scale becomes faster, insight becomes the differentiator.
            </p>
            <p className="text-lg text-left text-muted-foreground mb-12">
            At Patronus Labs, we aim to build an insight-rich ecosystem that helps early- and mid-stage companies ground their decisions in behavioural science. Our goal is to sharpen strategy, improve user experience, and prepare organizations for social, cultural, and technological shifts before they arrive.
            </p>
          </FadeIn>
        </div>
        
        {/* <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {investmentTiers.map((tier, index) => (
            <FadeIn key={index} delay={150 + index * 50}>
              <Card className="border-0 shadow-sm h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-medium mb-4 font-serif">{tier.title}</h3>
                  <p className="text-muted-foreground mb-4">{tier.description}</p>
                  {index === 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm font-medium">16-week acceleration program</p>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm font-medium">Follow-on capital available</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default InvestmentApproach;
