import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="pt-20 pb-20 overflow-hidden px-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Take Control of Your <span className="gradient-title">Financial Future</span>
            </h1>
            <p className="text-xl text-white/80 max-w-lg">
              Track expenses, set budgets, and gain powerful insights into your spending habits with SpendSmart's all-in-one finance management platform.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-teal to-light-teal text-navy font-medium text-lg hover:opacity-90 transition-opacity"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="ghost" 
                className="group text-white"
                size="lg"
              >
                Watch Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-teal/80 to-light-teal/80 flex items-center justify-center text-navy text-xs font-bold ring-2 ring-navy"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span>Join 10,000+ users managing their finances smarter</span>
            </div>
          </div>
          <div className="relative">
            <div className="hero-card p-4 max-w-lg mx-auto lg:ml-auto animate-float">
              <Image 
                width={600} 
                height={400}
                src="/heroBanner.jpeg" 
                alt="SpendSmart Dashboard" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 hero-card p-4 w-48 animate-float" style={{animationDelay: "0.5s"}}>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white/80 text-sm">Monthly Budget</span>
                  <span className="text-success font-medium">$2,450</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal to-light-teal w-2/3"></div>
                </div>
                <div className="text-right text-xs text-white/60">65% used</div>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 hero-card p-4 w-40 animate-float" style={{animationDelay: "0.8s"}}>
              <div className="flex flex-col items-center">
                <span className="text-white/80 text-sm mb-1">Savings Goal</span>
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal/30 to-light-teal/30 flex items-center justify-center mb-1">
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center">
                    <span className="text-success font-bold">78%</span>
                  </div>
                </div>
                <span className="text-xs text-white/60">$7,800 / $10,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;