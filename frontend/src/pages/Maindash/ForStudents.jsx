import React, { useState, useEffect } from 'react';
import { BookOpen, Calendar, MessageSquare, BarChart2, User, Briefcase } from 'lucide-react';
import { useLanguage } from '../../Context/LanguageContext';
import { useTheme } from '../../Context/ThemeContext';

const ForStudents = () => {
  const { language } = useLanguage();
  const { darkMode } = useTheme();
  const [activeFeature, setActiveFeature] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % translations[language].features.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isInView, language]);

  useEffect(() => {
    const timer = setTimeout(() => setIsInView(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const translations = {
    en: {
      title: "For Students",
      heading: "More than a platform – your digital space for future learning",
      subtitle: "Everything you need to learn, grow, and take the next step in your career.",
      features: [
        {
          icon: <BookOpen />,
          title: "Smart Learning Tools",
          description: "Access all your courses, assignments, and learning progress in one unified platform."
        },
        {
          icon: <Calendar />,
          title: "Calendar & Schedule",
          description: "Never miss important deadlines with personalized calendar and notifications."
        },
        {
          icon: <MessageSquare />,
          title: "Communication Hub",
          description: "Connect with teachers and mentors through instant messaging and feedback."
        },
        {
          icon: <BarChart2 />,
          title: "Progress Tracking",
          description: "Monitor your performance and growth with real-time analytics and insights."
        },
        {
          icon: <User />,
          title: "Smart Profile",
          description: "Showcase your skills and get matched with perfect opportunities automatically."
        },
        {
          icon: <Briefcase />,
          title: "Career Launch",
          description: "Build your professional portfolio and connect with employers seeking fresh talent."
        }
      ]
    },
    sv: {
      title: "För Studenter",
      heading: "Mer än en plattform – din digitala miljö för framtida lärande",
      subtitle: "Allt du behöver för att lära, växa och ta nästa steg i din karriär.",
      features: [
        {
          icon: <BookOpen />,
          title: "Smarta Lärandeverktyg",
          description: "Få tillgång till alla dina kurser, uppgifter och lärandeframsteg på en enhetlig plattform."
        },
        {
          icon: <Calendar />,
          title: "Kalender & Schema",
          description: "Missa aldrig viktiga deadlines med personlig kalender och notifikationer."
        },
        {
          icon: <MessageSquare />,
          title: "Kommunikationscenter",
          description: "Anslut till lärare och mentorer genom direktmeddelanden och feedback."
        },
        {
          icon: <BarChart2 />,
          title: "Framstegsuppföljning",
          description: "Övervaka din prestation och utveckling med realtidsanalys och insikter."
        },
        {
          icon: <User />,
          title: "Smart Profil",
          description: "Visa upp dina färdigheter och matchas automatiskt med perfekta möjligheter."
        },
        {
          icon: <Briefcase />,
          title: "Karriärstart",
          description: "Bygg din professionella portfölj och knyt kontakter med arbetsgivare som söker nya talanger."
        }
      ]
    }
  };

  const currentContent = translations[language];
  
  const progressPercentage = ((activeFeature + 1) / currentContent.features.length) * 100;

  return (
    <section className={`relative px-6 py-20 md:py-32 overflow-hidden ${
      darkMode 
        ? 'bg-gradient-to-b from-gray-900 to-gray-800' 
        : 'bg-gradient-to-b from-gray-50 to-emerald-50'
    }`}>
      {/* Blob animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-20 -right-20 w-96 h-96 rounded-full ${
          darkMode ? 'bg-emerald-900/30' : 'bg-emerald-100/30'
        } blur-3xl transition-all duration-1000 ${isInView ? 'opacity-70' : 'opacity-0'}`} />
        <div className={`absolute top-1/3 -left-32 w-64 h-64 rounded-full ${
          darkMode ? 'bg-blue-900/20' : 'bg-blue-200/20'
        } blur-3xl transition-all duration-1000 delay-300 ${isInView ? 'opacity-60' : 'opacity-0'}`} />
        <div className={`absolute bottom-20 right-1/4 w-80 h-80 rounded-full ${
          darkMode ? 'bg-amber-900/20' : 'bg-amber-100/20'
        } blur-3xl transition-all duration-1000 delay-500 ${isInView ? 'opacity-50' : 'opacity-0'}`} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`flex flex-col items-center text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-4">
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
              darkMode ? 'bg-emerald-900/50 text-emerald-300' : 'bg-emerald-100 text-emerald-700'
            }`}>
              {currentContent.title}
            </span>
          </div>

          <h2 className={`text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl ${
            darkMode ? 'text-emerald-400' : 'text-emerald-600'
          }`}>
            {currentContent.heading}
          </h2>

          <p className={`text-xl md:text-2xl mb-12 max-w-3xl ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {currentContent.subtitle}
          </p>
        </div>
        
        {/* Main interactive feature showcase */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left side: Feature navigation */}
          <div className={`relative transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <div className={`rounded-3xl p-8 shadow-xl border ${
              darkMode 
                ? 'bg-gray-800/80 backdrop-blur-sm border-gray-700' 
                : 'bg-white/80 backdrop-blur-sm border-emerald-100'
            }`}>
              <ul className="space-y-3">
                {currentContent.features.map((feature, index) => (
                  <li 
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeFeature === index 
                        ? darkMode 
                          ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/30' 
                          : 'bg-emerald-500 text-white shadow-lg shadow-emerald-200'
                        : darkMode 
                          ? 'hover:bg-gray-700' 
                          : 'hover:bg-emerald-50'
                    }`}
                  >
                    <div className={`p-3 rounded-xl ${
                      activeFeature === index 
                        ? darkMode ? 'bg-emerald-500' : 'bg-emerald-400'
                        : darkMode ? 'bg-emerald-900/50' : 'bg-emerald-100'
                    }`}>
                      {React.cloneElement(feature.icon, { 
                        size: 24, 
                        className: activeFeature === index ? 'text-white' : darkMode ? 'text-emerald-400' : 'text-emerald-600'
                      })}
                    </div>
                    <div className="ml-4">
                      <h3 className={`font-bold text-lg ${
                        activeFeature === index 
                          ? 'text-white' 
                          : darkMode ? 'text-white' : 'text-gray-800'
                      }`}>
                        {feature.title}
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right side: Feature display */}
          <div className={`relative transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            {/* Circular progress indicator */}
            <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-12 h-12">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle 
                  cx="50" cy="50" r="45" 
                  fill="none" 
                  stroke={darkMode ? '#374151' : '#e2e8f0'} 
                  strokeWidth="8"
                />
                <circle 
                  cx="50" cy="50" r="45" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="282.7"
                  strokeDashoffset={282.7 - (282.7 * progressPercentage / 100)}
                  transform="rotate(-90 50 50)"
                  className="transition-all duration-700 ease-out"
                />
              </svg>
              <div className={`absolute inset-0 flex items-center justify-center text-xs font-bold ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {activeFeature + 1}/{currentContent.features.length}
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl p-1 shadow-xl">
              <div className={`rounded-2xl p-8 md:p-10 h-full flex flex-col ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className={`p-5 mb-6 inline-flex rounded-2xl border ${
                  darkMode ? 'bg-emerald-900/30 border-emerald-800' : 'bg-emerald-50 border-emerald-100'
                }`}>
                  {React.cloneElement(currentContent.features[activeFeature].icon, { 
                    size: 48, 
                    className: darkMode ? 'text-emerald-400' : 'text-emerald-600'
                  })}
                </div>
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {currentContent.features[activeFeature].title}
                </h3>
                <p className={`text-lg mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {currentContent.features[activeFeature].description}
                </p>
                
                {/* Feature-specific visual */}
                <div className={`mt-auto relative h-40 md:h-52 rounded-xl overflow-hidden ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-50'
                }`}>
                  <div className={`absolute inset-0 opacity-80 bg-gradient-to-r transition-opacity duration-500 ${
                    ['from-emerald-900/30', 'from-blue-900/30', 'from-purple-900/30', 'from-amber-900/30', 'from-teal-900/30', 'from-green-900/30'][activeFeature % 6]
                  } ${
                    ['to-emerald-800/20', 'to-blue-800/20', 'to-purple-800/20', 'to-amber-800/20', 'to-teal-800/20', 'to-green-800/20'][activeFeature % 6]
                  }`} />
                  
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    {/* Different illustration for each feature */}
                    {activeFeature === 0 && (
                      <div className="grid grid-cols-3 gap-2 w-full h-full p-2">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className={`rounded-lg ${
                            darkMode ? 'bg-gray-600/80' : 'bg-white/80'
                          } shadow-sm flex items-center justify-center ${i < 3 ? 'animate-pulse' : ''}`}>
                            {i === 1 && <BookOpen size={20} className={darkMode ? 'text-emerald-300' : 'text-emerald-500'} />}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {activeFeature === 1 && (
                      <div className="grid grid-cols-7 grid-rows-4 gap-1 w-full h-full p-2">
                        {[...Array(28)].map((_, i) => (
                          <div key={i} className={`rounded-sm ${
                            i === 15 
                              ? darkMode ? 'bg-emerald-600 animate-pulse' : 'bg-emerald-200 animate-pulse'
                              : darkMode ? 'bg-gray-600/60' : 'bg-white/60'
                          } flex items-center justify-center text-xs`}>
                            {i === 15 && <span className={darkMode ? 'text-emerald-100 font-bold' : 'text-emerald-800 font-bold'}>15</span>}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {activeFeature === 2 && (
                      <div className="flex flex-col w-full h-full p-2">
                        <div className="flex items-center mb-2">
                          <div className={`w-8 h-8 rounded-full ${
                            darkMode ? 'bg-emerald-600' : 'bg-emerald-200'
                          } mr-2`}></div>
                          <div className={`flex-1 h-6 ${
                            darkMode ? 'bg-gray-600/70' : 'bg-white/70'
                          } rounded-full`}></div>
                        </div>
                        <div className="flex items-start mb-2">
                          <div className={`w-8 h-8 rounded-full ${
                            darkMode ? 'bg-gray-600' : 'bg-gray-200'
                          } mr-2`}></div>
                          <div className="flex-1">
                            <div className={`h-16 ${
                              darkMode ? 'bg-gray-600/70' : 'bg-white/70'
                            } rounded-lg mb-1`}></div>
                          </div>
                        </div>
                        <div className="flex items-center mt-auto">
                          <div className={`flex-1 h-8 ${
                            darkMode ? 'bg-gray-600/70' : 'bg-white/70'
                          } rounded-full`}></div>
                          <div className={`w-8 h-8 rounded-full ${
                            darkMode ? 'bg-emerald-500' : 'bg-emerald-500'
                          } ml-2 flex items-center justify-center`}>
                            <MessageSquare size={16} className="text-white" />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeFeature === 3 && (
                      <div className="w-full h-full p-2 flex items-end">
                        <div className="w-full h-3/4 flex items-end space-x-3">
                          {[40, 65, 35, 80, 50, 70].map((height, i) => (
                            <div 
                              key={i} 
                              style={{height: `${height}%`}}
                              className={`flex-1 rounded-t-lg ${
                                i === 3 
                                  ? darkMode ? 'bg-emerald-500' : 'bg-emerald-500'
                                  : darkMode ? 'bg-emerald-700/80' : 'bg-emerald-200/80'
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {activeFeature === 4 && (
                      <div className="w-full h-full p-2 flex items-center justify-center">
                        <div className={`w-24 h-24 rounded-full ${
                          darkMode ? 'bg-gray-600/80' : 'bg-white/80'
                        } flex items-center justify-center relative`}>
                          <User size={36} className={darkMode ? 'text-emerald-400' : 'text-emerald-500'} />
                          <div className={`absolute w-full h-full animate-ping-slow opacity-40 rounded-full border-4 ${
                            darkMode ? 'border-emerald-500' : 'border-emerald-300'
                          }`}></div>
                          <div className={`absolute w-32 h-32 border-2 border-dashed rounded-full ${
                            darkMode ? 'border-emerald-700' : 'border-emerald-200'
                          } animate-spin-slow`}></div>
                        </div>
                      </div>
                    )}
                    
                    {activeFeature === 5 && (
                      <div className="w-full h-full p-2 flex flex-col">
                        <div className={`h-12 ${
                          darkMode ? 'bg-gray-600/70' : 'bg-white/70'
                        } rounded-lg mb-3 flex items-center px-3`}>
                          <div className={`w-6 h-6 rounded-full ${
                            darkMode ? 'bg-emerald-600' : 'bg-emerald-200'
                          } mr-2`}></div>
                          <div className={`flex-1 h-4 ${
                            darkMode ? 'bg-gray-500' : 'bg-gray-100'
                          } rounded-full`}></div>
                        </div>
                        <div className={`flex-1 ${
                          darkMode ? 'bg-gray-600/70' : 'bg-white/70'
                        } rounded-lg p-3`}>
                          <div className="flex mb-2">
                            <div className={`w-16 h-4 ${
                              darkMode ? 'bg-emerald-800' : 'bg-emerald-100'
                            } rounded-full mr-2`}></div>
                            <div className={`w-24 h-4 ${
                              darkMode ? 'bg-emerald-800' : 'bg-emerald-100'
                            } rounded-full`}></div>
                          </div>
                          <div className={`h-3 ${
                            darkMode ? 'bg-gray-500' : 'bg-gray-100'
                          } rounded-full mb-1`}></div>
                          <div className={`h-3 ${
                            darkMode ? 'bg-gray-500' : 'bg-gray-100'
                          } rounded-full mb-1`}></div>
                          <div className={`h-3 ${
                            darkMode ? 'bg-gray-500' : 'bg-gray-100'
                          } rounded-full w-3/4`}></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForStudents;