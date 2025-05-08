import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { pricingData } from '@/data/landing';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-navy/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="gradient-title text-3xl md:text-4xl font-bold mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-white/80 text-lg">
            Choose the plan that works best for your financial needs. Start with our free tier or upgrade for more powerful features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingData.map((tier, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden border ${
                tier.highlighted 
                  ? 'border-teal relative bg-card-gradient shadow-lg shadow-teal/20 shadow-teal-cyan' 
                  : 'border-white/10 bg-card-gradient'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-teal to-light-teal" />
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {tier.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  {tier.price !== "Free" && <span className="text-white/60 ml-1">/month</span>}
                </div>
                <p className="text-white/70 mb-6">
                  {tier.description}
                </p>
                
                <Button 
                  className={`w-full ${
                    tier.highlighted 
                      ? 'bg-gradient-to-r from-teal to-light-teal text-navy hover:opacity-90' 
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  {tier.price === "Free" ? "Get Started" : "Start Free Trial"}
                </Button>
              </div>
              
              <div className="border-t border-white/10 p-8">
                <ul className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-teal mr-2 mt-0.5 shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 text-white/60">
          All plans include a 14-day free trial. No credit card required to try.
        </div>
      </div>
    </section>
  );
};

export default Pricing;