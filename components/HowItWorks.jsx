import React from 'react';
import { howItWorksData } from '@/data/landing';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-navy/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="gradient-title text-3xl md:text-4xl font-bold mb-6">
            How SpendSmart Works
          </h2>
          <p className="text-white/80 text-lg">
            Getting started is easy. Take control of your finances in just three simple steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {howItWorksData.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative flex flex-col items-center text-center group">
                {/* Step number */}
                <div className="absolute -top-10 text-6xl font-bold text-white/5 select-none">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-teal to-light-teal rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6 text-navy" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-white/70">
                  {step.description}
                </p>
                
                {/* Connector Line */}
                {index < howItWorksData.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-teal to-transparent -z-10 transform -translate-x-1/2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;