import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  PieChart, 
  CreditCard, 
  TrendingUp, 
  Bell, 
  Shield, 
  Smartphone,
  Sparkles,
  Zap,
  ChevronRight
} from 'lucide-react';
import FeatureCard from './FeatureCard';

// Enhanced feature data with real images instead of placeholders
const enhancedFeaturesData = [
  {
    title: "Budget Tracking",
    description: "Set custom budgets and track spending in real-time with visual reports.",
    icon: PieChart,
    color: "from-teal-400 to-emerald-600",
    textColor: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    size: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3",
    variant: "gradient",
    hoverEffect: "scale"
  },
  {
    title: "Smart Alerts",
    description: "Get timely notifications about unusual spending, upcoming bills, and opportunities to save.",
    icon: Bell,
    color: "from-orange-400 to-amber-500",
    textColor: "text-amber-400",
    borderColor: "border-amber-500/20",
    size: "col-span-1 md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?ixlib=rb-4.0.3",
    variant: "icon-left",
    hoverEffect: "glow"
  },
  {
    title: "Secure Transactions",
    description: "Bank-level encryption ensures your financial data stays private and protected.",
    icon: Shield,
    color: "from-indigo-500 to-blue-600",
    textColor: "text-blue-400",
    borderColor: "border-blue-500/20",
    size: "col-span-2 md:col-span-2 md:row-span-1",
    image: "https://static.vecteezy.com/system/resources/thumbnails/025/015/707/small_2x/digital-card-with-padlock-icon-made-of-moving-blue-glowing-particles-on-technological-sky-blue-dots-background-concept-of-payment-secure-safety-cyber-security-and-protection-video.jpg",
    variant: "image-dominant",
    video: "https://assets.mixkit.co/videos/preview/mixkit-typing-on-smartphone-in-the-dark-with-charts-on-screen-12726-large.mp4",
    hoverEffect: "glow"
  },
  {
    title: "Investment Tracking",
    description: "Monitor investments, analyze performance, and receive personalized recommendations.",
    icon: TrendingUp,
    color: "from-neutral-200/30 via-zinc-400/30 to-transparent",
    textColor: "text-green-400",
    borderColor: "border-green-500/20",
    size: "col-span-2 md:col-span-1 md:row-span-2",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3",
    variant: "vertical",
    hoverEffect: "slide"
  },
  {
    title: "AI Insights",
    description: "Get personalized financial advice powered by advanced AI algorithms.",
    icon: Sparkles,
    color: "from-cyan-400 to-blue-600",
    textColor: "text-cyan-400",
    borderColor: "border-cyan-500/20",
    size: "col-span-2 md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1633158829799-56bdf8e56dbd?ixlib=rb-4.0.3",
    variant: "minimal",
    hoverEffect: "pulse"
  },
  {
    title: "Mobile Access",
    description: "Manage your finances anytime, anywhere with our fully-featured mobile app.",
    icon: Smartphone,
    color: "from-pink-500 to-rose-600",
    textColor: "text-pink-400",
    borderColor: "border-pink-500/20",
    size: "col-span-2 md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3",
    variant: "image-dominant",
    hoverEffect: "zoom"
  },
  {
    title: "Payment Management",
    description: "Schedule payments and never miss a due date with automated reminders.",
    icon: CreditCard,
    color: "from-purple-500 to-violet-600",
    textColor: "text-purple-400",
    borderColor: "border-purple-500/20",
    size: "col-span-1 md:col-span-1 md:row-span-2",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3",
    variant: "icon-prominent",
    hoverEffect: "slide"
  },
  
  {
    title: "Lightning Fast",
    description: "Experience blazing fast performance with our optimized platform.",
    icon: Zap,
    color: "from-amber-400 to-orange-600",
    textColor: "text-amber-400",
    borderColor: "border-amber-500/20",
    size: "col-span-1 md:col-span-2 md:row-span-1",
    variant: "gradient-text",
    hoverEffect: "bounce"
  }
];


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
      <motion.div 
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
      ></motion.div>

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
