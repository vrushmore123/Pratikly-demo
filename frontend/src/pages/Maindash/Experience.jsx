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
  Plus,
  X,
  Image
} from 'lucide-react';

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

const EnhancedExperience = () => {
  const [language, setLanguage] = useState('en'); // Default language
  const [activeTab, setActiveTab] = useState('lms');
  const [isExpanded, setIsExpanded] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [featureIndex, setFeatureIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(null);
  
  // Translations
  const translations = {
    en: {
      title: "Empowering Education with",
      subtitle: "From classrooms to careers, we streamline education, internships, and job readiness into one powerful platform.",
      tabs: [
        {
          id: 'lms',
          title: 'Learning Management System',
          description: 'A comprehensive system to manage, deliver, and track educational content.',
          features: [
            'Digital course administration',
            'Scheduling and calendars',
            'Assignment tracking and submissions',
            
          ],
          stats: 'Used by 85% of institutions',
          cta: 'Explore LMS features'
        },
        {
          id: 'internships',
          title: 'Internship Services',
          description: 'Connect students with real-world opportunities that complement their education.',
          features: [
            'Matching students with companies',
            'Automated internship workflows',
            'Employer profiles and verification',
           
          ],
          stats: '500+ partner companies',
          cta: 'Learn about internships'
        },
        {
          id: 'jobs',
          title: 'Job Placement',
          description: 'Help students transition seamlessly from education to employment.',
          features: [
            'Job postings directly in the system',
            'Career coaching and CV support',
            'Integration with labor market platforms',
          
          ],
          stats: '92% placement rate',
          cta: 'See job success stories'
        },
        {
          id: 'ms365',
          title: 'Microsoft 365 Integration',
          description: 'Enhance productivity and communication with Microsoft 365 tools.',
          features: [
            'Connection with Microsoft Teams',
            'Sync with Outlook & Calendar',
            'Document sharing via SharePoint',
           
          ],
          stats: 'Seamless integration',
          cta: 'View integration guide'
        }
      ],
      benefits: [
        'Increased efficiency',
        'Better engagement',
        'Comprehensive analytics'
      ],
      enhancedExperience: 'Enhanced Experience',
      experienceDescription: 'Our {tabTitle} solution is designed to provide the best experience for both educators and students.',
      keyBenefits: 'Key Benefits',
      requestDemo: 'Request a Demo',
      readMore: 'Read More',
      close: 'Close',
      exploreFeatures: 'Explore Features'
    },
    sv: {
      title: "Stärker utbildning med",
      subtitle: "Från klassrum till karriär, vi effektiviserar utbildning, praktik och jobbförberedelse i en kraftfull plattform.",
      tabs: [
        {
          id: 'lms',
          title: 'Lärplattform',
          description: 'Ett omfattande system för att hantera, leverera och spåra utbildningsinnehåll.',
          features: [
            'Digital kursadministration',
            'Schemaläggning och kalendrar',
            'Uppgiftsspårning och inlämningar',
            'Betygssättning och återkoppling',
            'Kommunikation mellan lärare och studenter'
          ],
          stats: 'Används av 85% av institutioner',
          cta: 'Utforska LMS-funktioner'
        },
        {
          id: 'internships',
          title: 'Praktiktjänster',
          description: 'Koppla samman studenter med verkliga möjligheter som kompletterar deras utbildning.',
          features: [
            'Matchning av studenter med företag',
            'Automatiserade praktikflöden',
            'Arbetsgivarprofiler och verifiering',
            'Uppföljning och utvärdering'
          ],
          stats: '500+ partnerföretag',
          cta: 'Lär dig om praktik'
        },
        {
          id: 'jobs',
          title: 'Jobbplacering',
          description: 'Hjälp studenter att smidigt övergå från utbildning till anställning.',
          features: [
            'Jobbannonser direkt i systemet',
            'Karriärcoaching och CV-stöd',
            'Integration med arbetsmarknadsplattformar',
            'Spårning av studenters anställningsstatus'
          ],
          stats: '92% placeringstakt',
          cta: 'Se framgångsberättelser'
        },
        {
          id: 'ms365',
          title: 'Microsoft 365-integrering',
          description: 'Förbättra produktivitet och kommunikation med Microsoft 365-verktyg.',
          features: [
            'Anslutning med Microsoft Teams',
            'Synkronisering med Outlook & Kalender',
            'Dokumentdelning via SharePoint',
            'Förbättrad kommunikation & produktivitet'
          ],
          stats: 'Sömlös integration',
          cta: 'Visa integrationsguide'
        }
      ],
      benefits: [
        'Ökad effektivitet',
        'Bättre engagemang',
        'Omfattande analyser'
      ],
      enhancedExperience: 'Förbättrad upplevelse',
      experienceDescription: 'Vår {tabTitle}-lösning är utformad för att ge den bästa upplevelsen för både lärare och studenter.',
      keyBenefits: 'Nyckelfördelar',
      requestDemo: 'Begär en demo',
      readMore: 'Läs mer',
      close: 'Stäng',
      exploreFeatures: 'Utforska funktioner'
    }
  };

  const currentLang = translations[language];
  
  const tabs = currentLang.tabs.map((tab, index) => ({
    ...tab,
    id: ['lms', 'internships', 'jobs', 'ms365'][index], // Keep original IDs
    color: ['indigo', 'emerald', 'violet', 'blue'][index],
    icon: [
      <Notebook size={24} className="transition-all duration-300" key="lms" />,
      <Building2 size={24} className="transition-all duration-300" key="internships" />,
      <Briefcase size={24} className="transition-all duration-300" key="jobs" />,
      <CloudCog size={24} className="transition-all duration-300" key="ms365" />
    ][index],
    features: tab.features.map((text, i) => ({
      text,
      icon: [
        [<FileText size={16} />, <Calendar size={16} />, <BookOpen size={16} />, <GraduationCap size={16} />, <MessageSquare size={16} />],
        [<Handshake size={16} />, <Zap size={16} />, <UserCheck size={16} />, <Award size={16} />],
        [<Search size={16} />, <FileCode size={16} />, <Database size={16} />, <LayoutGrid size={16} />],
        [<Users size={16} />, <Mail size={16} />, <Bookmark size={16} />, <Clock size={16} />]
      ][index][i]
    }))
  }));

  const benefits = currentLang.benefits.map((text, index) => ({
    text,
    icon: [<BarChart3 size={16} />, <Users size={16} />, <LineChart size={16} />][index]
  }));

  const activeTabData = tabs.find((tab) => tab.id === activeTab);
  const activeColor = activeTabData.color;

  // Feature rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isExpanded) {
        setFeatureIndex((prev) => 
          prev >= activeTabData.features.length - 1 ? 0 : prev + 1
        );
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [activeTabData.features.length, isExpanded]);

  // Handle tab change
  const handleTabChange = (id) => {
    if (id !== activeTab) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTab(id);
        setIsAnimating(false);
        setFeatureIndex(0);
      }, 300);
    }
  };

  
  // Get color classes based on active tab
  const getColorClasses = () => {
    const colorMap = {
      'indigo': {
        primary: 'from-indigo-600 to-indigo-800',
        text: 'text-indigo-600',
        bg: 'bg-indigo-600',
        border: 'border-indigo-200',
        light: 'bg-indigo-50 text-indigo-700',
        darkLight: 'from-indigo-700 to-indigo-800',
        extraLight: 'bg-indigo-100 text-indigo-700',
        hover: 'hover:bg-indigo-700 hover:text-white',
        gradientLight: 'from-indigo-50 to-indigo-100',
        activeBg: 'bg-indigo-600 text-white'
      },
      'emerald': {
        primary: 'from-emerald-600 to-emerald-800',
        text: 'text-emerald-600',
        bg: 'bg-emerald-600',
        border: 'border-emerald-200',
        light: 'bg-emerald-50 text-emerald-700',
        darkLight: 'from-emerald-700 to-emerald-800',
        extraLight: 'bg-emerald-100 text-emerald-700',
        hover: 'hover:bg-emerald-700 hover:text-white',
        gradientLight: 'from-emerald-50 to-emerald-100',
        activeBg: 'bg-emerald-600 text-white'
      },
      'violet': {
        primary: 'from-violet-600 to-violet-800',
        text: 'text-violet-600',
        bg: 'bg-violet-600',
        border: 'border-violet-200',
        light: 'bg-violet-50 text-violet-700',
        darkLight: 'from-violet-700 to-violet-800',
        extraLight: 'bg-violet-100 text-violet-700',
        hover: 'hover:bg-violet-700 hover:text-white',
        gradientLight: 'from-violet-50 to-violet-100',
        activeBg: 'bg-violet-600 text-white'
      },
      'blue': {
        primary: 'from-blue-600 to-blue-800',
        text: 'text-blue-600',
        bg: 'bg-blue-600',
        border: 'border-blue-200',
        light: 'bg-blue-50 text-blue-700',
        darkLight: 'from-blue-700 to-blue-800',
        extraLight: 'bg-blue-100 text-blue-700',
        hover: 'hover:bg-blue-700 hover:text-white',
        gradientLight: 'from-blue-50 to-blue-100',
        activeBg: 'bg-blue-600 text-white'
      }
    };

    return colorMap[activeColor];
  };

  const colorClasses = getColorClasses();

  return (
    <section className="  w-full py-16 bg-white overflow-hidden">
      <FontImports />
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col gap-12">
          {/* Logo Header with Special Background */}
          <div className="text-center">
            <div className="relative inline-block">
              {/* Logo Background Shape */}
              <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses.primary} transform skew-x-12 rounded-lg shadow-xl z-0 animate-pulse-subtle`}></div>
              
              {/* Decorative Elements */}
              <div className={`absolute -top-2 -left-2 w-16 h-16 ${colorClasses.bg} rounded-full opacity-30 blur-md animate-float-slow`}></div>
              <div className={`absolute -bottom-2 -right-2 w-16 h-16 ${colorClasses.bg} rounded-full opacity-30 blur-md animate-float`}></div>
              
              {/* Text Container */}
              <div className="relative z-10 px-12 py-8">
                <h2 className="playfair text-4xl md:text-5xl font-bold text-white mb-2">
                  {currentLang.title} <span className="text-white drop-shadow-md">Smart Solutions</span>
                </h2>
                <div className="flex justify-center items-center space-x-3">
                  <div className="h-1 w-24 bg-white/40 rounded-full"></div>
                  <Image size={24} className="text-white/80" />
                  <div className="h-1 w-24 bg-white/40 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 mt-8 max-w-3xl mx-auto">
              {currentLang.subtitle}
            </p>
          </div>

          {/* Interactive Experience Display */}
          <div className="flex flex-col gap-8">
            {/* Tab Navigation - Horizontal Scrollable */}
            <div className="flex overflow-x-auto hide-scrollbar py-3 px-1 gap-3 snap-x snap-mandatory justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  onMouseEnter={() => setIsHovered(tab.id)}
                  onMouseLeave={() => setIsHovered(null)}
                  className={`flex items-center gap-3 font-medium rounded-full px-6 py-4 transition-all duration-500 snap-start flex-shrink-0 shadow-lg ${
                    activeTab === tab.id
                      ? `${getColorClasses().activeBg} scale-105 animate-pulse-border`
                      : 'bg-white text-gray-700 hover:bg-opacity-90 border border-gray-200 hover:border-opacity-0 hover:shadow-xl'
                  }`}
                >
                  <span className={`transition-all duration-500 ${
                    activeTab === tab.id || isHovered === tab.id
                      ? 'text-white scale-110' 
                      : `text-${tab.color}-600`
                  }`}>
                    {tab.icon}
                  </span>
                  <span className={`transition-all duration-300 ${
                    isHovered === tab.id && activeTab !== tab.id ? `text-${tab.color}-600` : ''
                  }`}>
                    {tab.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Innovative Feature Display */}
            <div className={`w-full transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
              {/* Orbital Experience Hub */}
              <div 
                className={`relative w-full bg-gradient-to-br ${colorClasses.gradientLight} rounded-3xl overflow-hidden transition-all duration-500 border ${colorClasses.border} ${
                  isExpanded ? 'h-auto shadow-2xl' : 'h-96 shadow-xl'
                }`}
              >
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl pointer-events-none border-4 border-transparent animate-border-pulse overflow-hidden" style={{
                  background: `linear-gradient(90deg, transparent, transparent) padding-box, 
                               linear-gradient(90deg, rgba(255,255,255,0), ${activeTab === 'lms' ? '#4f46e5' : 
                                               activeTab === 'internships' ? '#10b981' : 
                                               activeTab === 'jobs' ? '#8b5cf6' : 
                                               '#3b82f6'}, rgba(255,255,255,0)) border-box`
                }}></div>
                
                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                  <div className={`absolute top-1/4 left-1/4 w-40 h-40 ${colorClasses.extraLight} rounded-full opacity-40 blur-3xl animate-float-slow`}></div>
                  <div className={`absolute bottom-1/4 right-1/4 w-64 h-64 ${colorClasses.extraLight} rounded-full opacity-30 blur-3xl animate-float`}></div>
                  <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-blue-300 rounded-full opacity-10 blur-3xl animate-float-reverse"></div>
                </div>

                {/* Hub Header */}
                <div className="relative z-10 pt-10 px-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className={`${colorClasses.light} p-5 rounded-2xl transform transition-transform duration-500 shadow-lg hover:rotate-12 group`}>
                        <div className="transition-all duration-300 group-hover:scale-125">
                          {activeTabData.icon}
                        </div>
                      </div>
                      <div className="animate-fade-in">
                        <h3 className="playfair text-3xl font-bold text-gray-900">
                          {activeTabData.title}
                        </h3>
                        <p className="text-gray-600 mt-2 max-w-lg">
                          {activeTabData.description}
                        </p>
                      </div>
                    </div>
                   
                  </div>
                </div>

                {/* Main content area with animation */}
                <div className="relative z-10 px-8 py-8">
                  <div className={`grid gap-8 transition-all duration-500 ${
                    isExpanded 
                      ? 'grid-cols-1 md:grid-cols-2'
                      : 'grid-cols-1'
                  }`}>
                    {/* Left Column - Features */}
                    <div className="relative">
                      <div className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-lg border border-green-700  transition-all duration-300">
                        <h4 className="font-medium text-xl mb-6 text-gray-800 playfair">
                          {currentLang.exploreFeatures}
                        </h4>
                        
                        {/* Feature Showcase with animations */}
                        <div className="relative h-48 mb-4">
                          {activeTabData.features.map((feature, index) => (
                            <div 
                              key={index}
                              className={`absolute top-0 left-0 w-full transition-all duration-500 flex items-start gap-4 p-4 rounded-lg ${
                                isExpanded 
                                  ? 'static opacity-100 transform-none mb-4 hover:bg-gray-50'
                                  : index === featureIndex 
                                    ? 'opacity-100 transform-none' 
                                    : 'opacity-0 translate-y-8 pointer-events-none'
                              }`}
                            >
                              <div className={`${colorClasses.extraLight} p-3 rounded-lg shadow-sm`}>
                                {feature.icon}
                              </div>
                              <span className="text-gray-700 font-medium">{feature.text}</span>
                            </div>
                          ))}
                        </div>

                        {/* Progress indicator (only when not expanded) */}
                        {!isExpanded && (
                          <div className="flex gap-2 justify-center mt-4">
                            {activeTabData.features.map((_, index) => (
                              <div 
                                key={index} 
                                className={`h-2 rounded-full transition-all duration-500 ${
                                  index === featureIndex ? `${colorClasses.bg} w-6` : 'bg-gray-300 w-2'
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>

           
                    </div>

                    {/* Right Column - Benefits (Visible only when expanded) */}
                    {isExpanded && (
                      <div className={`bg-gradient-to-br ${colorClasses.darkLight} rounded-2xl p-8 text-white shadow-xl flex flex-col justify-between transform transition-all duration-500 hover:scale-102`}>
                        <div>
                          <h4 className="font-medium playfair text-xl mb-6">
                            {currentLang.keyBenefits}
                          </h4>
                          
                          <ul className="space-y-6">
                            {benefits.map((benefit, index) => (
                              <li key={index} className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                                <span className="bg-white/20 p-3 rounded-lg shadow-inner">
                                  {benefit.icon}
                                </span>
                                <span className="font-medium">{benefit.text}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <button className="mt-8 bg-white text-gray-800 font-medium py-4 px-8 rounded-xl hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg hover:shadow-xl">
                          {currentLang.requestDemo}
                          <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-2" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom CTA (only visible when not expanded) */}
                {!isExpanded && (
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white to-transparent pt-20 pb-8 px-8 text-center">
                    <button 
                      onClick={handleExpand}
                      className={`bg-gradient-to-r ${colorClasses.primary} text-white font-medium py-4 px-10 rounded-full shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl flex items-center gap-3 mx-auto animate-pulse-shadow`}
                    >
                      {currentLang.readMore}
                      <ArrowRight size={18} />
                    </button>
                  </div>
                )}
              </div>
            </div>
            
          
          </div>
        </div>
      </div>

      {/* Add custom CSS for animations and effects */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(79, 70, 229, 0); }
          100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
        }
        .animate-pulse-shadow {
          animation: pulse 2.5s infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 8s ease-in-out infinite reverse;
        }
        .animate-float-reverse {
          animation: float 7s ease-in-out infinite reverse;
        }
        .animate-float-subtle {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes pulse-subtle {
          0% { opacity: 1; }
          50% { opacity: 0.85; }
          100% { opacity: 1; }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 4s infinite;
        }
        @keyframes border-pulse {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .animate-border-pulse {
          animation: border-pulse 4s linear infinite;
        }
        @keyframes pulse-border {
          0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4); }
          70% { box-shadow: 0 0 0 8px rgba(99, 102, 241, 0); }
          100% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0); }
        }
        .animate-pulse-border {
          animation: pulse-border 2s infinite;
        }
        .scale-102 {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default EnhancedExperience;