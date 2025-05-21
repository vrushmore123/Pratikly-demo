import React, { useEffect, useState, useRef } from 'react';
import video from '../../../public/Video.mp4';
import logocircle from '../../assets/circlelogo.png';
import { Calendar, ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../../Context/LanguageContext';
import { useTheme } from '../../Context/ThemeContext';

const Hero = () => {
  const { language } = useLanguage();
  const { darkMode } = useTheme();
  const [rotation, setRotation] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const heroRef = useRef(null);
  
  // Logo rotation effect
  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);
    
    return () => clearInterval(rotateInterval);
  }, []);
  
  // Animation trigger on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const translations = {
    en: {
      title: 'Where learning meets the future of work – all in one place.',
      subtitle: 'Our platform connects education, internships, and job opportunities to empower students, support schools, and engage employers – using smart technology that simplifies it all.',
      button1: 'Get Started',
      button2: 'Book a Demo'
    },
    sv: {
      title: 'Forma framtidens lärande och arbetsliv – på ett ställe och samma ställe.',
      subtitle: 'Vår plattform kopplar samman utbildning, praktik och jobb för att rusta studenter, stötta skolor och engagera arbetsgivare – med smart teknik som förenklar allt.',
      button1: 'Kom igång',
      button2: 'Boka en demo'
    }
  };

  return (
    <>
      <section ref={heroRef} className={`relative overflow-hidden pt-16 md:pt-[100px] pb-20 md:pb-[120px] px-6 sm:px-6 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      } font-["Helvetica_Neue",sans-serif]`}>
        {/* Animated Background with subtle circular glowing effect */}
        <div className={`absolute inset-0 overflow-hidden ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        }`}>
          <div className="absolute w-full h-full opacity-30">
            {/* Multiple light circular glows that move slowly */}
            <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-40 animate-float-slow ${
              darkMode ? 'bg-gradient-to-r from-purple-900 to-blue-900' : 'bg-gradient-to-r from-green-100 to-green-200'
            }`}></div>
            <div className={`absolute top-1/2 left-2/3 w-80 h-80 rounded-full blur-3xl opacity-30 animate-float-slow-reverse ${
              darkMode ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-gradient-to-r from-blue-50 to-green-100'
            }`}></div>
            <div className={`absolute -bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-40 animate-float-medium ${
              darkMode ? 'bg-gradient-to-r from-purple-800 to-blue-800' : 'bg-gradient-to-r from-green-50 to-blue-100'
            }`}></div>
            <div className={`absolute top-1/3 -right-20 w-80 h-80 rounded-full blur-3xl opacity-30 animate-float-medium-reverse ${
              darkMode ? 'bg-gradient-to-r from-blue-800 to-purple-800' : 'bg-gradient-to-r from-blue-100 to-green-50'
            }`}></div>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto mt-20 md:mt-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            {/* Left Content - Text section */}
            <div className={`w-full md:w-[35%] pr-0 md:pr-6 z-10 transform transition-all duration-1000 ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
              {/* Text with circular glowing effect - reduced size */}
              <div className="relative mb-5">
                <div className={`absolute -inset-4 rounded-full blur-2xl opacity-50 animate-glow-pulse ${
                  darkMode ? 'bg-gradient-to-r from-purple-800 via-blue-800 to-gray-900' : 'bg-gradient-to-r from-green-100 via-green-200 to-white'
                }`}></div>
                <h1 className={`font-["Helvetica_Neue",sans-serif] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-[-0.02em] relative z-10 ${
                  darkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-green-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-[#014825] via-[#1e9937] to-[#2be346]'
                } animate-circular-text`}>
                  {translations[language].title}
                </h1>
              </div>
              
              <div className="my-4 md:my-5 mb-6 relative">
                <div className={`absolute -inset-2 rounded-3xl blur-xl opacity-60 animate-glow-pulse-slow ${
                  darkMode ? 'bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800' : 'bg-gradient-to-r from-white via-green-50 to-white'
                }`}></div>
                <p className={`text-base sm:text-lg md:text-xl font-serif relative z-10 ${
                  darkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  {translations[language].subtitle}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                {/* Get Started Button with improved animation */}
                <a
                  href="/form"
                  className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#14a52b] via-[#24d040] to-[#3feb53] text-white font-bold uppercase tracking-wider text-sm px-5 py-3 rounded-lg overflow-hidden"
                >
                  {/* Button glow effect */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-400 via-green-300 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-shimmer"></div>
                  
                  {/* Button pulse effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-300 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 group-hover:animate-pulse-fast"></div>
                  
                  <span className="relative flex items-center gap-2 z-10">
                    <span>{translations[language].button1}</span>
                    <ArrowRight size={16} className="inline-block transition-transform group-hover:translate-x-1 duration-300" strokeWidth={2.5} />
                  </span>
                </a>
                
                {/* Book a Demo Button with improved animation */}
                <a
                  href="/form" 
                  className={`group relative inline-flex items-center justify-center gap-2 ${
                    darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                  } font-bold uppercase tracking-wider text-sm px-5 py-3 rounded-lg overflow-hidden`}
                >
                  {/* Button glow effect */}
                  <div className={`absolute inset-0 w-full h-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 animate-shimmer ${
                    darkMode ? 'bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900' : 'bg-gradient-to-r from-green-100 via-blue-50 to-green-100'
                  }`}></div>
                  
                  {/* Button pulse effect */}
                  <div className={`absolute -inset-1 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500 group-hover:animate-pulse-fast ${
                    darkMode ? 'bg-gradient-to-r from-purple-700 to-blue-700' : 'bg-gradient-to-r from-green-200 to-blue-100'
                  }`}></div>
                  
                  <span className="relative flex items-center gap-2 z-10">
                    <Calendar size={16} className="inline-block transition-transform group-hover:scale-110 duration-300" strokeWidth={2.5} />
                    <span>{translations[language].button2}</span>
                  </span>
                </a>
              </div>
            </div>
            
            {/* Right Content - Video container */}
            <div className={`w-full md:w-[65%] transform transition-all duration-1000 ${isInView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
              <div className="relative w-full aspect-video">
                {/* Video with NO borders or shadows - increased size */}
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                  poster="https://uploads-ssl.webflow.com/6288ac9dfd4546a3d0059f67/628ca004973e7252586a780b_61d72a2cda50bc59672876f3_Hero_Animation-transcode-poster-00001.jpg"
                >
                  <source src={video} type="video/mp4" />
                </video>
                
                {/* Enhanced glow around video */}
                <div className={`absolute -inset-2 blur-md opacity-50 pointer-events-none animate-glow-pulse-slow ${
                  darkMode ? 'bg-gradient-to-r from-purple-900/20 via-gray-900/5 to-blue-900/20' : 'bg-gradient-to-r from-green-200/20 via-white/5 to-green-200/20'
                }`}></div>
                
                {/* Subtle gradient overlay for integration */}
                <div className={`absolute inset-0 pointer-events-none ${
                  darkMode ? 'bg-gradient-to-r from-gray-900/10 via-transparent to-gray-900/10' : 'bg-gradient-to-r from-white/10 via-transparent to-white/10'
                }`}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curved base with center play button */}
      <div className={`relative ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className={`h-8 md:h-[50px] ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        }`}></div>

        <div className="mb-6 md:mb-9 absolute inset-x-0 -bottom-12 md:-bottom-[60px] flex items-center justify-center">
          {/* Left decorative line with animation - medium length */}
          <div className="w-28 sm:w-36 md:w-48 lg:w-64 relative">
            <div className={`h-[2px] md:h-[3px] mx-3 animate-pulse ${
              darkMode ? 'bg-gradient-to-r from-transparent via-purple-600 to-purple-600' : 'bg-gradient-to-r from-transparent via-[#007C91] to-[#007C91]'
            }`} style={{ animationDuration: '3s' }}></div>
            <div className={`absolute -top-[4px] left-0 w-2 h-2 md:w-3 md:h-3 rounded-full animate-ping ${
              darkMode ? 'bg-purple-600' : 'bg-[#007C91]'
            }`} style={{ animationDuration: '4s', animationIterationCount: 'infinite' }}></div>
          </div>
          
          {/* Enhanced Rotating Circle with glow effect */}
          <div className={`w-24 h-24 sm:w-28 sm:h-28 md:w-[160px] md:h-[160px] rounded-full flex items-center justify-center z-20 relative overflow-hidden hover:scale-105 transition-transform duration-300 group cursor-pointer ${
            darkMode ? 'bg-gradient-to-br from-purple-800 to-blue-800' : 'bg-gradient-to-br from-[#014825] to-[#037c35]'
          }`}>
            {/* Circular gradient glow */}
            <div className={`absolute -inset-2 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-spin-slow ${
              darkMode ? 'bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500' : 'bg-gradient-to-r from-green-300 via-green-200 to-green-300'
            }`}></div>
            
            {/* Inner circular glow */}
            <div className={`absolute inset-0 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-spin-reverse-slow ${
              darkMode ? 'bg-gradient-to-r from-purple-600/20 via-blue-500/10 to-purple-600/20' : 'bg-gradient-to-r from-green-500/20 via-green-400/10 to-green-500/20'
            }`}></div>
            
            {/* Rotating logo */}
            <div style={{ transform: `rotate(${rotation}deg)` }} className="absolute inset-0 flex items-center justify-center transition-transform duration-100 ease-linear">
              <img 
                src={logocircle} 
                alt="Logo" 
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-[90px] md:h-[90px] object-contain" 
              />
            </div>
            
            {/* Play icon overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Play size={36} className="text-white/90 fill-white/30" />
            </div>
          </div>
          
          {/* Right decorative line with animation - medium length */}
          <div className="w-28 sm:w-36 md:w-48 lg:w-64 relative">
            <div className={`h-[2px] md:h-[3px] mx-3 animate-pulse ${
              darkMode ? 'bg-gradient-to-l from-transparent via-purple-600 to-purple-600' : 'bg-gradient-to-l from-transparent via-[#007C91] to-[#007C91]'
            }`} style={{ animationDuration: '3s' }}></div>
            <div className={`absolute -top-[4px] right-0 w-2 h-2 md:w-3 md:h-3 rounded-full animate-ping ${
              darkMode ? 'bg-purple-600' : 'bg-[#007C91]'
            }`} style={{ animationDuration: '4s', animationIterationCount: 'infinite' }}></div>
          </div>
        </div>
      </div>

      {/* Animation styles remain the same */}
      <style jsx>{`
       
        @keyframes circular-text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes glow-pulse {
          0% { opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { opacity: 0.3; }
        }
        
        @keyframes glow-pulse-slow {
          0% { opacity: 0.2; }
          50% { opacity: 0.5; }
          100% { opacity: 0.2; }
        }
        
        @keyframes pulse-fast {
          0% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.02); }
          100% { opacity: 0.3; transform: scale(1); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 50%; }
          100% { background-position: 200% 50%; }
        }
        
        @keyframes float-slow {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        @keyframes float-slow-reverse {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(10px) translateX(-10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        @keyframes float-medium {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(5px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        @keyframes float-medium-reverse {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(15px) translateX(-5px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        
        .animate-circular-text {
          animation: circular-text 8s linear infinite;
          background-size: 200% 200%;
        }
        
        .animate-glow-pulse {
          animation: glow-pulse 4s ease-in-out infinite;
        }
        
        .animate-glow-pulse-slow {
          animation: glow-pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-pulse-fast {
          animation: pulse-fast 2s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
          background-size: 200% 100%;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-float-slow-reverse {
          animation: float-slow-reverse 12s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 8s ease-in-out infinite;
        }
        
        .animate-float-medium-reverse {
          animation: float-medium-reverse 9s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        
        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 20s linear infinite;
        }
      
      `}</style>
    </>
  );
};

export default Hero;