import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../Context/LanguageContext';

const useCases = [
  {
    id: 1,
    title: {
      en: "A Complete LMS",
      sv: "En komplett lärplattform"
    },
    description: {
      en: "Everything You Need to Teach and Learn Digitally - Course setup, assignment handling, grading, and feedback – a modern LMS built for every level of education.",
      sv: "Allt du behöver för att undervisa och lära digitalt - Planera kurser, hantera uppgifter, betygsätt och återkoppla – en smidig, modern LMS som passar alla utbildningsnivåer."
    },
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    colorClass: "from-emerald-400 to-emerald-600",
    bgClass: "bg-emerald-50",
    iconBgClass: "bg-emerald-100",
    borderColorClass: "border-emerald-300",
    iconType: "Learning"
  },
  {
    id: 2,
    title: {
      en: "Communication & Collaboration",
      sv: "Kommunikation & samarbete"
    },
    description: {
      en: "Seamlessly Integrated with Microsoft 365 - Messaging, notifications, group discussions, and deep integration with Teams, Outlook, and Calendar for effortless connection.",
      sv: "Integrerat med Microsoft 365 - Chatt, notiser, gruppdiskussioner och integration med Teams, Outlook och Kalender – allt för att förenkla kontakt mellan elever och lärare."
    },
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    colorClass: "from-blue-500 to-blue-700",
    bgClass: "bg-blue-50",
    iconBgClass: "bg-blue-100",
    borderColorClass: "border-blue-300",
    iconType: "Microsoft"
  },
  {
    id: 3,
    title: {
      en: "Real-Time Learning Insights",
      sv: "Full insyn i lärresan"
    },
    description: {
      en: "Full Visibility Across the Journey - Track student progress, performance, and support needs with real-time insights and clear dashboards.",
      sv: "Uppföljning i realtid - Följ studenternas framsteg, analysera resultat, och identifiera behov av stöd – med tydlig översikt och smarta insikter."
    },
    image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    colorClass: "from-purple-500 to-purple-700",
    bgClass: "bg-purple-50",
    iconBgClass: "bg-purple-100",
    borderColorClass: "border-purple-300",
    iconType: "Learning"
  },
  {
    id: 4,
    title: {
      en: "Accurate Internship Matching",
      sv: "Träffsäker praktikmatchning"
    },
    description: {
      en: "Smart, Verified, and Location-Aware - Automatically match students to internships based on their program, interests, and location – with only verified employers.",
      sv: "Smart, verifierad och geografiskt anpassad - Matcha rätt student med rätt praktikplats automatiskt – baserat på utbildning, intresse och plats, med endast verifierade arbetsgivare."
    },
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    colorClass: "from-orange-500 to-orange-700",
    bgClass: "bg-orange-50",
    iconBgClass: "bg-orange-100",
    borderColorClass: "border-orange-300",
    iconType: "Internship"
  },
  {
    id: 5,
    title: {
      en: "Internship Workflow on Autopilot",
      sv: "Praktikflöde på autopilot"
    },
    description: {
      en: "From Application to Review - Automate the entire internship lifecycle with digital flows, live status tracking, supervisor feedback, and follow-ups.",
      sv: "Från ansökan till uppföljning - Automatisera hela praktikprocessen med digitala flöden, statusuppdateringar, handledarutvärdering och rapportering."
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    colorClass: "from-amber-500 to-amber-700",
    bgClass: "bg-amber-50",
    iconBgClass: "bg-amber-100",
    borderColorClass: "border-amber-300",
    iconType: "Internship"
  },
  {
    id: 6,
    title: {
      en: "Career Support & Job Placement",
      sv: "Jobbförberedelse & karriärstöd"
    },
    description: {
      en: "From Internship to Employment - CV builders, career coaching, job listings, and employment tracking – helping students transition from internships to real jobs.",
      sv: "Från första praktik till första jobb - CV-verktyg, coachning, jobbannonser och spårning av jobbutveckling – allt för att hjälpa studenten vidare från LIA till anställning."
    },
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    colorClass: "from-indigo-500 to-indigo-700",
    bgClass: "bg-indigo-50",
    iconBgClass: "bg-indigo-100",
    borderColorClass: "border-indigo-300",
    iconType: "Job"
  }
];

// SVG Icons for each card
const CardIcons = {
  Learning: () => (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4.5L2 9.5L12 14.5L22 9.5L12 4.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 12V17.5L12 21L5 17.5V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 14V9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Internship: () => (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 15V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Job: () => (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Microsoft: () => (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4H11V11H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 4H20V11H13V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 13H11V20H4V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 13H20V20H13V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

const UseCases = () => {
  const [activeCard, setActiveCard] = useState(null);
  const { language } = useLanguage();
  const [visibleCards, setVisibleCards] = useState(6);
  
  // Make cards appear with staggered animation
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards(useCases.length);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="px-4 py-24 sm:px-8 lg:px-16 xl:px-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Enhanced animated background with more subtle elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-emerald-100/10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-amber-100/10 blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-blue-100/10 blur-3xl animate-pulse" style={{animationDelay: '0.7s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/30 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-amber-400/30 rounded-full animate-ping" style={{animationDuration: '5s', animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-blue-400/30 rounded-full animate-ping" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-ping" style={{animationDuration: '4.2s', animationDelay: '1.2s'}}></div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto relative">
        {/* Improved section header with animated underline */}
        <div className="text-center pb-16 sm:pb-20 lg:pb-24 relative">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 inline-block relative">
            <span className="text-gray-900">
              {language === 'en' ? 'Key Features' : 'Nyckelfunktioner'}
            </span>
            <div className="absolute -bottom-3 left-0 h-1.5 w-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full animate-expand"></div>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'From classroom to career – we digitize, simplify, and enhance the entire process.' 
              : 'Från klassrum till karriär – vi digitaliserar, förenklar och förbättrar hela processen.'}
          </p>
        </div>

        {/* Modern staggered card layout with improved spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {useCases.map((useCase, index) => (
            <div 
              key={useCase.id}
              className={`relative group transition-all duration-500 ease-out transform hover:-translate-y-2 opacity-0 animate-fadeIn`}
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              onMouseEnter={() => setActiveCard(useCase.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Enhanced glow effect */}
              <div 
                className={`absolute -inset-0.5 bg-gradient-to-r ${useCase.colorClass} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:blur-md ${activeCard === useCase.id ? 'animate-pulse' : ''}`} 
              />
              
              {/* Card with improved layout */}
              <div className="relative bg-white rounded-2xl overflow-hidden h-full border border-gray-100 shadow-lg group-hover:shadow-2xl transition-all duration-500 z-10">
                {/* Image at the top with consistent height */}
                <div className={`relative h-64 overflow-hidden`}>
                  {/* Image with overlay */}
                  <div className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-700 ease-out">
                    <img 
                      src={useCase.image}
                      alt={`Illustration for ${useCase.title[language]}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  </div>
                  
                  
                  {/* Title overlaid on image */}
                  <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                    <h3 className="text-2xl font-bold leading-snug text-white drop-shadow-md">
                      {useCase.title[language]}
                    </h3>
                  </div>
                </div>
                
                {/* Content section with improved padding */}
                <div className="p-8 lg:p-10 flex flex-col justify-between">
                  {/* Icon with improved styling */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${useCase.iconBgClass} transition-all duration-500 shadow-md group-hover:shadow-lg`}>
                      <div className={`text-gray-800 transition-transform duration-500 group-hover:scale-110`}>
                        {CardIcons[useCase.iconType]()}
                      </div>
                    </div>
                    
                    {/* Floating animated tags */}
                    <div className={`px-4 py-2 rounded-full ${useCase.bgClass} text-sm font-medium bg-opacity-80 flex items-center space-x-1 transition-transform duration-300 group-hover:scale-105`}>
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${useCase.colorClass}`}></span>
                      <span className="text-gray-800">{useCase.iconType}</span>
                    </div>
                  </div>
                  
                  {/* Description with more breathing room */}
                  <p className="text-base lg:text-lg text-gray-600 mb-8 leading-relaxed">
                    {useCase.description[language]}
                  </p>
                  
                  {/* Demo button with improved interaction */}
                  <div className="mt-auto">
                    <Link to="/form" className="block w-full">
                      <div className={`relative group overflow-hidden rounded-lg ${useCase.bgClass} border ${useCase.borderColorClass} transition-all duration-300`}>
                        <div className={`absolute inset-0 bg-gradient-to-r ${useCase.colorClass} transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500`}></div>
                        <div className="px-6 py-4 flex items-center justify-between relative z-10 group-hover:text-red-600 transition-colors duration-300">
                          <span className="font-medium text-black">
                            {language === 'en' ? 'View Demo' : 'Visa demo'}
                          </span>
                          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Add custom keyframe animations in style tag */}
      <style jsx="true">{`
        @keyframes expand {
          0% { width: 0; }
          100% { width: 70%; }
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-expand {
          animation: expand 1.5s forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default UseCases;