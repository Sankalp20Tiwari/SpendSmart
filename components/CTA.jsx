import React from 'react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-cta-gradient opacity-50 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="hero-card max-w-4xl mx-auto p-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Take Control of Your <span className="gradient-title">Financial Future?</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Join thousands of users who are already managing their finances smarter with SpendSmart.
            </p>
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-teal to-light-teal text-navy font-medium text-lg hover:opacity-90 transition-opacity px-8 py-6"
              >
                Start Your Free 14-Day Trial
              </Button>
            </div>
            <p className="text-white/60 text-sm">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;