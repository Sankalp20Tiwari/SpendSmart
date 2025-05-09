'use client'

import React from 'react';
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";


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
