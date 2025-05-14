import React, { useEffect, useState } from 'react';
import { Rocket, Briefcase, Users, ArrowRight, ChevronRight } from 'lucide-react';
import { motion, useAnimation, useAnimationControls } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../../Context/LanguageContext';

// Feature Item in a horizontal split layout instead of cards
const FeatureItem = ({ icon, title, description, delay, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.7, 
        delay: delay * 0.15,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // Colors for each feature
  const colors = [
    { accent: 'text-emerald-600 bg-emerald-100', highlight: 'emerald' },
    { accent: 'text-cyan-600 bg-cyan-100', highlight: 'cyan' },
    { accent: 'text-indigo-600 bg-indigo-100', highlight: 'indigo' }
  ];
  
  const featureColor = colors[index % colors.length];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="w-full py-8 border-b border-gray-200 last:border-b-0"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* Icon container */}
        <motion.div 
          className={`flex items-center justify-center w-16 h-16 rounded-full ${featureColor.accent} flex-shrink-0`}
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0
          }}
          transition={{ type: "spring" }}
        >
          {React.cloneElement(icon, { size: 28, className: `${featureColor.accent.split(' ')[0]}` })}
        </motion.div>
        
        {/* Content */}
        <div className="flex-1">
          <motion.h3 
            className="text-xl md:text-2xl font-bold mb-3 font-playfair text-gray-900"
            animate={{ 
              color: isHovered ? `var(--${featureColor.highlight})` : "#1f2937",
              x: isHovered ? 3 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-600 font-poppins font-light mb-4"
            animate={{ opacity: isHovered ? 0.9 : 0.8 }}
          >
            {description}
          </motion.p>
          
          <motion.div 
            className={`inline-flex items-center ${featureColor.accent.split(' ')[0]} font-medium`}
            initial={{ opacity: 0.6 }}
            animate={{ 
              opacity: isHovered ? 1 : 0.6,
              x: isHovered ? 5 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="mr-1 font-poppins">
              {useLanguage().language === 'en' ? 'Learn more' : 'Läs mer'}
            </span>
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
              }}
            >
              <ChevronRight size={18} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const CTA = () => {
  const { language } = useLanguage();
  const controls = useAnimation();
  const buttonControls = useAnimationControls();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      
      // Button pulse animation
      const pulseAnimation = async () => {
        await buttonControls.start({
          scale: 1.05,
          boxShadow: "0 10px 30px -10px rgba(16, 185, 129, 0.5)",
          transition: { duration: 1 }
        });
        await buttonControls.start({
          scale: 1,
          boxShadow: "0 10px 20px -10px rgba(16, 185, 129, 0.3)",
          transition: { duration: 1 }
        });
      };
      
      pulseAnimation();
      const interval = setInterval(pulseAnimation, 5000);
      return () => clearInterval(interval);
    }
  }, [controls, inView, buttonControls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  // Translations
  const translations = {
    en: {
      tagline: "Future of Education",
      heading: "Ready to Transform Your Institution?",
      highlight: "Transform",
      subheading: "Elevate your school or university with our integrated LMS, Internship Placement, and Career Services platform.",
      cta: "GET STARTED TODAY",
      features: [
        {
          icon: <Rocket />,
          title: "Streamlined Learning",
          description: "Manage courses, schedules, and assignments effortlessly with our cutting-edge dashboard and analytics."
        },
        {
          icon: <Briefcase />,
          title: "Internship & Job Placement",
          description: "Connect students with opportunities and employers through our AI-powered matching system."
        },
        {
          icon: <Users />,
          title: "Collaborative Platform",
          description: "Empower real-time communication, project management, and knowledge sharing across your institution."
        }
      ]
    },
    sv: {
      tagline: "Framtidens Utbildning",
      heading: "Redo att Förändra Din Institution?",
      highlight: "Förändra",
      subheading: "Förbättra din skola eller universitet med vår integrerade LMS-plattform, praktikförmedling och karriärtjänster.",
      cta: "KOM IGÅN IDAG",
      features: [
        {
          icon: <Rocket />,
          title: "Effektivt Lärande",
          description: "Hantera kurser, scheman och uppgifter enkelt med vår toppmoderna instrumentpanel och analys."
        },
        {
          icon: <Briefcase />,
          title: "Praktik & Jobbplacering",
          description: "Koppla samman studenter med möjligheter och arbetsgivare genom vårt AI-drivna matchningssystem."
        },
        {
          icon: <Users />,
          title: "Samarbetsplattform",
          description: "Möjliggör kommunikation i realtid, projektledning och kunskapsdelning i hela din institution."
        }
      ]
    }
  };

  const currentLanguage = translations[language];

  return (
    <section className="relative px-6 py-24 md:py-40 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 font-poppins">
      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
        
        :root {
          --emerald: #059669;
          --cyan: #0891b2; 
          --indigo: #4f46e5;
        }
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient blob */}
        <motion.div 
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-emerald-100/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Smaller floating elements */}
        <motion.div 
          className="absolute bottom-40 right-20 w-64 h-64 rounded-full bg-cyan-100/20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.25, 0.2],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div 
          className="absolute top-60 right-1/4 w-40 h-40 rounded-full bg-indigo-100/10 blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 40, 0],
            y: [0, -40, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          {/* Two-column layout for main content */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            {/* Left column - Main content */}
            <motion.div variants={containerVariants} className="flex flex-col">
              {/* Animated tag */}
              <motion.div 
                variants={itemVariants} 
                className="mb-6 relative"
              >
                <motion.div
                  className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-600/90 to-teal-500/90 text-white rounded-full text-sm font-medium shadow-lg"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 10px 25px -5px rgba(20, 184, 166, 0.4)"
                  }}
                >
                  {currentLanguage.tagline}
                </motion.div>
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    background: [
                      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 51%, rgba(255,255,255,0) 100%)",
                      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 1%, rgba(255,255,255,0) 100%)"
                    ],
                    backgroundSize: ["200% 100%", "200% 100%"],
                    backgroundPosition: ["100% 0%", "0% 0%"]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 5
                  }}
                />
              </motion.div>

              {/* Animated Heading with Split Text Effect */}
              <motion.h2 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold leading-tight mb-8 font-playfair"
              >
                {currentLanguage.heading.split(currentLanguage.highlight)[0]}
                <motion.span 
                  className="inline-block relative text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-green-900"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  {" " + currentLanguage.highlight + " "}
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ 
                      delay: 1.2, 
                      duration: 0.8, 
                      ease: "easeOut" 
                    }}
                  />
                </motion.span>
                {currentLanguage.heading.split(currentLanguage.highlight)[1]}
              </motion.h2>

              {/* Animated subheading */}
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl mb-12 text-gray-600 font-poppins font-light"
              >
                {currentLanguage.subheading}
              </motion.p>

              {/* Enhanced CTA Button */}
              <motion.div variants={itemVariants} className="relative">
                <motion.a
                  href="/form"
                  whileHover={{ 
                    y: -4,
                    boxShadow: "0 15px 30px -5px rgba(16, 185, 129, 0.4)"
                  }}
                  whileTap={{ scale: 0.97 }}
                  animate={buttonControls}
                  className="relative inline-block px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold rounded-xl text-lg md:text-xl overflow-hidden group shadow-lg shadow-emerald-500/20 font-poppins"
                >
                  <motion.span 
                    className="relative z-10 flex items-center gap-2"
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(255,255,255,0)", 
                        "0 0 10px rgba(255,255,255,0.5)", 
                        "0 0 0px rgba(255,255,255,0)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  >
                    {currentLanguage.cta}
                    <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                  </motion.span>
                  
                  {/* Button hover effect */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-green-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                  />
                  
                  {/* Glow effect */}
                  <motion.span
                    className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-gradient-to-r from-blue-700 to-green-900"
                  />
                  
                  {/* Animated border */}
                  <motion.span 
                    className="absolute inset-0 border-2 border-emerald-400/70 rounded-xl opacity-0 group-hover:opacity-100"
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(16, 185, 129, 0)",
                        "0 0 20px rgba(16, 185, 129, 0.7)",
                        "0 0 0px rgba(16, 185, 129, 0)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  />
                </motion.a>
                
                {/* Pulse rings */}
                <motion.div
                  className="absolute -inset-4 rounded-xl border-2 border-emerald-400/30 -z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    times: [0, 0.5, 1]
                  }}
                />
                <motion.div
                  className="absolute -inset-8 rounded-xl border-2 border-emerald-400/20 -z-20"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.2, 0.4, 0]
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.5,
                    repeat: Infinity,
                    ease: "easeOut",
                    times: [0, 0.5, 1]
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Right column - Placeholder illustration */}
            <motion.div 
              variants={itemVariants} 
              className="relative hidden lg:flex items-center justify-center"
            >
              <motion.div 
                className="relative w-full max-w-md aspect-square bg-gradient-to-br from-emerald-100 to-cyan-50 rounded-3xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-80"
                  initial={{ opacity: 0.8 }}
                />
                
                {/* Abstract shapes */}
                <motion.div 
                  className="absolute w-40 h-40 rounded-full bg-emerald-500/20 blur-xl"
                  animate={{ 
                    x: [0, 20, 0], 
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  style={{ top: '25%', left: '15%' }}
                />
                
                <motion.div 
                  className="absolute w-32 h-32 rounded-full bg-cyan-500/20 blur-xl"
                  animate={{ 
                    x: [0, -15, 0], 
                    y: [0, 15, 0],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1 
                  }}
                  style={{ bottom: '20%', right: '15%' }}
                />
                
                <motion.div 
                  className="absolute w-24 h-24 rounded-full bg-indigo-500/10 blur-xl"
                  animate={{ 
                    x: [0, 12, 0], 
                    y: [0, 12, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 12, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  style={{ bottom: '30%', left: '35%' }}
                />
                
                {/* Stylized decorative elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4">
                  <motion.div 
                    className="absolute w-12 h-32 bg-gradient-to-b from-emerald-500/70 to-cyan-500/70 rounded-full"
                    animate={{ rotate: [0, 10, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    style={{ top: '10%', left: '25%' }}
                  />
                  
                  <motion.div 
                    className="absolute w-20 h-20 bg-gradient-to-r from-indigo-500/60 to-purple-500/60 rounded-full"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    style={{ bottom: '20%', right: '15%' }}
                  />
                  
                  <motion.div 
                    className="absolute w-16 h-16 bg-gradient-to-r from-teal-500/50 to-green-500/50 rounded-lg rotate-45"
                    animate={{ rotate: [45, 55, 45] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    style={{ top: '50%', left: '50%' }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Feature list (vertical layout instead of cards) */}
          <motion.div 
            variants={containerVariants}
            className="w-full max-w-4xl px-4 md:px-8 py-8 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100"
          >
            <div className="w-full">
              {currentLanguage.features.map((feature, index) => (
                <FeatureItem 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;