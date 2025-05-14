// src/components/Hero.jsx
import React, { useEffect, useState } from 'react';
import video from '/Video.mp4';
import logocircle from '../../assets/circlelogo.png';
import { Calendar, ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../Context/LanguageContext';
import { useTheme } from '../../Context/ThemeProvider';
import { motion } from 'framer-motion'; // Add framer-motion for animations

const Hero = () => {
  const { language } = useLanguage();
  const { darkMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    en: {
      title: 'Empowering Education. Enabling Careers.',
      subtitle: 'Welcome to the Future Learning Platform',
      description: 'Discover a revolutionary approach to education that combines cutting-edge technology with expert-led content to transform your learning journey.',
      button: 'Book a Demo',
   
    },
    sv: {
      title: 'Främja utbildning. Möjliggör karriärer.',
      subtitle: 'Välkommen till framtidens lärandeplattform',
    
      button: 'Boka en demo',
      scrollText: 'Utforska mer'
    }
  };

  // Enhanced color scheme based on mode
  const colors = {
    light: {
      primary: 'text-blue-700',
      secondary: 'text-indigo-900',
      accent: 'text-teal-600',
      bg: 'bg-white',
      button: 'bg-black',
      buttonBorder: 'border-blue-800',
      buttonShadow: 'shadow-blue-700/30',
      circleGradient: 'bg-gradient-to-tr from-blue-700 to-teal-500'
    },
    dark: {
      primary: 'text-teal-400',
      secondary: 'text-blue-300',
      accent: 'text-amber-300',
      bg: 'bg-white',  // Keep background white even in dark mode
      button: 'bg-black',
      buttonBorder: 'border-blue-800',
      buttonShadow: 'shadow-blue-700/30',
      circleGradient: 'bg-gradient-to-tr from-blue-700 to-teal-500'
    }
  };

  const currentColors = darkMode ? colors.dark : colors.light;

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <>
      <section className={`bg-white pt-[80px] md:pt-[110px] pb-[120px] md:pb-[160px] px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-all duration-700`}>
        {/* Background gradient orbs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className={`absolute top-[10%] left-[5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full ${darkMode ? 'bg-blue-900/10' : 'bg-blue-500/5'} blur-[120px]`}></div>
          <div className={`absolute bottom-[20%] right-[10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full ${darkMode ? 'bg-teal-900/10' : 'bg-teal-500/5'} blur-[100px]`}></div>
        </div>

        {/* Main content container */}
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="relative">
            <motion.div 
              className="max-w-[640px] ml-[3%] z-10 relative"
              initial="hidden"
              animate="visible"
              variants={staggerChildren}
            >
     

              {/* Main heading with gradient */}
              <motion.h1 
                variants={fadeInUp}
                className="font-extrabold text-[2.5rem] sm:text-[3.25rem] md:text-[4.5rem] leading-[1.1] tracking-tight mb-6 md:mb-8"
              >
                <span className=" text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-green-900 font-serif">
                  {translations[language].title.split('.')[0]}
                </span>
                <br />
                <span className="text-indigo-900 font-serif">
                  {translations[language].title.split('.')[1]}
                </span>
              </motion.h1>

              {/* Subtitle with enhanced styling */}
              <motion.div 
                variants={fadeInUp}
                className="my-4 md:my-5 mb-6 md:mb-8"
              >
                <h2 className="text-xl sm:text-2xl font-medium text-blue-800">
                  {translations[language].subtitle}
                </h2>
              
              </motion.div>

              {/* CTA button with enhanced animations */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap gap-4 items-center"
              >
                <a
                  href="/form"
                  className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-br from-blue-700 to-teal-500 font-bold uppercase tracking-wide px-7 py-3.5 rounded-lg border-2 border-blue-800 shadow-blue-700/30 shadow-lg transform hover:translate-y-[-2px] hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute right-0 top-0 h-full w-12 translate-x-12 " />
                  <span className="flex items-center gap-2 relative z-10 ">
                    <Calendar size={18} className="inline-block text-white" />
                    <span className="text-white ">{translations[language].button}</span>
                    <ArrowRight 
                      size={18} 
                      className="inline-block transition-transform group-hover:translate-x-1 text-white" 
                    />
                  </span>
                </a>
                
                <a 
                  href="#features" 
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md text-slate-600 hover:text-blue-700 transition-colors duration-300"
                >
                  
                </a>
              </motion.div>
            </motion.div>

            {/* Video container with enhanced styling - more integrated and moved upward */}
            <div className=" mb-0.5 ml-0 md:ml-32 w-full md:w-[90%] pt-[52%] absolute top-auto right-auto bottom-[-120px] md:bottom-[-180px] left-0 md:left-[18%] overflow-hidden">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className={`mt-24 w-full h-full absolute inset-0 transition-all duration-500`}
              >
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                  poster="https://uploads-ssl.webflow.com/6288ac9dfd4546a3d0059f67/628ca004973e7252586a780b_61d72a2cda50bc59672876f3_Hero_Animation-transcode-poster-00001.jpg"
                >
                  <source src={video} type="video/mp4" />
                  <source src="/videos/61d72a2cda50bc59672876f3_Hero_Animation-transcode-transcode.webm" type="video/webm" />
                </video>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center animate-pulse ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          <span className="text-xs uppercase tracking-widest mb-2 font-medium">Scroll</span>
          <div className="w-[1px] h-6 bg-current"></div>
        </div>
      </section>

      {/* Curved base with center logo */}
      <div className={`relative bg-blue-500  ${darkMode ? 'dark:bg-slate-800' : 'dark:bg-slate-900'} transition-colors duration-500`}>
        <div className={`h-[40px] md:h-[50px] bg-white`}></div>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-6 md:mb-9 absolute inset-x-0 -bottom-[50px] md:-bottom-[60px] flex items-center justify-center"
        >
          {/* Left decorative line with animation */}
          <div className="mt-15  flex-1 relative overflow-hidden z-20">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }}
              className={`h-[2px] origin-right bg-gradient-to-r from-transparent ${
                darkMode ? 'via-teal-500/80 to-teal-400' : 'via-blue-600/80 to-blue-700'
              } mx-4`}
            ></motion.div>
            <div className={`absolute -top-[4px] left-0 w-2 h-2 rounded-full ${
              darkMode ? 'bg-teal-400' : 'bg-blue-700'
            }`}></div>
          </div>
          
          {/* Logo Circle with pulse effect and rotation */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear"
            }}
            className={`w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] rounded-full flex items-center justify-center shadow-xl z-20 relative group ${currentColors.circleGradient} ring-4 ${
              darkMode ? 'ring-blue-900/20' : 'ring-white/30'
            } transition-all duration-500 hover:scale-105`}
          >
            {/* Animated rings */}
            <div className={`absolute inset-0 rounded-full ${darkMode ? 'bg-teal-500/20' : 'bg-blue-600/20'} animate-ping-slow opacity-0 group-hover:opacity-100`}></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent to-white/20 animate-rotate-slow"></div>
            
            {/* Counter-rotating logo to keep it upright */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear"
              }}
            >
              <img 
                src={logocircle} 
                alt="Logo" 
                className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] object-contain relative z-10 drop-shadow-lg" 
              />
            </motion.div>
          </motion.div>
          
          {/* Right decorative line with animation */}
          <div className="mt-15 flex-1 relative overflow-hidden z-20 ">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1, ease: "easeInOut" }}
              className={`h-[2px] origin-left bg-gradient-to-l from-transparent ${
                darkMode ? 'via-teal-500/80 to-teal-400' : 'via-blue-600/80 to-green-900'
              } mx-4`}
            ></motion.div>
            <div className={`absolute -top-[4px] right-0 w-2 h-2 rounded-full ${
              darkMode ? 'bg-teal-400' : 'bg-blue-700'
            }`}></div>
          </div>
        </motion.div>
      </div>

      {/* Add required CSS for custom animations */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
        
        /* Set the main fonts for the application */
        html {
          font-family: 'Poppins', sans-serif;
        }
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        /* Custom animation for button shimmer effect */
        @keyframes shimmer {
          0% {
            transform: translateX(-150%);
          }
          100% {
            transform: translateX(150%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
        
        /* Animation for slow ping effect */
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          70%, 100% {
            transform: scale(1.7);
            opacity: 0;
          }
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        /* Animation for rotating gradient */
        @keyframes rotate-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 10s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Hero;