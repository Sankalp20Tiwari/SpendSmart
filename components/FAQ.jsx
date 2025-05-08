'use client'

import React, { useState } from 'react';
import { faqData } from '@/data/landing';

const FAQ = () => {
  const [openItem, setOpenItem] = useState(0);
  
  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };
  
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="gradient-title text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-white/80 text-lg">
            Have questions about SpendSmart? We've got answers.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="mb-4 border border-white/10 rounded-lg overflow-hidden bg-secondary/30"
            >
              <button 
                className="w-full p-5 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-medium text-white">{item.question}</h3>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 text-teal transition-transform duration-300 ${openItem === index ? 'rotate-180' : ''}`} 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </button>
              
              {openItem === index && (
                <div className="p-5 pt-0 border-t border-white/10 animate-slide-up">
                  <p className="text-white/70">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;