import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ChevronRight
} from 'lucide-react';
import FeatureCard from './FeatureCard';
import { enhancedFeaturesData } from '@/data/landing';





const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-black" id='features'>
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-teal-500/20 via-teal-500/40 to-teal-500/20"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
      
      {/* Decorative blurs */}
      {/* <motion.div 
        className="absolute -top-40 -left-40 w-96 h-96 bg-teal-500/5 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute top-1/2 right-0 w-80 h-80 bg-purple-500/5 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ 
          duration: 10, 
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl"
        animate={{ 
          scale: [1, 1.4, 1], 
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ 
          duration: 12, 
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      ></motion.div> */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated header */}
        <motion.div 
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-900/40 to-cyan-700/20 backdrop-blur-md border border-teal-500/20 mb-6">
            <div className="h-2 w-2 rounded-full bg-cyan-500 mr-2"></div>
            <span className="text-sm font-medium text-teal-400">Premium Features</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center">
            Empower Your <span className="relative">
              <span className="relative z-10 gradient-title">Financial Journey</span>
            </span>
          </h2>
          
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            SpendSmart combines powerful tools and intuitive interfaces to give you complete control over your financial journey.
          </p>
          
          <motion.div 
            className="mt-10 flex justify-center space-x-2 "
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="h-1 w-2 rounded-full bg-cyan-500/30"></div>
            <div className="h-1 w-12 rounded-full bg-cyan-500/60"></div>
            <div className="h-1 w-2 rounded-full bg-cyan-500/30"></div>
          </motion.div>
        </motion.div>
        
        {/* Bento grid with proper layout - explicitly defining the grid for each screen size */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[minmax(150px,auto)] md:auto-rows-[minmax(200px,auto)] gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {enhancedFeaturesData.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
          
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 group"
            whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(45, 212, 191, 0.5)" }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center">
              Explore All Features
              <motion.span 
                className="ml-2 inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronRight className="h-5 w-5" />
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
