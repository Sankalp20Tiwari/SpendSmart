import { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Play } from 'lucide-react';



const FeatureCard = ({ feature, index = 0, isSelected = false, onSelect = () => {} }) => {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: index * 0.1
      }
    }
  };

  const getCardContent = () => {
    const Icon = feature.icon;
    
    switch (feature.variant) {
      
      case 'gradient':
        return (
          <div className="relative h-full overflow-hidden rounded-3xl group">
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-90 group-hover:opacity-100 transition-opacity duration-700`}></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.1),transparent_70%)]"></div>
            <div className="relative z-10 h-full flex flex-col justify-between p-6">
              <motion.div 
                className="backdrop-blur-sm bg-black/20 rounded-full h-12 w-12 flex items-center justify-center"
                animate={hovered ? { scale: 1.1, rotate: 5 } : {}}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Icon className="h-6 w-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mt-4">{feature.title}</h3>
                <p className="text-white/80 mt-2 text-sm">{feature.description}</p>
              </div>
            </div>
            
          </div>
        );
        
        case 'banner':
            return (
              <div className="relative h-full overflow-hidden rounded-3xl group">
          
                {/* Video or image background */}
                {feature.video ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                  >
                    <source src={feature.video} type="video/mp4" />
                  </video>
                ) : (
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                    animate={hovered ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ duration: 0.7 }}
                  />
                )}
          
                {/* FIXED: Black overlay with transparency */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
          
                {/* Foreground content */}
                <div className="relative z-10 h-full flex flex-col p-6 justify-end">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      className={`p-2 rounded-full bg-gradient-to-br ${feature.color}`}
                      animate={hovered ? { scale: 1.1, rotate: 5 } : {}}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
          
                  <p className="text-white/80 max-w-md">{feature.description}</p>
          
                  <motion.div
                    className="mt-4 flex items-center gap-2 cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="text-white text-sm font-medium">Watch demo</span>
                    <motion.div
                      className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm"
                      animate={hovered ? { scale: 1.1 } : {}}
                      transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
                    >
                      <Play className="h-4 w-4 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            );
        
      case 'vertical':
        return (
          <div className="relative h-full overflow-hidden rounded-3xl group flex flex-col">
            <div className="h-1/2 relative overflow-hidden">
              <motion.img 
                src={feature.image} 
                alt={feature.title}
                className="w-full h-full object-cover"
                animate={hovered ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
            </div>
            <div className={`h-1/2 flex flex-col justify-between p-6 bg-gradient-to-br ${feature.color} bg-opacity-10`}>
              <div className="flex items-center gap-3 mb-3">
                <motion.div 
                  className={`p-2 rounded-full bg-gradient-to-br ${feature.color}`}
                  animate={hovered ? { rotate: 10 } : { rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
              <p className="text-white/80 text-sm">{feature.description}</p>
              
              <motion.div 
                className="mt-4 flex items-center justify-between cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center gap-2">
                  <span className={`${feature.textColor} text-sm font-medium`}>Explore feature</span>
                  <ChevronRight className={`h-4 w-4 ${feature.textColor}`} />
                </div>
                
                <div className="relative">
                  <motion.div
                    className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-green-400"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="h-3 w-3 rounded-full bg-green-500/20"></div>
                </div>
              </motion.div>
            </div>
          </div>
        );
        
      case 'icon-left':
        return (
          <div className={`relative h-full rounded-3xl p-6 border ${feature.borderColor} group overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900"></div>
            <motion.div 
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"
              animate={hovered ? { opacity: 0.8, scale: 1.2 } : { opacity: 0.5, scale: 1 }}
              transition={{ duration: 0.7 }}
            ></motion.div>
            
            <div className="relative z-10 flex h-full">
              <div className="mr-4">
                <motion.div 
                  className={`p-2 rounded-full bg-gradient-to-br ${feature.color}`}
                  animate={hovered ? { 
                    y: [0, -5, 0],
                    rotate: [0, 5, 0]
                  } : {}}
                  transition={{ 
                    duration: 2, 
                    repeat: hovered ? Infinity : 0, 
                    ease: "easeInOut" 
                  }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </motion.div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </div>
            </div>
            
            <motion.div
              className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full"
              style={{
                background: `radial-gradient(circle at center, ${hovered ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0)'} 0%, transparent 70%)`
              }}
              animate={hovered ? { scale: 1.5, opacity: 1 } : { scale: 1, opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        );
        
        case 'icon-prominent':
            return (
              <div className="relative h-full  overflow-hidden rounded-3xl group">
          
                {/* Dark gradient overlay first */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-0"></div>
          
                {/* Image above dark gradient */}
                {feature.image && (
                  <img
                    src={feature.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale blur-sm group-hover:opacity-50 transition duration-500"
                  />
                )}
          
                {/* Radial hover glow */}
                <motion.div
                  className="absolute inset-0"
                  animate={hovered ? { opacity: 0.6 } : { opacity: 0.2 }}
                  transition={{ duration: 0.8 }}
                />
          
                {/* Foreground content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  <motion.div
                    className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color}`}
                    animate={hovered ? {
                      y: [0, -5, 0],
                      rotate: 5
                    } : { rotate: 0 }}
                    transition={{
                      y: { duration: 1.5, repeat: hovered ? Infinity : 0, ease: "easeInOut" },
                      rotate: { duration: 0.3 }
                    }}
                  >
                    <Icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                  </motion.div>
          
                  <div>
                    <h3 className={`text-xl font-bold ${feature.textColor} mt-4`}>{feature.title}</h3>
                    <p className="text-white/80 mt-2 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
        
      case 'image-dominant':
        return (
          <div className="relative h-full overflow-hidden rounded-3xl group">
            <motion.img 
              src={feature.image} 
              alt={feature.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              animate={hovered ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.7 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-end p-6">
              <div className="flex items-center gap-3 mb-2">
                <motion.div 
                  className={`p-2 rounded-full bg-gradient-to-br ${feature.color}`}
                  animate={hovered ? { scale: 1.1 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
              <p className="text-white/70 text-sm">{feature.description}</p>
            </div>
            
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 rounded-full"
              style={{
                background: `radial-gradient(circle at center, ${hovered ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0)'} 0%, transparent 70%)`
              }}
              animate={hovered ? { scale: 1.5, opacity: 1 } : { scale: 1, opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        );
        
      case 'minimal':
        return (
          <div className={`relative h-full rounded-3xl p-6 border ${feature.borderColor} group overflow-hidden bg-gray-900`}>
            <motion.div
              className="absolute inset-0 bg-black opacity-50"
              animate={hovered ? { opacity: 0.8 } : { opacity: 0.5 }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <motion.div 
                className={`p-2 w-fit rounded-full bg-gradient-to-br ${feature.color}`}
                animate={hovered ? { 
                  scale: [1, 1.1, 1], 
                  rotate: [0, 5, 0] 
                } : {}}
                transition={{ 
                  duration: 1.5, 
                  repeat: hovered ? Infinity : 0, 
                  ease: "easeInOut" 
                }}
              >
                <Icon className="h-5 w-5 text-white" />
              </motion.div>
              <div>
                <h3 className={`text-xl font-bold ${feature.textColor} mb-2`}>{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </div>
            </div>
            
            <motion.div
              className="absolute -bottom-20 -right-20 w-40 h-40"
              style={{
                background: `radial-gradient(circle at center, ${feature.color?.split(' ')[1]?.replace('to-', '') || 'purple-500'} 0%, transparent 70%)`,
                opacity: 0.2
              }}
              animate={hovered ? { opacity: 0.6, scale: 1.2 } : { opacity: 0.2, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        );
        
      case 'gradient-text':
        return (
          <div className={`relative h-full rounded-3xl p-6 border ${feature.borderColor} bg-gray-900 group overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <motion.div 
                  className={`p-2 rounded-full bg-gradient-to-br ${feature.color}`}
                  animate={hovered ? { rotate: 10 } : { rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Icon className="h-5 w-5 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
              </div>
              <p className="text-white/70 text-sm mt-4">{feature.description}</p>
              
              <motion.div 
                className="mt-4 h-1 bg-gradient-to-r from-amber-400 to-orange-600"
                initial={{ width: 0 }}
                animate={hovered ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.7 }}
              />
            </div>
            
          </div>
        );
        
      default:
        return (
          <div className="relative h-full overflow-hidden rounded-3xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
            <div className="relative z-10 h-full flex flex-col justify-between p-6">
              <div className={`p-2 w-fit rounded-full bg-gradient-to-br ${feature.color}`}>
                <Icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </div>
            </div>
          </div>
        );
    }
  };

  const getHoverAnimation = () => {
    
    switch (feature.hoverEffect) {
      case 'scale':
        return {
          whileHover: { scale: 1.03 },
          transition: { type: "spring", stiffness: 400, damping: 10 }
        };
      case 'glow':
        return {
          whileHover: { boxShadow: `0 0 20px 2px ${feature.color?.split(' ')[1]?.replace('to-', '')}40` || '0 0 20px 2px rgba(129, 140, 248, 0.4)' },
          transition: { duration: 0.3 }
        };
      case 'reveal':
        return {
          whileHover: { y: -5 },
          transition: { type: "spring", stiffness: 400, damping: 10 }
        };
      case 'slide':
        return {
          whileHover: { x: 5 },
          transition: { type: "spring", stiffness: 400, damping: 10 }
        };
      case 'float':
        return {
          animate: { y: [0, -10, 0] , opacity: 1},
          transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        };
      case 'zoom':
        return {
          whileHover: { scale: 1.05 },
          transition: { type: "spring", stiffness: 300, damping: 10 }
        };
      case 'pulse':
        return {
          whileHover: { 
            boxShadow: [
              `0 0 0px 0px ${feature.color?.split(' ')[1]?.replace('to-', '')}00` || '0 0 0px 0px rgba(129, 140, 248, 0)',
              `0 0 20px 2px ${feature.color?.split(' ')[1]?.replace('to-', '')}40` || '0 0 20px 2px rgba(129, 140, 248, 0.4)',
              `0 0 0px 0px ${feature.color?.split(' ')[1]?.replace('to-', '')}00` || '0 0 0px 0px rgba(129, 140, 248, 0)'
            ]
          },
          transition: { duration: 1.5, repeat: Infinity }
        };
      case 'bounce':
        return {
          whileHover: { y: [0, -8, 0] },
          transition: { duration: 0.6 }
        };
      default:
        return {
          whileHover: { y: -5 },
          transition: { type: "spring", stiffness: 400, damping: 10 }
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`${feature.size} cursor-pointer`}
      variants={variants}
      initial="hidden"
      animate={controls}
      onClick={onSelect}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      {...getHoverAnimation()}
    >
      {getCardContent()}
    </motion.div>
  );
};

export default FeatureCard;
