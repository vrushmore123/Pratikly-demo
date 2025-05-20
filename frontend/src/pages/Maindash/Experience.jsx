import React, { useState, useEffect } from 'react';
import {
  Notebook,
  Building2,
  Briefcase,
  CloudCog,
  ArrowRight,
  ChevronRight,
  BarChart3,
  Users,
  LineChart,
  Calendar,
  FileText,
  MessageSquare,
  GraduationCap,
  Handshake,
  UserCheck,
  FileCode,
  Award,
  Clock,
  BookOpen,
  Zap,
  Database,
  Mail,
  Bookmark,
  Search,
  LayoutGrid,
  UserCog,
  Network,
  Target,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../../Context/LanguageContext';
import { useTheme } from '../../Context/ThemeContext';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('students');
  const [hoveredTab, setHoveredTab] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animateFeature, setAnimateFeature] = useState(-1);
  const { language } = useLanguage();
  const { darkMode } = useTheme();

  // Animation effect when component mounts
  useEffect(() => {
    setIsVisible(true);
    
    // Animate features sequentially
    const interval = setInterval(() => {
      setAnimateFeature(prev => {
        if (prev >= 5) return 5;
        return prev + 1;
      });
    }, 200);
    
    return () => clearInterval(interval);
  }, []);
  
  // Reset feature animations when tab changes
  useEffect(() => {
    setAnimateFeature(-1);
    const timeout = setTimeout(() => {
      let count = -1;
      const interval = setInterval(() => {
        count++;
        if (count > 5) {
          clearInterval(interval);
          return;
        }
        setAnimateFeature(count);
      }, 150);
    }, 100);
    
    return () => clearTimeout(timeout);
  }, [activeTab]);

  const translations = {
    en: {
      title: "From classroom to career – we digitize, simplify, and enhance the entire process.",
      titleHighlight: "Seamless Journey",
      subtitle: "Students discover the right internships and jobs. Teachers save time on repetitive and manual tasks. Management and admins have control over processes. Employers connect with future-ready talent.",
      tabs: [
        {
          id: 'students',
          title: 'For Students',
          description: 'More than a platform – your digital space for future learning',
          features: [
            'All your learning tools in one smart platform',
            'Track classes, deadlines, and key dates',
            'Get feedback and communicate easily',
            'Monitor your progress in real time',
            'Build a strong CV and showcase skills',
            'Fastest application process ever'
          ],
          stats: '92% career placement rate',
          cta: 'Explore student features'
        },
        {
          id: 'teachers',
          title: 'For Teachers',
          description: 'More time for what truly matters – your teaching',
          features: [
            'Easily create and manage courses',
            'Centralize feedback, tasks, and messaging',
            'Collaborate with integrated Teams/Outlook',
            'Track each student\'s journey',
            'Automate repetitive tasks',
            'Focus on impactful teaching'
          ],
          stats: 'Saves 10+ hours weekly',
          cta: 'See teacher tools'
        },
        {
          id: 'managers',
          title: 'For Education Managers',
          description: 'Total control over learning, internships, and placements',
          features: [
            'Automated workflows for efficiency',
            'Real-time insights and reporting',
            'Scalable across all school levels',
            'GDPR-compliant and future-ready',
            'Monitor institutional performance',
            'Data-driven decision making'
          ],
          stats: '100% compliance assurance',
          cta: 'View management features'
        },
        {
          id: 'employers',
          title: 'For Employers',
          description: 'Meet your next generation – sooner, smarter, faster',
          features: [
            'Post internships and jobs easily',
            'Connect with right-fit students',
            'Track internships and provide feedback',
            'Build recruitment pipelines early',
            'Access verified student profiles',
            'Streamlined hiring process'
          ],
          stats: '500+ successful matches',
          cta: 'Learn about hiring'
        }
      ],
      benefits: [
        'End-to-end digital transformation',
        'Enhanced stakeholder engagement',
        'Data-driven performance insights'
      ],
      demoButton: 'Request a Demo'
    },
     sv: {
      title: "Från klassrum till karriär – vi digitaliserar, förenklar och förbättrar hela processen.",
      titleHighlight: "Sömlös resa",
      subtitle: "Studenter hittar rätt praktikplatser och jobb. Lärare sparar tid genom att slippa repetitiva och manuella uppgifter. Utbildningsledare och administratörer får kontroll över hela processen. Arbetsgivare kopplas samman med framtidens talanger.",
      tabs: [
        {
          id: 'students',
          title: 'För Studenter',
          description: 'Mer än en plattform – din digitala lärmiljö',
          features: [
            'Alla dina studier på ett ställe',
            'Håll koll på lektioner och deadlines',
            'Få feedback och kommunicera smidigt',
            'Följ din utveckling i realtid',
            'Bygg ett starkt CV och visa upp färdigheter',
            'Snabbaste ansökningsprocessen'
          ],
          stats: '92% framgångsrik placering',
          cta: 'Utforska studentfunktioner'
        },
        {
          id: 'teachers',
          title: 'För Lärare',
          description: 'Mer tid för det som verkligen räknas – din undervisning',
          features: [
            'Skapa och hantera kurser enkelt',
            'Samla kommunikation och återkoppling',
            'Integrera med Teams och Outlook',
            'Följ varje elevs resa',
            'Automatisera repetitiva uppgifter',
            'Fokusera på kvalitativ undervisning'
          ],
          stats: 'Sparar 10+ timmar i veckan',
          cta: 'Se lärarverktyg'
        },
        {
          id: 'managers',
          title: 'För Skolledare',
          description: 'Full kontroll över utbildning, praktik och jobbplaceringar',
          features: [
            'Automatiserade arbetsflöden',
            'Realtidsdata och rapporter',
            'Anpassningsbar för alla nivåer',
            'GDPR-säker och framtidssäkrad',
            'Övervaka institutionell prestation',
            'Datadriven beslutsfattning'
          ],
          stats: '100% efterlevnadsgaranti',
          cta: 'Se ledningsfunktioner'
        },
        {
          id: 'employers',
          title: 'För Arbetsgivare',
          description: 'Möt nästa generation – tidigare, enklare och smartare',
          features: [
            'Publicera praktikplatser och jobb',
            'Matchas med rätt studenter',
            'Följ praktik, ge återkoppling',
            'Säkra framtida rekryteringar',
            'Tillgång till verifierade studentprofiler',
            'Effektiviserad rekryteringsprocess'
          ],
          stats: '500+ framgångsrika matchningar',
          cta: 'Läs om rekrytering'
        }
      ],
      benefits: [
        'Helhetslösning för digitalisering',
        'Förbättrat engagemang',
        'Datadrivna insikter'
      ],
      demoButton: 'Boka demo'
    }
  };

  const activeTabData = translations[language].tabs.find((tab) => tab.id === activeTab);

  // Enhanced color scheme with more vibrant gradients
  const getTabColors = (tabId) => {
    const baseColors = {
      students: {
        light: {
          active: 'bg-gradient-to-r from-blue-500 to-indigo-600',
          hover: 'bg-blue-50 text-blue-600',
          icon: 'text-blue-600',
          cardBg: 'bg-gradient-to-br from-blue-50 to-indigo-50',
          cardHighlight: 'bg-blue-100 text-blue-700',
          cardLink: 'text-blue-600 hover:text-blue-700',
          rightCard: 'bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-700',
          highlight: 'bg-gradient-to-r from-blue-400 to-indigo-500',
          accentBg: 'bg-blue-600/10',
          featureIconBg: 'bg-blue-100',
          featureIconColor: 'text-blue-600'
        },
        dark: {
          active: 'bg-gradient-to-r from-blue-600 to-indigo-700',
          hover: 'bg-blue-900/30 text-blue-300',
          icon: 'text-blue-400',
          cardBg: 'bg-gradient-to-br from-gray-800 to-gray-900',
          cardHighlight: 'bg-blue-900/50 text-blue-200',
          cardLink: 'text-blue-400 hover:text-blue-300',
          rightCard: 'bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800',
          highlight: 'bg-gradient-to-r from-blue-400 to-indigo-500',
          accentBg: 'bg-blue-600/20',
          featureIconBg: 'bg-blue-900/50',
          featureIconColor: 'text-blue-400'
        }
      },
      teachers: {
        light: {
          active: 'bg-gradient-to-r from-emerald-500 to-teal-600',
          hover: 'bg-emerald-50 text-emerald-600',
          icon: 'text-emerald-600',
          cardBg: 'bg-gradient-to-br from-emerald-50 to-teal-50',
          cardHighlight: 'bg-emerald-100 text-emerald-700',
          cardLink: 'text-emerald-600 hover:text-emerald-700',
          rightCard: 'bg-gradient-to-br from-emerald-500 via-teal-600 to-emerald-700',
          highlight: 'bg-gradient-to-r from-emerald-400 to-teal-500',
          accentBg: 'bg-emerald-600/10',
          featureIconBg: 'bg-emerald-100',
          featureIconColor: 'text-emerald-600'
        },
        dark: {
          active: 'bg-gradient-to-r from-emerald-600 to-teal-700',
          hover: 'bg-emerald-900/30 text-emerald-300',
          icon: 'text-emerald-400',
          cardBg: 'bg-gradient-to-br from-gray-800 to-gray-900',
          cardHighlight: 'bg-emerald-900/50 text-emerald-200',
          cardLink: 'text-emerald-400 hover:text-emerald-300',
          rightCard: 'bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-800',
          highlight: 'bg-gradient-to-r from-emerald-400 to-teal-500',
          accentBg: 'bg-emerald-600/20',
          featureIconBg: 'bg-emerald-900/50',
          featureIconColor: 'text-emerald-400'
        }
      },
      managers: {
        light: {
          active: 'bg-gradient-to-r from-purple-500 to-violet-600',
          hover: 'bg-purple-50 text-purple-600',
          icon: 'text-purple-600',
          cardBg: 'bg-gradient-to-br from-purple-50 to-violet-50',
          cardHighlight: 'bg-purple-100 text-purple-700',
          cardLink: 'text-purple-600 hover:text-purple-700',
          rightCard: 'bg-gradient-to-br from-purple-500 via-violet-600 to-purple-700',
          highlight: 'bg-gradient-to-r from-purple-400 to-violet-500',
          accentBg: 'bg-purple-600/10',
          featureIconBg: 'bg-purple-100',
          featureIconColor: 'text-purple-600'
        },
        dark: {
          active: 'bg-gradient-to-r from-purple-600 to-violet-700',
          hover: 'bg-purple-900/30 text-purple-300',
          icon: 'text-purple-400',
          cardBg: 'bg-gradient-to-br from-gray-800 to-gray-900',
          cardHighlight: 'bg-purple-900/50 text-purple-200',
          cardLink: 'text-purple-400 hover:text-purple-300',
          rightCard: 'bg-gradient-to-br from-purple-600 via-violet-700 to-purple-800',
          highlight: 'bg-gradient-to-r from-purple-400 to-violet-500',
          accentBg: 'bg-purple-600/20',
          featureIconBg: 'bg-purple-900/50',
          featureIconColor: 'text-purple-400'
        }
      },
      employers: {
        light: {
          active: 'bg-gradient-to-r from-amber-500 to-orange-600',
          hover: 'bg-amber-50 text-amber-600',
          icon: 'text-amber-600',
          cardBg: 'bg-gradient-to-br from-amber-50 to-orange-50',
          cardHighlight: 'bg-amber-100 text-amber-700',
          cardLink: 'text-amber-600 hover:text-amber-700',
          rightCard: 'bg-gradient-to-br from-amber-500 via-orange-600 to-amber-700',
          highlight: 'bg-gradient-to-r from-amber-400 to-orange-500',
          accentBg: 'bg-amber-600/10',
          featureIconBg: 'bg-amber-100',
          featureIconColor: 'text-amber-600'
        },
        dark: {
          active: 'bg-gradient-to-r from-amber-600 to-orange-700',
          hover: 'bg-amber-900/30 text-amber-300',
          icon: 'text-amber-400',
          cardBg: 'bg-gradient-to-br from-gray-800 to-gray-900',
          cardHighlight: 'bg-amber-900/50 text-amber-200',
          cardLink: 'text-amber-400 hover:text-amber-300',
          rightCard: 'bg-gradient-to-br from-amber-600 via-orange-700 to-amber-800',
          highlight: 'bg-gradient-to-r from-amber-400 to-orange-500',
          accentBg: 'bg-amber-600/20',
          featureIconBg: 'bg-amber-900/50',
          featureIconColor: 'text-amber-400'
        }
      }
    };

    const mode = darkMode ? 'dark' : 'light';
    const colors = baseColors[tabId] || baseColors.students;
    
    return {
      active: `${colors[mode].active} text-white`,
      hover: colors[mode].hover,
      icon: colors[mode].icon,
      activeIcon: 'text-white',
      cardBg: colors[mode].cardBg,
      cardIcon: colors[mode].icon,
      cardHighlight: colors[mode].cardHighlight,
      cardLink: colors[mode].cardLink,
      rightCard: colors[mode].rightCard,
      glow: darkMode ? 'shadow-lg' : `shadow-${tabId === 'students' ? 'blue' : tabId === 'teachers' ? 'emerald' : tabId === 'managers' ? 'purple' : 'amber'}-500/30`,
      highlight: `${colors[mode].highlight} bg-clip-text text-transparent`,
      accentBg: colors[mode].accentBg,
      accentBorder: darkMode ? 'border-white/10' : `border-${tabId === 'students' ? 'blue' : tabId === 'teachers' ? 'emerald' : tabId === 'managers' ? 'purple' : 'amber'}-500/20`,
      featureIconBg: colors[mode].featureIconBg,
      featureIconColor: colors[mode].featureIconColor
    };
  };

  const tabColors = getTabColors(activeTab);

  const getTabIcon = (tabId) => {
    switch(tabId) {
      case 'students': return <GraduationCap size={24} />;
      case 'teachers': return <UserCog size={24} />;
      case 'managers': return <Network size={24} />;
      case 'employers': return <Handshake size={24} />;
      default: return <Notebook size={24} />;
    }
  };

  const getBenefitIcon = (index) => {
    switch(index) {
      case 0: return <Sparkles size={20} />;
      case 1: return <Target size={20} />;
      case 2: return <BarChart3 size={20} />;
      default: return <Zap size={20} />;
    }
  };

  return (
    <section className={`px-4 py-24 overflow-hidden ${
      darkMode 
        ? 'bg-gradient-to-b from-gray-900 to-gray-800' 
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      <div 
        className={`max-w-7xl mx-auto transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col gap-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-3 inline-block">
              <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${tabColors.accentBg} ${tabColors.highlight}`}>
                Next-generation platform
              </span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {translations[language].title} <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">{translations[language].titleHighlight}</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {translations[language].subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-wrap justify-center gap-3 mb-6 relative">
              <div className={`absolute inset-0 rounded-3xl blur-3xl opacity-50 -z-10 ${
                darkMode 
                  ? 'bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-amber-900/20' 
                  : 'bg-gradient-to-r from-blue-50 via-purple-50 to-amber-50'
              }`}></div>
              {translations[language].tabs.map((tab) => {
                const colors = getTabColors(tab.id);
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    onMouseEnter={() => setHoveredTab(tab.id)}
                    onMouseLeave={() => setHoveredTab(null)}
                    className={`flex items-center gap-3 font-medium rounded-xl px-6 py-3.5 transition-all duration-300 transform ${
                      activeTab === tab.id
                        ? `${colors.active} shadow-lg ${colors.glow} scale-105`
                        : hoveredTab === tab.id
                        ? `${colors.hover} shadow-md scale-102.5`
                        : darkMode
                        ? 'bg-gray-800 text-gray-200 hover:bg-gray-700 shadow-md border border-gray-700'
                        : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200'
                    }`}
                  >
                    <span className={`transition-colors duration-300 ${activeTab === tab.id ? colors.activeIcon : colors.icon}`}>
                      {getTabIcon(tab.id)}
                    </span>
                    <span>{tab.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div 
                className={`backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${tabColors.accentBorder} relative overflow-hidden group ${
                  darkMode 
                    ? 'bg-gray-800/70 border-gray-700' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                {/* Decorative elements */}
                <div className={`absolute top-0 right-0 w-32 h-32 -mt-12 -mr-12 rounded-full opacity-10 blur-2xl ${tabColors.active}`}></div>
                <div className={`absolute bottom-0 left-0 w-24 h-24 -mb-8 -ml-8 rounded-full opacity-10 blur-2xl ${tabColors.active}`}></div>
                
                <div className="flex items-start gap-6 mb-8 relative">
                  <div className={`p-4 rounded-xl ${tabColors.cardBg} ${tabColors.cardIcon} group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    {getTabIcon(activeTabData.id)}
                  </div>
                  <div className="transition-all duration-300">
                    <h3 className={`text-2xl font-bold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {activeTabData.title}
                    </h3>
                    <p className={`mt-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>{activeTabData.description}</p>
                  </div>
                </div>

                <ul className="space-y-5 mb-10">
                  {activeTabData.features.map((feature, index) => (
                    <li 
                      key={index} 
                      className={`flex items-start gap-4 transition-all duration-500 transform ${
                        animateFeature >= index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                      }`}
                    >
                      <span className={`mt-1 flex-shrink-0 ${tabColors.featureIconBg} ${tabColors.featureIconColor} p-1 rounded-full`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className={darkMode ? 'text-gray-200' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={`flex items-center justify-between mt-8 pt-6 ${
                  darkMode ? 'border-t border-gray-700' : 'border-t border-gray-100'
                }`}>
                  <span className={`text-sm font-medium px-4 py-1.5 rounded-full ${tabColors.cardHighlight}`}>
                    {activeTabData.stats}
                  </span>
                  <a 
                    href="#" 
                    className={`flex items-center gap-2 ${tabColors.cardLink} font-medium group-hover:gap-3 transition-all duration-300`}
                  >
                    {activeTabData.cta}
                    <ArrowRight 
                      size={18} 
                      className="group-hover:translate-x-1 transition-transform duration-300" 
                    />
                  </a>
                </div>
              </div>

              <div 
                className={`${tabColors.rightCard} rounded-2xl p-8 text-white shadow-xl relative overflow-hidden`}
              >
                {/* Animated background elements */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white opacity-10 blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-40 left-10 w-24 h-24 rounded-full bg-white opacity-10 blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-10 right-40 w-20 h-20 rounded-full bg-white opacity-10 blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Transformative Benefits</h3>
                  <p className="mb-8 text-white/90 text-lg leading-relaxed">
                    Our platform delivers measurable results across all education stakeholders.
                  </p>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20 hover:bg-white/15 transition-all duration-300 shadow-lg">
                    <h4 className="font-semibold mb-4 text-lg">Key Advantages</h4>
                    <ul className="space-y-4">
                      {translations[language].benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-4 group">
                          <span className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-all duration-300">
                            {getBenefitIcon(index)}
                          </span>
                          <span className="font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a href="/form" className="block transform transition-transform duration-300 hover:scale-102.5">
                    <button className="w-full bg-white text-gray-900 font-semibold py-4 px-6 rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 shadow-md hover:shadow-lg group">
                      {translations[language].demoButton}
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;