// src/components/Hero.jsx
import React from 'react';
import video from '../../assets/video.mp4';
import logocircle from '../../assets/circlelogo.png';

const Hero = () => {
  return (
    <>
      <section className="bg-[#d5f3f9] pt-[100px] pb-[200px] px-10 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative">
            <div className="max-w-[580px] ml-[4%] z-10 relative">
              <h1 className="text-[#0b7077] text-[3.5rem] md:text-[4.2rem] font-bold leading-[1.2] tracking-[-0.02em] mb-8">
                Empowering Education. Enabling Careers.
              </h1>
              <div className="my-5 mb-10">
                <p className="text-xl text-gray-800">
                  Welcome to the Future Learning Platform for Schools & Universities </p>
              </div>
              <div className="hidden sm:block">
                <a href="/form" className="bg-white text-black font-bold uppercase border-2 border-black px-6 py-3 hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-button-hover transition-all shadow-button inline-block">
                  Book a Demo
                </a>
              </div>
              <div className="sm:hidden">
                <a href="#get-started" className="bg-white text-black font-bold uppercase border-2 border-black px-6 py-3 hover:translate-x-[-2px] hover:translate-y-[2px] hover:shadow-button-hover transition-all shadow-button inline-block">
                  Join Now
                </a>
              </div>
            </div>

            <div className="w-[90%] pt-[52%] absolute top-auto right-auto bottom-[-250px] left-[18%] overflow-hidden">
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
        <div className="h-[50px] bg-[#d5f3f9] "></div>

        <div className="absolute inset-x-0 -bottom-[60px] flex justify-center">
          <div className="w-[150px] h-[150px] bg-[#0b7077] rounded-full flex items-center justify-center shadow-lg z-20">
            <img 
              src={logocircle} 
              alt="Logo" 
              className="w-[80px] h-[80px] object-contain" 
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
