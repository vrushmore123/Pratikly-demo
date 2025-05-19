// src/components/Hero.jsx
import React, { useEffect, useState } from 'react';
import video from '../../../public/Video.mp4';
import logocircle from '../../assets/circlelogo.png';
import { Calendar, ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../../Context/LanguageContext';

const Hero = () => {
  const { language } = useLanguage();
  const [rotation, setRotation] = useState(0);

  // Logo rotation effect
  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);
    
    return () => clearInterval(rotateInterval);
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
  <section className="bg-[#ffffff] pt-16 md:pt-[100px] pb-20 md:pb-[120px] px-6 sm:px-6 relative overflow-hidden">
    <div className="max-w-[1400px] mx-auto mt-12">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 z-10">
          <h1 className="text-[#0b5814] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-[-0.02em] mb-4 md:mb-6">
            {translations[language].title}
          </h1>
          <div className="my-4 md:my-5 mb-6 md:mb-8">
            <p className="text-base sm:text-lg md:text-xl text-[#000000]">
              {translations[language].subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5">
            {/* Get Started Button */}
            <a
              href="/form"
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2be346] to-[#3feb53] text-gray-900 font-bold uppercase tracking-wide text-sm sm:text-base px-4 sm:px-5 md:px-7 py-2 sm:py-3 md:py-4 rounded-lg border border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative flex items-center gap-2 sm:gap-3">
                <span>{translations[language].button1}</span>
                <ArrowRight size={18} className="inline-block transition-transform group-hover:translate-x-2 duration-300" />
              </span>
            </a>
            
            {/* Book a Demo Button */}
            <a
              href="/form"
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-white to-gray-50 text-gray-900 font-bold uppercase tracking-wide text-sm sm:text-base px-4 sm:px-5 md:px-7 py-2 sm:py-3 md:py-4 rounded-lg border border-gray-300 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative flex items-center gap-2 sm:gap-3">
                <Calendar size={18} className="inline-block transition-transform group-hover:scale-110 duration-300" />
                <span>{translations[language].button2}</span>
              </span>
            </a>
          </div>
        </div>

        {/* Video Container */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="relative rounded-xl overflow-hidden aspect-video w-full">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover rounded-xl"
              poster="https://uploads-ssl.webflow.com/6288ac9dfd4546a3d0059f67/628ca004973e7252586a780b_61d72a2cda50bc59672876f3_Hero_Animation-transcode-poster-00001.jpg"
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Curved base with center play button */}
  <div className="relative bg-white">
    <div className="h-8 md:h-[50px] bg-[#ffffff]"></div>

    <div className="mb-6 md:mb-9 absolute inset-x-0 -bottom-12 md:-bottom-[60px] flex items-center justify-center">
      {/* Left decorative line */}
      <div className="flex-1 relative">
        <div className="h-[1px] md:h-[2px] bg-gradient-to-r from-transparent via-[#007C91] to-[#007C91] mx-2 md:mx-4"></div>
        <div className="absolute -top-[2px] md:-top-[4px] left-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#007C91]"></div>
      </div>
      
      {/* Rotating Circle */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-[150px] md:h-[150px] bg-gradient-to-br from-[#014825] to-[#037c35] rounded-full flex items-center justify-center shadow-md md:shadow-xl z-20 ring-2 md:ring-4 ring-white/30 relative overflow-hidden hover:scale-105 transition-transform duration-300">
        <div style={{ transform: `rotate(${rotation}deg)` }} className="absolute inset-0 flex items-center justify-center transition-transform duration-100 ease-linear">
          <img 
            src={logocircle} 
            alt="Logo" 
            className="w-10 h-10 sm:w-14 sm:h-14 md:w-[80px] md:h-[80px] object-contain" 
          />
        </div>
      </div>
      
      {/* Right decorative line */}
      <div className="flex-1 relative">
        <div className="h-[1px] md:h-[2px] bg-gradient-to-l from-transparent via-[#007C91] to-[#007C91] mx-2 md:mx-4"></div>
        <div className="absolute -top-[2px] md:-top-[4px] right-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#007C91]"></div>
      </div>
    </div>
  </div>
</>
  );
};

export default Hero;