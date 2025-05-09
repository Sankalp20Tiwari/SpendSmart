import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { testimonialsData } from '@/data/landing';
import { motion } from 'framer-motion';

const ShiningStar = ({ index }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-teal"
    fill="currentColor"
    viewBox="0 0 24 24"
    animate={{
      scale: [1, 1.3, 1],
      opacity: [1, 0.6, 1],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      delay: index * 0.2,
    }}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </motion.svg>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden ">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-400 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400 opacity-20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="gradient-title text-3xl md:text-4xl font-bold mb-6">
            What Our Users Say
          </h2>
          <p className="text-white/80 text-lg">
            Join thousands of satisfied users who are taking control of their finances with SpendSmart.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ scale: 0.6 }}
          whileInView={{ scale: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            }
           }}
          viewport={{ once: true }}
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="w-full"
            >
              <Card className=" bg-teal/10 border border-cyan-700 shadow-lg rounded-xl h-[160px]">
                <CardContent className="p-3">
                  <div className="flex items-center mb-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-8 h-8 rounded-full border-2 border-teal"
                    />
                    <div className="ml-2">
                      <h4 className="text-white text-sm font-semibold">{testimonial.name}</h4>
                      <p className="text-white/60 text-xs">{testimonial.role}</p>
                    </div>
                  </div>

                  <p className="text-white/80 italic text-xs leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex mt-3">
                    {[1, 2, 3, 4, 5].map((star, i) => (
                      <ShiningStar key={i} index={i} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
