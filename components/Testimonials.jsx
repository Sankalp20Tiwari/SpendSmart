import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { testimonialsData } from '@/data/landing';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="gradient-title text-3xl md:text-4xl font-bold mb-6">
            What Our Users Say
          </h2>
          <p className="text-white/80 text-lg">
            Join thousands of satisfied users who are taking control of their finances with SpendSmart.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <Card 
              key={index} 
              className="feature-card hover:scale-105 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full border-2 border-teal" 
                  />
                  <div className="ml-4">
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-white/80 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex mt-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;