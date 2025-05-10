// src/components/Hero.jsx
import React from 'react';
import video from '../../../public/Video.mp4';
import logocircle from '../../assets/circlelogo.png';
import { Calendar, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <>
      <section className="bg-[#ffffff] pt-[100px] pb-[200px] px-10 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative">
            <div className="max-w-[580px] ml-[4%] z-10 relative">
              <h1 className="text-[#0b5814] text-[3.5rem] md:text-[4.2rem] font-bold leading-[1.2] tracking-[-0.02em] mb-8">
                Empowering Education. Enabling Careers.
              </h1>
              <div className="my-5 mb-10">
                <p className="text-xl text-[#000000]">
                  Welcome to the Future Learning Platform 
                </p>
              </div>
         <div className="hidden sm:block">
      <a
        href="/form"
        className="group relative inline-flex items-center justify-center gap-2 bg-[#3feb53] text-gray-900 font-bold uppercase tracking-wide px-7 py-3.5 rounded-lg border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200 overflow-hidden"
      >
        <span className="absolute right-full top-0 h-full w-12 -translate-x-2 bg-white/20 blur-sm group-hover:animate-shine" />
        <span className="flex items-center gap-2">
          <Calendar size={18} className="inline-block" />
          <span>Book a Demo</span>
          <ArrowRight size={18} className="inline-block transition-transform group-hover:translate-x-1" />
        </span>
      </a>
    </div>

           
            </div>

            <div className="ml-32  w-[90%] pt-[52%] absolute top-auto right-auto bottom-[-250px] left-[18%] overflow-hidden">
              <div className="w-full h-full absolute inset-0">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curved base with center play button */}
      <div className="relative bg-white">
        <div className="h-[50px] bg-[#ffffff]"></div>

        <div className="mb-9 absolute inset-x-0 -bottom-[60px] flex items-center justify-center">
          {/* Left decorative line */}
          <div className="flex-1 relative">
            <div className="h-[2px] bg-gradient-to-r from-transparent via-[#007C91] to-[#007C91] mx-4"></div>
            <div className="absolute -top-[4px] left-0 w-2 h-2 rounded-full bg-[#007C91]"></div>
          </div>
          
          {/* Circle */}
          <div className="w-[150px] h-[150px] bg-[#014825] rounded-full flex items-center justify-center shadow-lg z-20 ring-4 ring-white/20">
            <img 
              src={logocircle} 
              alt="Logo" 
              className="w-[80px] h-[80px] object-contain" 
            />
          </div>
          
          {/* Right decorative line */}
          <div className="flex-1 relative">
            <div className="h-[2px] bg-gradient-to-l from-transparent via-[#007C91] to-[#007C91] mx-4"></div>
            <div className="absolute -top-[4px] right-0 w-2 h-2 rounded-full bg-[#007C91]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
