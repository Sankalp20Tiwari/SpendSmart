'use client'

import React from 'react';
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import HowItWorks from "@/app/components/HowItWorks";
import Stats from "@/app/components/Stats";
import Testimonials from "@/app/components/Testimonials";
import Pricing from "@/app/components/Pricing";
import FAQ from "@/app/components/FAQ";
import CTA from "@/app/components/CTA";



const Index = () => {
  return (
    <div className=" min-h-screen overflow-hidden">
      {/* <Navigation /> */}
      <main className="pt-16">
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
    </div>
  );
};

export default Index;
