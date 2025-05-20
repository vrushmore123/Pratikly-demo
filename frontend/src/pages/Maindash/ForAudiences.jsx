import React, { useState, useEffect } from 'react';
import { Book, MessageCircle, Users, Clock, Settings, Shield, Search, FileText } from 'lucide-react';
import { useLanguage } from '../../Context/LanguageContext';
import { useTheme } from '../../Context/ThemeContext';

const ForAudiences = () => {
  const { language } = useLanguage();
  const { darkMode } = useTheme();
  const [activeAudience, setActiveAudience] = useState(0);
  const [activeFeaturesMap, setActiveFeaturesMap] = useState({0: 0, 1: 0, 2: 0});
  const [isHovering, setIsHovering] = useState(false);

  const translations = {
    en: {
      heading: "Solutions for",
      headingHighlight: "Every Role",
      audiences: [
        {
          title: "For Teachers",
          description: "More time for what truly matters – your teaching.",
          features: [
            {
              icon: <Book />,
              title: "Course Management",
              description: "Easily create and manage courses with our intuitive interface. Organize content, track assignments, and create engaging learning experiences."
            },
            {
              icon: <MessageCircle />,
              title: "Centralized Communication",
              description: "Keep all feedback, tasks, and messages in one place. Build meaningful connections with students through seamless communication channels."
            },
            {
              icon: <Users />,
              title: "Student Tracking",
              description: "Monitor each student's journey with comprehensive analytics. Identify strengths, address weaknesses, and provide personalized guidance."
            }
          ]
        },
        {
          title: "For Education Managers",
          description: "Total control over learning, internships, and placements.",
          features: [
            {
              icon: <Clock />,
              title: "Automated Workflows",
              description: "Streamline administrative processes through intelligent automation. Save hours on repetitive tasks and focus on strategic initiatives."
            },
            {
              icon: <Settings />,
              title: "Real-time Insights",
              description: "Access comprehensive reporting and analytics dashboards. Make data-driven decisions with visualized performance metrics across programs."
            },
            {
              icon: <Shield />,
              title: "GDPR-compliant",
              description: "Rest easy with our secure, future-ready platform. All data handling adheres to the highest privacy and security standards in the industry."
            }
          ]
        },
        {
          title: "For Employers",
          description: "Meet your next generation – sooner, smarter, faster.",
          features: [
            {
              icon: <Search />,
              title: "Talent Matching",
              description: "Find perfect-fit candidates through our AI-powered matching algorithm. Connect with students whose skills and aspirations align with your needs."
            },
            {
              icon: <FileText />,
              title: "Internship Tracking",
              description: "Efficiently monitor placements and provide structured feedback. Create meaningful development paths for interns through guided experiences."
            },
            {
              icon: <Users />,
              title: "Early Recruitment",
              description: "Build your talent pipeline before graduation season. Identify promising candidates early and nurture relationships throughout their education."
            }
          ]
        }
      ]
    },
    sv: {
      heading: "Lösningar för",
      headingHighlight: "alla roller",
      audiences: [
        {
          title: "För Lärare",
          description: "Mer tid för det som verkligen räknas – din undervisning.",
          features: [
            {
              icon: <Book />,
              title: "Kurshantering",
              description: "Skapa och hantera kurser enkelt med vårt intuitiva gränssnitt. Organisera innehåll, följ upp uppgifter och skapa engagerande lärupplevelser."
            },
            {
              icon: <MessageCircle />,
              title: "Centraliserad kommunikation",
              description: "Ha all feedback, uppgifter och meddelanden på ett ställe. Bygg meningsfulla kopplingar med elever genom sömlösa kommunikationskanaler."
            },
            {
              icon: <Users />,
              title: "Elevuppföljning",
              description: "Följ varje elevs resa med omfattande analys. Identifiera styrkor, adressera svagheter och ge personlig vägledning."
            }
          ]
        },
        {
          title: "För Skolledare",
          description: "Full kontroll över lärande, praktik och jobbplaceringar.",
          features: [
            {
              icon: <Clock />,
              title: "Automatiserade arbetsflöden",
              description: "Effektivisera administrativa processer genom intelligent automatisering. Spara timmar på repetitiva uppgifter och fokusera på strategiska initiativ."
            },
            {
              icon: <Settings />,
              title: "Realtidsinsikter",
              description: "Få tillgång till omfattande rapporterings- och analysdashboards. Ta datadrivna beslut med visualiserade prestationsmått över alla program."
            },
            {
              icon: <Shield />,
              title: "GDPR-uppfyllande",
              description: "Känn dig trygg med vår säkra, framtidssäkra plattform. All datahantering följer de högsta integritets- och säkerhetsstandarderna i branschen."
            }
          ]
        },
        {
          title: "För Arbetsgivare",
          description: "Möt nästa generation – tidigare, smartare, snabbare.",
          features: [
            {
              icon: <Search />,
              title: "Talangmatchning",
              description: "Hitta perfekta kandidater genom vår AI-drivna matchningsalgoritm. Koppla samman med studenter vars färdigheter och ambitioner passar dina behov."
            },
            {
              icon: <FileText />,
              title: "Praktikuppföljning",
              description: "Följ effektivt praktikplatser och ge strukturerad återkoppling. Skapa meningsfulla utvecklingsvägar för praktikanter genom guidade upplevelser."
            },
            {
              icon: <Users />,
              title: "Tidig rekrytering",
              description: "Bygg din talangpipeline före examenssäsongen. Identifiera lovande kandidater tidigt och vårda relationer genom hela deras utbildning."
            }
          ]
        }
      ]
    }
  };

  const currentContent = translations[language];
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveFeaturesMap(prev => {
          const newMap = {...prev};
          newMap[activeAudience] = (newMap[activeAudience] + 1) % currentContent.audiences[activeAudience].features.length;
          return newMap;
        });
      }
    }, 4000);
    
    return () => clearInterval(interval);
  }, [activeAudience, isHovering, currentContent.audiences]);

  const audienceColors = [
    { 
      primary: 'bg-emerald-500', 
      lighter: 'bg-emerald-400', 
      text: 'text-emerald-500', 
      hover: 'hover:bg-emerald-500', 
      border: 'border-emerald-500',
      dark: {
        primary: 'bg-emerald-600',
        lighter: 'bg-emerald-500',
        text: 'text-emerald-400',
        hover: 'hover:bg-emerald-600',
        border: 'border-emerald-400'
      }
    },
    { 
      primary: 'bg-blue-500', 
      lighter: 'bg-blue-400', 
      text: 'text-blue-500', 
      hover: 'hover:bg-blue-500', 
      border: 'border-blue-500',
      dark: {
        primary: 'bg-blue-600',
        lighter: 'bg-blue-500',
        text: 'text-blue-400',
        hover: 'hover:bg-blue-600',
        border: 'border-blue-400'
      }
    },
    { 
      primary: 'bg-purple-500', 
      lighter: 'bg-purple-400', 
      text: 'text-purple-500', 
      hover: 'hover:bg-purple-500', 
      border: 'border-purple-500',
      dark: {
        primary: 'bg-purple-600',
        lighter: 'bg-purple-500',
        text: 'text-purple-400',
        hover: 'hover:bg-purple-600',
        border: 'border-purple-400'
      }
    }
  ];

  const getColor = (colorKey, index) => {
    return darkMode ? audienceColors[index].dark[colorKey] : audienceColors[index][colorKey];
  };

  return (
    <section className={`px-4 py-20 overflow-visible ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
            <span>{currentContent.heading}</span>{" "}
            <span>{currentContent.headingHighlight}</span>
          </h2>
        </div>
        
        {/* Interactive Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Audience Selector */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {currentContent.audiences.map((audience, index) => (
              <div 
                key={index}
                onClick={() => setActiveAudience(index)}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className={`cursor-pointer transition-all duration-300 rounded-2xl p-6 border-2 ${
                  activeAudience === index 
                    ? `${getColor('primary', index)} text-white shadow-lg border-transparent` 
                    : `${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white'} ${
                        darkMode ? 'border-gray-700 hover:border-emerald-400' : 'border-gray-200 hover:border-emerald-300'
                      } hover:shadow-md`
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className={`text-xl md:text-2xl font-bold ${
                    activeAudience === index ? 'text-white' : darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {audience.title}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activeAudience === index 
                      ? 'bg-white text-gray-800' 
                      : `${getColor('lighter', index)} text-white`
                  }`}>
                    {index + 1}
                  </div>
                </div>
                <p className={`mt-2 ${
                  activeAudience === index 
                    ? 'text-white/90' 
                    : darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {audience.description}
                </p>
                
                {/* Preview of features even when not selected */}
                {activeAudience !== index && (
                  <div className={`mt-3 pt-3 ${
                    darkMode ? 'border-gray-700' : 'border-gray-100'
                  } border-t`}>
                    <div className={`flex items-center text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <span className="mr-2">{audience.features[0].title}</span>
                      <span className={`mx-1 ${darkMode ? 'text-gray-600' : 'text-gray-300'}`}>•</span>
                      <span className="mr-2">{audience.features[1].title}</span>
                      <span className={`mx-1 ${darkMode ? 'text-gray-600' : 'text-gray-300'}`}>•</span>
                      <span>{audience.features[2].title}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Feature Showcase */}
          <div className={`lg:col-span-8 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } rounded-3xl overflow-hidden shadow-xl relative`}>
            {/* Background decorative elements */}
            <div className={`absolute top-0 right-0 w-64 h-64 rounded-full transform translate-x-1/3 -translate-y-1/3 opacity-60 ${
              darkMode ? 'bg-gradient-to-b from-gray-700 to-transparent' : 'bg-gradient-to-b from-gray-100 to-transparent'
            }`}></div>
            <div className={`absolute bottom-0 left-0 w-48 h-48 rounded-full transform -translate-x-1/3 translate-y-1/3 opacity-60 ${
              darkMode ? 'bg-gradient-to-t from-gray-700 to-transparent' : 'bg-gradient-to-t from-gray-100 to-transparent'
            }`}></div>
            
            <div className="p-8 md:p-12 relative z-10 h-full flex flex-col">
              {/* Current Feature Content */}
              <div className="flex-grow">
                <div className="mb-8 flex items-center">
                  <div className={`p-4 rounded-2xl ${getColor('primary', activeAudience)} mr-6`}>
                    {React.cloneElement(
                      currentContent.audiences[activeAudience].features[activeFeaturesMap[activeAudience]].icon, 
                      { size: 32, className: 'text-white' }
                    )}
                  </div>
                  <h3 className={`text-2xl md:text-3xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {currentContent.audiences[activeAudience].features[activeFeaturesMap[activeAudience]].title}
                  </h3>
                </div>
                
                <div className={`p-6 rounded-2xl mb-8 ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-50'
                }`}>
                  <p className={`leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  } text-lg`}>
                    {currentContent.audiences[activeAudience].features[activeFeaturesMap[activeAudience]].description}
                  </p>
                </div>
                
                {/* Other features preview */}
                <div className="mt-6">
                  <h4 className={`text-sm uppercase tracking-wider mb-3 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>Other features:</h4>
                  <div className="flex flex-wrap gap-3">
                    {currentContent.audiences[activeAudience].features.map((feature, idx) => (
                      idx !== activeFeaturesMap[activeAudience] && (
                        <button
                          key={idx}
                          onClick={() => {
                            setActiveFeaturesMap(prev => {
                              const newMap = {...prev};
                              newMap[activeAudience] = idx;
                              return newMap;
                            });
                          }}
                          className={`px-4 py-2 rounded-lg text-sm ${
                            darkMode 
                              ? `${getColor('text', activeAudience)} border ${getColor('border', activeAudience)} hover:${getColor('primary', activeAudience)} hover:text-white`
                              : `${getColor('text', activeAudience)} border ${getColor('border', activeAudience)} hover:${getColor('primary', activeAudience)} hover:text-white`
                          } transition-colors`}
                        >
                          {feature.title}
                        </button>
                      )
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Feature Navigation */}
              <div className="flex justify-center gap-2 pt-4">
                {currentContent.audiences[activeAudience].features.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeFeaturesMap[activeAudience] === index 
                        ? `${getColor('primary', activeAudience)} transform scale-125` 
                        : darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    onClick={() => {
                      setActiveFeaturesMap(prev => {
                        const newMap = {...prev};
                        newMap[activeAudience] = index;
                        return newMap;
                      });
                      setIsHovering(true);
                    }}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature Pills */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {currentContent.audiences.flatMap((audience, audienceIndex) => 
            audience.features.map((feature, featureIndex) => (
              <button
                key={`${audienceIndex}-${featureIndex}`}
                className={`py-2 px-4 rounded-full border-2 transition-all duration-300 text-sm font-medium
                  ${activeFeaturesMap[activeAudience] === featureIndex && activeAudience === audienceIndex
                    ? `${getColor('primary', audienceIndex)} text-white border-transparent`
                    : `${darkMode ? 'bg-gray-800' : 'bg-white'} ${
                        getColor('text', audienceIndex)
                      } ${
                        getColor('border', audienceIndex)
                      } ${
                        getColor('hover', audienceIndex)
                      } hover:text-white`
                  }`}
                onClick={() => {
                  setActiveAudience(audienceIndex);
                  setActiveFeaturesMap(prev => {
                    const newMap = {...prev};
                    newMap[audienceIndex] = featureIndex;
                    return newMap;
                  });
                }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {feature.title}
              </button>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ForAudiences;