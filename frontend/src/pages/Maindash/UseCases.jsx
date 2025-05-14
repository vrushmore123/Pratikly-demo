import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../Context/LanguageContext';

// Font imports
const FontImports = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
    
    body {
      font-family: 'Poppins', sans-serif;
    }
    .playfair {
      font-family: 'Playfair Display', serif;
    }
  `}</style>
);

const UseCases = () => {
  const { language } = useLanguage();
  const [activeCard, setActiveCard] = useState(null);

  // Translations
  const translations = {
    en: {
      title1: "One Platform.",
      title2: "Multiple Solutions.",
      subtitle: "Empower your institution with powerful tools for learning, internships, and job success.",
      useCases: [
        {
          title: "Streamlined Learning Management",
          titleHighlight: "Learning",
          description: "Manage courses, track assignments, grade submissions, and communicate seamlessly between students and teachers.",
          features: ["Cloud-based solution", "24/7 customer support", "Real-time analytics"],
          viewDemo: "View Demo"
        },
        {
          title: "Internship Placement System",
          titleHighlight: "Internship",
          description: "Automated workflows that connect students to verified companies with follow-ups and evaluations.",
          features: ["500+ partner companies", "Automated matching", "Progress tracking"],
          viewDemo: "View Demo"
        },
        {
          title: "Job Preparation & Placement",
          titleHighlight: "Job",
          description: "In-built job board, CV support, and tracking of student employment with integration into market platforms.",
          features: ["92% placement rate", "Career coaching", "Interview preparation"],
          viewDemo: "View Demo"
        },
        {
          title: "Microsoft 365 Integration",
          titleHighlight: "Microsoft",
          description: "Connect Teams, Outlook, SharePoint to streamline online learning, planning, and collaboration.",
          features: ["Single sign-on", "Document sharing", "Calendar sync"],
          viewDemo: "View Demo"
        }
      ]
    },
    sv: {
      title1: "En plattform.",
      title2: "Flera lösningar.",
      subtitle: "Stärk din institution med kraftfulla verktyg för lärande, praktik och karriärframgång.",
      useCases: [
        {
          title: "Effektiviserad lärplattform",
          titleHighlight: "lärplattform",
          description: "Hantera kurser, spåra uppgifter, betygsätt inlämningar och kommunicera sömlöst mellan lärare och studenter.",
          features: ["Molnbaserad lösning", "Dygnet runt kundsupport", "Realtidsanalys"],
          viewDemo: "Visa demo"
        },
        {
          title: "System för praktikplacering",
          titleHighlight: "praktik",
          description: "Automatiserade flöden som kopplar samman studenter med verifierade företag med uppföljning och utvärdering.",
          features: ["500+ partnerföretag", "Automatisk matchning", "Uppföljning av framsteg"],
          viewDemo: "Visa demo"
        },
        {
          title: "Jobbförberedelse & placering",
          titleHighlight: "Jobb",
          description: "Inbyggd jobbtavla, CV-stöd och spårning av studenters anställning med integration mot arbetsmarknadsplattformar.",
          features: ["92% placeringstakt", "Karriärcoaching", "Förberedelse för intervjuer"],
          viewDemo: "Visa demo"
        },
        {
          title: "Microsoft 365-integrering",
          titleHighlight: "Microsoft",
          description: "Anslut Teams, Outlook, SharePoint för att effektivisera onlineinlärning, planering och samarbete.",
          features: ["Enkel inloggning", "Dokumentdelning", "Kalendersynkronisering"],
          viewDemo: "Visa demo"
        }
      ]
    }
  };

  const currentLang = translations[language];

  const useCases = [
    {
      id: 1,
      ...currentLang.useCases[0],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      colorClass: "from-emerald-400 to-emerald-600",
      bgClass: "bg-emerald-50",
      iconBgClass: "bg-emerald-100",
      borderColorClass: "border-emerald-300",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      ...currentLang.useCases[1],
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      colorClass: "from-blue-500 to-blue-700",
      bgClass: "bg-blue-50",
      iconBgClass: "bg-blue-100",
      borderColorClass: "border-blue-300",
      icon: (
        <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 3,
      ...currentLang.useCases[2],
      image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      colorClass: "from-purple-500 to-purple-700",
      bgClass: "bg-purple-50",
      iconBgClass: "bg-purple-100",
      borderColorClass: "border-purple-300",
      icon: (
        <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M21 13.255A23.931 23.931 0 0 1 12 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2m4 6h.01M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 4,
      ...currentLang.useCases[3],
      image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      colorClass: "from-orange-500 to-orange-700",
      bgClass: "bg-orange-50",
      iconBgClass: "bg-orange-100",
      borderColorClass: "border-orange-300",
      icon: (
        <svg className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2zM9 9h6v6H9V9z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="px-4 py-16 sm:px-8 lg:px-16 xl:px-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      <FontImports />
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-emerald-100/20 blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-amber-100/20 blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-emerald-400/60 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-amber-400/60 rounded-full animate-ping" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-400/60 rounded-full animate-ping" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col">
          {/* Section Header */}
          <div className="text-center pb-12 sm:pb-16 lg:pb-20 relative">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 playfair">
              <span className="text-gray-900">{currentLang.title1} </span>
              <span className="text-emerald-600 relative">
                {currentLang.title2}
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-300 to-emerald-500 transform origin-left animate-pulse"></span>
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {currentLang.subtitle}
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {useCases.map((useCase) => (
              <div 
                key={useCase.id}
                className="relative group transition-all duration-500 ease-out transform hover:-translate-y-2"
                onMouseEnter={() => setActiveCard(useCase.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Card Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${useCase.colorClass} rounded-2xl opacity-0 group-hover:opacity-70 blur transition-all duration-500 group-hover:blur-md ${activeCard === useCase.id ? 'animate-pulse' : ''}`} />
                
                {/* Main Card */}
                <div className="relative bg-white rounded-2xl overflow-hidden h-full border border-gray-100 shadow-lg group-hover:shadow-2xl transition-all duration-500 z-10">
                  <div className="flex flex-col h-full">
                    {/* Content side */}
                    <div className="p-8 lg:p-10 flex flex-col justify-between relative">
                      {/* Top section with icon and number */}
                      <div>
                        <div className="flex items-center gap-6 mb-6">
                          {/* Icon Container */}
                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${useCase.iconBgClass} transition-all duration-500 group-hover:shadow-lg relative overflow-hidden`}>
                            <div className={`absolute inset-0 bg-gradient-to-br ${useCase.colorClass} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                            <div className="text-gray-800 transition-transform duration-500 group-hover:scale-110">
                              {useCase.icon}
                            </div>
                          </div>
                          
                          {/* Number indicator */}
                          <div className={`relative rounded-full w-12 h-12 flex justify-center items-center text-xl font-bold ${useCase.bgClass} text-gray-800`}>
                            <div className={`absolute inset-0 rounded-full border-2 ${useCase.borderColorClass} opacity-70 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            <span>{useCase.id}</span>
                          </div>
                        </div>
                        
                        {/* Title with highlight */}
                        <h3 className="text-2xl lg:text-3xl font-bold leading-snug mb-4 text-gray-900">
                          {useCase.title.split(useCase.titleHighlight)[0]}
                          <span className={`relative text-transparent bg-clip-text bg-gradient-to-r ${useCase.colorClass}`}>
                            {useCase.titleHighlight}
                            <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r ${useCase.colorClass} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out`}></span>
                          </span>
                          {useCase.title.split(useCase.titleHighlight)[1]}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-base lg:text-lg text-gray-600 mb-6">
                          {useCase.description}
                        </p>
                        
                        {/* Feature list */}
                        <ul className="space-y-3">
                          {useCase.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                              <span className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${useCase.bgClass}`}>
                                <svg className={`w-3 h-3 text-${useCase.colorClass.split('-')[1]}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                </svg>
                              </span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Image side */}
                    <div className={`relative min-h-[240px] ${useCase.bgClass} overflow-hidden`}>
                      {/* Image with overlay */}
                      <div className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-700 ease-out">
                        <img 
                          src={useCase.image}
                          alt={`Illustration for ${useCase.title}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Demo button */}
                      <div className="absolute bottom-6 right-6 z-20">
                        <Link to="/form">
                          <div className="relative overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-r ${useCase.colorClass} transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500`}></div>
                            <div className="px-5 py-3 bg-gradient-to-r from-indigo-600 to-green-900 rounded-lg shadow-lg flex items-center space-x-2 relative z-10 group-hover:text-white transition-colors duration-500">
                              <span className="font-medium">{useCase.viewDemo}</span>
                              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

  
    </section>
  );
};

export default UseCases;