import React from 'react';
import { statsData } from '@/data/landing';

const Stats = () => {
  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-card group animate-pulse-slow shadow-teal-cyan-hover" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-center">
                <div className="gradient-title text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-white/70">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;