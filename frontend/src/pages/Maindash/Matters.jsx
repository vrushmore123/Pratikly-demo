import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../../Context/LanguageContext';
import { useTheme } from '../../Context/ThemeContext';
import { 
  Globe, 
  Users,
  Zap,
  BarChart2,
  Shield,
  Cpu,
  ArrowRight,
  CheckCircle,
  Sparkles,
  X
} from 'lucide-react';

const Matters = () => {
  const { language } = useLanguage();
  const { darkMode } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('why');
  const [activeEntity, setActiveEntity] = useState(null);
  const [hoveredEntity, setHoveredEntity] = useState(null);
  const ecosystemRef = useRef(null);
  const centerNodeRef = useRef(null);
  const svgRef = useRef(null);
  const entityRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);
  
  // Handle mouse movement for enhanced 3D card effect
  const handleMouseMove = (e, cardEl) => {
    if (!cardEl) return;
    
    const rect = cardEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;  
    
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    cardEl.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // Enhanced glowy shadow effect
    const glowColor = darkMode ? 'rgba(99, 102, 241, 0.2)' : 'rgba(79, 70, 229, 0.3)';
    const mainShadow = darkMode ? '0 10px 30px -10px rgba(0, 0, 0, 0.2)' : '0 10px 30px -10px rgba(0, 0, 0, 0.1)';
    const glowShadow = `${(x - centerX) / 25}px ${(y - centerY) / 25}px 30px -5px ${glowColor}`;
    
    cardEl.style.boxShadow = `${mainShadow}, ${glowShadow}`;
  };
  
  const handleMouseLeave = (cardEl) => {
    if (!cardEl) return;
    cardEl.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    cardEl.style.boxShadow = darkMode ? '0 10px 30px -15px rgba(0, 0, 0, 0.2)' : '0 10px 30px -15px rgba(0, 0, 0, 0.1)';
    cardEl.style.transition = 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
  };

  // Check if the device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  // Update connections when ecosystem is visible
  useEffect(() => {
    if (isVisible && svgRef.current && ecosystemRef.current) {
      updateConnections();
    }
    
    // Add resize listener for responsive connections
    window.addEventListener('resize', updateConnections);
    return () => window.removeEventListener('resize', updateConnections);
  }, [isVisible, activeEntity, hoveredEntity]);

  // Function to update SVG connections based on current node positions
  const updateConnections = () => {
    if (!svgRef.current || !ecosystemRef.current || !centerNodeRef.current) return;
    
    // Clear existing connections
    while (svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }
    
    // Get center node position and dimensions
    const centerRect = centerNodeRef.current.getBoundingClientRect();
    const ecosystemRect = ecosystemRef.current.getBoundingClientRect();
    
    // Calculate center node's center point relative to the ecosystem container
    const centerX = (centerRect.left + centerRect.width / 2) - ecosystemRect.left;
    const centerY = (centerRect.top + centerRect.height / 2) - ecosystemRect.top;
    
    // Create SVG elements for each entity
    translations[language].entities.forEach((entity, index) => {
      const entityNode = document.getElementById(`entity-${index}`);
      if (!entityNode) return;
      
      const entityRect = entityNode.getBoundingClientRect();
      
      // Calculate entity node's center point relative to the ecosystem container
      const endX = (entityRect.left + entityRect.width / 2) - ecosystemRect.left;
      const endY = (entityRect.top + entityRect.height / 2) - ecosystemRect.top;
      
      // Create line with gradient
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', centerX);
      line.setAttribute('y1', centerY);
      line.setAttribute('x2', endX);
      line.setAttribute('y2', endY);
      
      // Enhanced styling for hovered/active entity
      const isActive = activeEntity === index || hoveredEntity === index;
      line.setAttribute('stroke', isActive ? "url(#lineGradient)" : darkMode ? "rgba(99, 102, 241, 0.3)" : "rgba(79, 70, 229, 0.3)");
      line.setAttribute('stroke-width', isActive ? "3" : "2");
      line.setAttribute('stroke-dasharray', "6 3");
      line.setAttribute('class', isActive ? "animate-dash-fast" : "animate-dash");
      
      svgRef.current.appendChild(line);
    });
  };

  const handleEntityHover = (index) => {
    if (!isMobile) {
      setHoveredEntity(index);
    }
  };

  const handleEntityClick = (index) => {
    if (isMobile) {
      setActiveEntity(activeEntity === index ? null : index);
    } else {
      // On desktop, clicking also sets the active entity
      setActiveEntity(activeEntity === index ? null : index);
    }
  };

  const translations = {
    en: {
      title: "Our Approach",
      whyTab: "Why This Matters",
      howTab: "Why Choose Us",
      subtitle: "A complete ecosystem for education and employment",
      description: "Most platforms focus on one user. We built for all stakeholders in the education-to-employment journey, creating a seamless ecosystem that delivers real value equally and efficiently.",
      whyContent: {
        headline: "Most platforms focus on one user. We built for all.",
        paragraph: "There are many tools out there for education or internships – but most serve only one side: schools, employers *or* students. That creates gaps, slow processes, and missed opportunities. We listened to *everyone* in the ecosystem – students, teachers, managers, and employers – and built a platform that delivers real value for all, equally and efficiently."
      },
      entities: [
        { 
          name: "Students", 
          color: "bg-purple-600", 
          iconColor: "text-purple-600",
          textColor: "text-purple-700",
          lightBg: "bg-purple-50",
          benefits: ["Faster internship matching", "Direct employer connections", "Skill development tracking"]
        },
        { 
          name: "Teachers", 
          color: "bg-blue-600",
          iconColor: "text-blue-600",
          textColor: "text-blue-700",
          lightBg: "bg-blue-50",
          benefits: ["Reduced administrative work", "Real-time student progress", "Industry-aligned teaching"]
        },
        { 
          name: "Schools", 
          color: "bg-green-600",
          iconColor: "text-green-600",
          textColor: "text-green-700",
          lightBg: "bg-green-50",
          benefits: ["Employment outcome metrics", "Industry partnership management", "Curriculum effectiveness data"]
        },
        { 
          name: "Employers", 
          color: "bg-yellow-500",
          iconColor: "text-yellow-500",
          textColor: "text-yellow-600",
          lightBg: "bg-yellow-50",
          benefits: ["Talent pipeline development", "Simpler internship management", "Skills-based recruitment"]
        },
      ],
      centerNode: "Our Platform",
      features: [
        {
          title: "Built for Sweden",
          description: "Designed specifically for Swedish schools and employers",
          icon: <Globe />
        },
        {
          title: "Role-based UX",
          description: "Tailored features for each user type's unique needs",
          icon: <Users />
        },
        {
          title: "Smart Automation",
          description: "Fastest path to internships & jobs with AI-powered matching",
          icon: <Zap />
        },
        {
          title: "Insight-driven",
          description: "Track progress and employment outcomes in real-time",
          icon: <BarChart2 />
        },
        {
          title: "Privacy-first",
          description: "GDPR-compliant with secure Swedish hosting",
          icon: <Shield />
        },
        {
          title: "Future-ready",
          description: "Microsoft 365-integrated and AI-enhanced",
          icon: <Cpu />
        }
      ],
    },
    sv: {
      title: "Vårt tillvägagångssätt",
      whyTab: "Varför det här behövs",
      howTab: "Hur vi levererar",
      subtitle: "Ett komplett ekosystem för utbildning och anställning",
      description: "Andra plattformar fokuserar ofta på en part. Vi har byggt för alla intressenter i resan från utbildning till anställning, och skapat ett sömlöst ekosystem som levererar verkligt värde jämlikt och effektivt.",
      whyContent: {
        headline: "Andra plattformar fokuserar ofta på en part – vi har byggt för alla.",
        paragraph: "Det finns många digitala verktyg för praktik och lärande. Men de flesta är byggda utifrån skolans, arbetsgivarens eller studentens perspektiv – inte alla tre. Resultatet? Ojämlika processer, ineffektiv matchning och missade möjligheter. Vi har lyssnat på varje röst i ekosystemet: studenter, lärare, skolledare och arbetsgivare. Vår lösning är byggd för att ge rättvisa åt alla, utan att någon faller mellan stolarna."
      },
      entities: [
        { 
          name: "Studenter", 
          color: "bg-purple-600",
          iconColor: "text-purple-600",
          textColor: "text-purple-700",
          lightBg: "bg-purple-50",
          benefits: ["Snabbare praktikplacering", "Direkta arbetsgivarkontakter", "Kompetensutveckling"]
        },
        { 
          name: "Lärare", 
          color: "bg-blue-600",
          iconColor: "text-blue-600",
          textColor: "text-blue-700",
          lightBg: "bg-blue-50",
          benefits: ["Minskat administrativt arbete", "Realtidsuppföljning", "Branschanpassad undervisning"]
        },
        { 
          name: "Skolor", 
          color: "bg-green-600",
          iconColor: "text-green-600",
          textColor: "text-green-700",
          lightBg: "bg-green-50",
          benefits: ["Anställningsstatistik", "Hantering av branschpartnerskap", "Data om läroplanens effektivitet"]
        },
        { 
          name: "Arbetsgivare", 
          color: "bg-yellow-500",
          iconColor: "text-yellow-500",
          textColor: "text-yellow-600",
          lightBg: "bg-yellow-50",
          benefits: ["Talangutveckling", "Enklare praktikhantering", "Kompetensbaserad rekrytering"]
        },
      ],
      centerNode: "Vår Plattform",
      features: [
        {
          title: "Byggt för Sverige",
          description: "Anpassat för svenska skolor och företag",
          icon: <Globe />
        },
        {
          title: "Alla roller i fokus",
          description: "Funktioner anpassade för varje användartyps unika behov",
          icon: <Users />
        },
        {
          title: "Smart automatisering",
          description: "Snabbaste vägen till praktik med AI-matchning",
          icon: <Zap />
        },
        {
          title: "Insiktsbaserat",
          description: "Följ utveckling och anställningsstatus i realtid",
          icon: <BarChart2 />
        },
        {
          title: "Trygghet först",
          description: "GDPR-säker med svensk hosting",
          icon: <Shield />
        },
        {
          title: "Redo för framtiden",
          description: "Integrerat med Microsoft 365, öppet för AI",
          icon: <Cpu />
        }
      ],
      cta: "Se hur det fungerar"
    }
  };

  return (
    <section 
      ref={ref} 
      className={`relative px-4 sm:px-6 py-16 md:py-32 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`} 
      id="our-approach"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`flex flex-col items-center text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="mb-4">
            <span className={`inline-block px-4 py-1.5 sm:px-5 sm:py-2 ${
              darkMode 
                ? 'bg-gradient-to-r from-blue-900/30 to-indigo-800/30 text-blue-300' 
                : 'bg-gradient-to-r from-blue-50 to-indigo-100 text-blue-700'
            } rounded-full text-sm font-medium shadow-sm transition-transform hover:scale-105 hover:shadow-md`}>
              {translations[language].title}
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 max-w-4xl bg-clip-text text-transparent ${
            darkMode 
              ? 'bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500' 
              : 'bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700'
          }`}>
            {translations[language].subtitle}
          </h2>
          <p className={`text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-3xl ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {translations[language].description}
          </p>
          
          {/* Tab selection with animated indicator */}
          <div className={`relative p-1 ${
            darkMode ? 'bg-gray-800' : 'bg-gray-100'
          } rounded-full mb-12 md:mb-16 shadow-inner`}>
            <div 
              className={`absolute inset-y-1 rounded-full ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              } shadow-md transition-all duration-300`}
              style={{ 
                left: activeTab === 'why' ? '0.25rem' : '50%', 
                right: activeTab === 'how' ? '0.25rem' : '50%',
                transform: activeTab === 'how' ? 'translateX(-0.25rem)' : 'translateX(0)'
              }}
            ></div>
            <div className="relative flex space-x-1 sm:space-x-2">
              <button 
                className={`relative z-10 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === 'why' 
                    ? darkMode 
                      ? 'text-blue-400' 
                      : 'text-blue-700' 
                    : darkMode 
                      ? 'text-gray-400 hover:text-blue-400' 
                      : 'text-gray-600 hover:text-blue-600'
                }`}
                onClick={() => setActiveTab('why')}
              >
                {translations[language].whyTab}
              </button>
              <button 
                className={`relative z-10 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === 'how' 
                    ? darkMode 
                      ? 'text-blue-400' 
                      : 'text-blue-700' 
                    : darkMode 
                      ? 'text-gray-400 hover:text-blue-400' 
                      : 'text-gray-600 hover:text-blue-600'
                }`}
                onClick={() => setActiveTab('how')}
              >
                {translations[language].howTab}
              </button>
            </div>
          </div>
        </div>

        {/* Why This Matters Tab */}
        <div className={`transition-all duration-700 ${activeTab === 'why' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-32 absolute pointer-events-none'}`}>
          {/* Modern Interactive Ecosystem Visualization */}
          <div 
            ref={ecosystemRef}
            className={`relative h-64 sm:h-80 md:h-96 lg:h-128 mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
          >
            {/* SVG for connections */}
            <svg 
              ref={svgRef}
              className="absolute inset-0 w-full h-full z-10"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.6" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              {/* Connections will be dynamically generated */}
            </svg>
            
            {/* Orbital Circle Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Cosmic orbital rings */}
              <div className="absolute w-full h-full flex items-center justify-center">
                <div className={`absolute w-3/4 h-3/4 rounded-full border ${
                  darkMode ? 'border-blue-900/50' : 'border-blue-100'
                } opacity-30 animate-spin-slow`}></div>
                <div className={`absolute w-2/3 h-2/3 rounded-full border ${
                  darkMode ? 'border-purple-900/50' : 'border-purple-100'
                } opacity-30 animate-spin-reverse`}></div>
                <div className={`absolute w-1/2 h-1/2 rounded-full border ${
                  darkMode ? 'border-indigo-900/50' : 'border-indigo-100'
                } opacity-30 animate-spin-med`}></div>
              </div>
              
              {/* Center Platform Node */}
              <div 
                ref={centerNodeRef} 
                className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center z-20"
              >
                {/* Animated pulse rings */}
                <div className={`absolute w-full h-full rounded-full bg-gradient-to-r ${
                  darkMode ? 'from-blue-600/20 to-purple-600/20' : 'from-blue-400/10 to-purple-400/10'
                } opacity-10 animate-pulse-slow`}></div>
                <div className={`absolute w-11/12 h-11/12 rounded-full bg-gradient-to-r ${
                  darkMode ? 'from-blue-600/30 to-purple-600/30' : 'from-blue-500/20 to-purple-500/20'
                } opacity-20 animate-pulse-medium`}></div>
                <div className={`absolute w-5/6 h-5/6 rounded-full bg-gradient-to-r ${
                  darkMode ? 'from-blue-600/40 to-purple-600/40' : 'from-blue-600/30 to-purple-600/30'
                } opacity-30 animate-pulse-fast`}></div>
                
                {/* Center platform node */}
                <div className="relative w-3/4 h-3/4 rounded-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer group">
                  <span className="text-center px-2">{translations[language].centerNode}</span>
                  
                  {/* Center glow effect */}
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  
                  {/* Particle effects */}
                  <div className="particles-container absolute inset-0 rounded-full overflow-hidden">
                    {[...Array(12)].map((_, i) => (
                      <div 
                        key={i} 
                        className="particle absolute bg-white rounded-full"
                        style={{
                          width: `${Math.random() * 5 + 2}px`,
                          height: `${Math.random() * 5 + 2}px`,
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          opacity: Math.random() * 0.5 + 0.3,
                          animationDuration: `${Math.random() * 10 + 5}s`,
                          animationDelay: `${Math.random() * 5}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Dynamic Entity Nodes - Using Flex layout for better responsiveness */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-xl max-h-xl">
                  {translations[language].entities.map((entity, index) => {
                    // Calculate position based on angle for responsive layout
                    const angle = (index * (2 * Math.PI / translations[language].entities.length)) - Math.PI/2;
                    const radius = window.innerWidth < 768 ? '38%' : '42%'; // Smaller radius on mobile
                    
                    // Use CSS custom properties for clean animation
                    const style = {
                      '--entity-index': index,
                      '--entity-angle': `${angle}rad`,
                      '--entity-delay': `${index * 150}ms`,
                    };
                    
                    const isActive = activeEntity === index || hoveredEntity === index;
                    
                    return (
                      <div
                        id={`entity-${index}`}
                        key={entity.name}
                        ref={el => entityRefs.current[index] = el}
                        className={`entity-node absolute transform transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                        style={{
                          ...style,
                          left: `calc(50% + ${radius} * cos(var(--entity-angle)))`,
                          top: `calc(50% + ${radius} * sin(var(--entity-angle)))`,
                          transitionDelay: 'var(--entity-delay)',
                          transform: `translate(-50%, -50%) ${isActive ? 'scale(1.1)' : 'scale(1)'}`,
                          zIndex: isActive ? 30 : 20
                        }}
                        onClick={() => handleEntityClick(index)}
                        onMouseEnter={() => handleEntityHover(index)}
                        onMouseLeave={() => setHoveredEntity(null)}
                      >
                        {/* Entity bubble with modern glass effect */}
                        <div 
                          className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full ${entity.color} flex items-center justify-center text-white font-semibold cursor-pointer shadow-lg transition-all duration-300 group`}
                          style={{
                            boxShadow: isActive 
                              ? '0 0 25px 5px rgba(99, 102, 241, 0.4), inset 0 0 15px rgba(255, 255, 255, 0.3)' 
                              : '0 10px 25px rgba(0, 0, 0, 0.1)'
                          }}
                        >
                          <div className="flex flex-col items-center">
                            <span className="text-xs sm:text-sm md:text-base text-center px-1">
                              {entity.name}
                            </span>
                            {/* Inner glow effect on hover */}
                            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                          </div>
                        </div>

                        {/* Tooltip that appears on hover (desktop only) */}
                        {!isMobile && isActive && (
                          <div 
                            className={`absolute entity-tooltip transform origin-center transition-all duration-300 z-40 ${
                              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                            } border shadow-xl rounded-xl overflow-hidden min-w-52 p-4 ${getTooltipPosition(index)}`}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center">
                                <span className={`inline-block w-3 h-3 mr-2 rounded-full ${entity.color}`}></span>
                                <h4 className={`font-bold ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>{entity.name}</h4>
                              </div>
                            </div>
                            <ul className="space-y-2">
                              {entity.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start">
                                  <CheckCircle className={`${entity.iconColor} h-4 w-4 mr-2 mt-0.5 flex-shrink-0`} />
                                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How We Deliver Tab */}
        <div className={`transition-all duration-700 ${activeTab === 'how' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-32 absolute pointer-events-none'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 md:mb-16">
            {translations[language].features.map((feature, index) => {
              const delay = index * 100;
              
              return (
                <div
                  key={index}
                  className={`group rounded-xl overflow-hidden transition-all duration-500 transform ${
                    isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-20 rotate-2'
                  } shadow-feature-card hover:shadow-feature-glow ${
                    darkMode 
                      ? 'bg-gray-800/90 border-gray-700/70' 
                      : 'bg-white border-gray-100'
                  } border hover:border-blue-400/30`}
                  style={{ 
                    transitionDelay: `${delay}ms`,
                    transformOrigin: index % 2 === 0 ? 'bottom left' : 'bottom right'
                  }}
                  onMouseMove={e => !isMobile && handleMouseMove(e, e.currentTarget)}
                  onMouseLeave={e => !isMobile && handleMouseLeave(e.currentTarget)}
                >
                  <div className="p-5 sm:p-6 h-full flex flex-col">
                    <div className={`w-12 h-12 rounded-lg ${
                      darkMode 
                        ? 'bg-blue-900/30 text-blue-400' 
                        : 'bg-blue-50 text-blue-600'
                    } flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                      {React.cloneElement(feature.icon, {
                        className: "w-6 h-6"
                      })}
                    </div>
                    
                    <h3 className={`text-lg sm:text-xl font-bold mb-2 ${
                      darkMode ? 'text-gray-200' : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h3>
                    
                    <p className={`text-sm sm:text-base ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {feature.description}
                    </p>
                    
                    <div className="mt-auto pt-4">
                      <span className={`inline-flex items-center text-sm font-medium ${
                        darkMode ? 'text-blue-400' : 'text-blue-600'
                      } group-hover:underline`}>
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* CTA button */}
          <div className="flex justify-center">
            <button 
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                darkMode 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-glow-blue'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-glow-blue'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span>{language === 'sv' ? "Se hur det fungerar" : "See how it works"}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile entity details panel (for tablets/phones) */}
      {isMobile && activeEntity !== null && (
        <div 
          className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
            activeEntity !== null ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setActiveEntity(null)}
        >
          <div 
            className={`${
              darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            } border rounded-xl w-full max-w-xs sm:max-w-sm overflow-hidden`}
            onClick={e => e.stopPropagation()}
          >
            <div className={`p-4 ${translations[language].entities[activeEntity].lightBg} flex items-center justify-between`}>
              <div className="flex items-center">
                <span className={`inline-block w-3 h-3 mr-2 rounded-full ${translations[language].entities[activeEntity].color}`}></span>
                <h3 className={`font-bold ${translations[language].entities[activeEntity].textColor}`}>
                  {translations[language].entities[activeEntity].name}
                </h3>
              </div>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setActiveEntity(null)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4">
              <ul className="space-y-3">
                {translations[language].entities[activeEntity].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className={`${translations[language].entities[activeEntity].iconColor} h-5 w-5 mr-2 mt-0.5 flex-shrink-0`} />
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient background */}
        <div 
          className={`absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full blur-3xl opacity-10 ${
            darkMode ? 'bg-blue-500' : 'bg-blue-600'
          }`}
        ></div>
        <div 
          className={`absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full blur-3xl opacity-10 ${
            darkMode ? 'bg-purple-500' : 'bg-purple-600'
          }`}
        ></div>
        
        {/* Floating sparkles */}
        {isVisible && Array.from({ length: 20 }).map((_, i) => {
          const randomSize = Math.random() * 4 + 2;
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomDelay = Math.random() * 5;
          const randomDuration = Math.random() * 15 + 10;
          
          return (
            <div 
              key={i}
              className={`absolute rounded-full ${
                darkMode ? 'bg-blue-400' : 'bg-blue-300'
              } opacity-40 animate-float pointer-events-none`}
              style={{
                width: `${randomSize}px`,
                height: `${randomSize}px`,
                left: `${randomX}%`,
                top: `${randomY}%`,
                animationDelay: `${randomDelay}s`,
                animationDuration: `${randomDuration}s`
              }}
            ></div>
          );
        })}
      </div>
    </section>
  );
};

// Helper function to position tooltips based on the entity position
function getTooltipPosition(index) {
  // Adjust tooltip position based on which quadrant the entity is in
  switch (index) {
    case 0: // top
      return 'left-1/2 -translate-x-1/2 bottom-full mb-4';
    case 1: // right
      return 'top-1/2 -translate-y-1/2 left-full ml-4';
    case 2: // bottom
      return 'left-1/2 -translate-x-1/2 top-full mt-4';
    case 3: // left
      return 'top-1/2 -translate-y-1/2 right-full mr-4';
    default:
      return 'left-1/2 -translate-x-1/2 bottom-full mb-4';
  }
}

export default Matters;