import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Using placeholder images since external URLs aren't supported
const useCases = [
  {
    id: 1,
    title: "Streamlined Learning Management",
    titleHighlight: "Learning",
    description: "Manage courses, track assignments, grade submissions, and communicate seamlessly between students and teachers.",
    icon: "🎓",
    colorClass: "from-emerald-400 to-emerald-600",
    bgClass: "bg-emerald-50",
    iconBgClass: "bg-emerald-100",
    borderColorClass: "border-emerald-300"
  },
  {
    id: 2,
    title: "Internship Placement System",
    titleHighlight: "Internship",
    description: "Automated workflows that connect students to verified companies with follow-ups and evaluations.",
    icon: "🤝",
    colorClass: "from-blue-500 to-blue-700",
    bgClass: "bg-blue-50",
    iconBgClass: "bg-blue-100",
    borderColorClass: "border-blue-300"
  },
  {
    id: 3,
    title: "Job Preparation & Placement",
    titleHighlight: "Job",
    description: "In-built job board, CV support, and tracking of student employment with integration into market platforms.",
    icon: "💼",
    colorClass: "from-purple-500 to-purple-700",
    bgClass: "bg-purple-50",
    iconBgClass: "bg-purple-100",
    borderColorClass: "border-purple-300"
  },
  {
    id: 4,
    title: "Microsoft 365 Integration",
    titleHighlight: "Microsoft",
    description: "Connect Teams, Outlook, SharePoint to streamline online learning, planning, and collaboration.",
    icon: "🔗",
    colorClass: "from-orange-500 to-orange-700",
    bgClass: "bg-orange-50",
    iconBgClass: "bg-orange-100",
    borderColorClass: "border-orange-300",
    fullWidth: true
  }
];

// SVG Icons for each card
const CardIcons = {
  Learning: () => (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
      <path d="M12 4.5L2 9.5L12 14.5L22 9.5L12 4.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19 12V17.5L12 21L5 17.5V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 14V9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Internship: () => (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
      <path d="M16 4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 15V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Job: () => (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
      <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Microsoft: () => (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
      <path d="M4 4H11V11H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 4H20V11H13V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 13H11V20H4V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 13H20V20H13V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

const UseCases = () => {
  const [activeCard, setActiveCard] = useState(null);

  // Helper function to get icon by title highlight
  const getIconComponent = (titleHighlight) => {
    switch(titleHighlight) {
      case "Learning": return <CardIcons.Learning />;
      case "Internship": return <CardIcons.Internship />;
      case "Job": return <CardIcons.Job />;
      case "Microsoft": return <CardIcons.Microsoft />;
      default: return null;
    }
  };

  return (
    <section className="px-4 py-16 sm:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-emerald-100/30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-amber-100/30 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-amber-400 rounded-full animate-ping" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{animationDuration: '2.5s', animationDelay: '0.5s'}}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col">
          {/* Section Header with animated elements */}
          <div className="text-center pb-12 sm:pb-16 lg:pb-20 relative">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 relative inline-block">
              <span className="text-gray-900">One Platform. </span>
              <span className="text-emerald-600 relative">
                Multiple Solutions.
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-amber-300 to-emerald-500 transform origin-left animate-pulse"></span>
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Empower your institution with <span className="font-medium text-emerald-600">powerful tools</span> for learning, internships, and job success.
            </p>
            
            {/* Floating badges */}
            <div className="hidden lg:block">
              <div className="absolute top-0 left-1/4 transform -translate-x-1/2 animate-float" style={{animationDelay: '0.5s'}}>
                <div className="bg-white shadow-lg rounded-full px-3 py-1 flex items-center space-x-1">
                  <span className="text-amber-500 text-lg">⭐</span>
                  <span className="text-sm font-medium">Top Rated</span>
                </div>
              </div>
              <div className="absolute bottom-0 right-1/4 transform translate-x-1/2 animate-float" style={{animationDelay: '1s'}}>
                <div className="bg-white shadow-lg rounded-full px-3 py-1 flex items-center space-x-1">
                  <span className="text-emerald-500 text-lg">🚀</span>
                  <span className="text-sm font-medium">Fast Implementation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases Grid with enhanced animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {useCases.map((useCase) => (
              <div 
                key={useCase.id}
                className={`relative group transition-all duration-500 ease-out transform hover:-translate-y-2 ${useCase.fullWidth ? 'md:col-span-2' : ''}`}
                onMouseEnter={() => setActiveCard(useCase.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Card Glow Border Effect - Orange on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500 group-hover:blur-md ${activeCard === useCase.id ? 'animate-pulse' : ''}`} />
                
                {/* Floating particles on hover */}
                {activeCard === useCase.id && (
                  <>
                    <div className="absolute -top-4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-3 right-1/4 w-2 h-2 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
                  </>
                )}
                
                {/* Main Card with gradient background */}
                <div
                  className={`relative bg-white rounded-2xl overflow-hidden h-full border border-gray-200/80 shadow-md group-hover:shadow-2xl transition-all duration-500 z-10`}
                >
                  <div className={`flex ${useCase.fullWidth ? 'flex-col lg:flex-row' : 'flex-col'} h-full`}>
                    {/* Diagonal ribbon */}
                    <div className="absolute -right-12 top-6 transform rotate-45">
                      <div className={`w-40 py-1 text-center text-xs font-semibold text-white bg-gradient-to-r ${useCase.colorClass}`}>
                        Featured
                      </div>
                    </div>
                    
                    {/* Text Content with enhanced styling */}
                    <div className={`p-8 lg:p-10 ${useCase.fullWidth ? 'lg:w-1/2' : ''} relative overflow-hidden`}>
                      {/* Background pattern */}
                      <div className="absolute -right-8 -bottom-8 w-40 h-40 opacity-5">
                        <svg viewBox="0 0 100 100" fill="currentColor" className="text-gray-800">
                          <path d="M95,50c0,24.85-20.15,45-45,45S5,74.85,5,50S25.15,5,50,5S95,25.15,95,50z M50,15
                          c-19.33,0-35,15.67-35,35s15.67,35,35,35s35-15.67,35-35S69.33,15,50,15z"/>
                          <circle cx="50" cy="50" r="20"/>
                        </svg>
                      </div>
                    
                      <div className="flex items-center mb-8 relative">
                        {/* Animated Icon Container */}
                        <div className={`w-16 h-16 mr-5 rounded-2xl flex items-center justify-center ${useCase.iconBgClass} transition-all duration-500 group-hover:shadow-lg relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                          <div className="text-gray-800 transition-transform duration-500 group-hover:scale-110 relative z-10">
                            {getIconComponent(useCase.titleHighlight)}
                          </div>
                        </div>
                        
                        {/* Number indicator with pulsing border */}
                        <div className={`relative rounded-full w-12 h-12 flex justify-center items-center text-xl font-bold ${useCase.bgClass} text-gray-800`}>
                          <div className={`absolute inset-0 rounded-full border-2 ${useCase.borderColorClass} opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse`}></div>
                          <span className="relative z-10">{useCase.id}</span>
                        </div>
                      </div>
                      
                      <div className="max-w-[500px] relative">
                        {/* Animated title with underline effect */}
                        <h3 className="text-2xl lg:text-3xl font-bold leading-snug mb-4 text-gray-900">
                          {useCase.title.split(useCase.titleHighlight)[0]}
                          <span className={`relative text-transparent bg-clip-text bg-gradient-to-r ${useCase.colorClass}`}>
                            {useCase.titleHighlight}
                            <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r ${useCase.colorClass} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out`}></span>
                          </span>
                          {useCase.title.split(useCase.titleHighlight)[1]}
                        </h3>
                        
                        {/* Description with fade-in effect */}
                        <p className="text-base lg:text-lg text-gray-600 transform opacity-90 group-hover:opacity-100 transition-all duration-500">
                          {useCase.description}
                        </p>
                        
                        {/* Feature list with icons */}
                        <ul className="mt-6 space-y-2">
                          <li className="flex items-center text-sm text-gray-600">
                            <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                              <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            Cloud-based solution
                          </li>
                          <li className="flex items-center text-sm text-gray-600">
                            <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                              <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            24/7 customer support
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Image Content with animation effects */}
                    <div className={`flex-1 min-h-[300px] ${useCase.fullWidth ? 'lg:min-h-[450px]' : ''} ${useCase.bgClass} relative overflow-hidden group`}>
                      <div className="absolute inset-0 transform group-hover:scale-105 transition-transform duration-700 ease-out">
                        <img 
                          src={`/api/placeholder/800/500?text=${useCase.title.replace(/ /g, '+')}`}
                          alt={`Illustration for ${useCase.title}`}
                          className="w-full h-full object-cover"
                        />
                        {/* Overlay with gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                      </div>
                      
                      {/* Animated demo button */}
                      <div className="absolute bottom-6 right-6 transform translate-y-0 group-hover:translate-y-0 transition-all duration-500">
                        <Link to="/form">
                          <div className="relative overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-r ${useCase.colorClass} transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500`}></div>
                            <div className="px-5 py-2.5 bg-white rounded-lg shadow-lg flex items-center space-x-2 relative z-10 group-hover:text-white transition-colors duration-500">
                              <span className="font-medium">View Demo</span>
                              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </div>
                          </div>
                        </Link>
                      </div>
                      
                      {/* Statistics floating badge */}
                      <div className="absolute top-6 left-6">
                        <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-lg px-3 py-2 flex items-center space-x-2">
                          <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-sm font-medium">4.9/5 Rating</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA section */}
          <div className="mt-16 text-center">
            <div className="inline-block relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
              <Link to="/contact">
                <button className="relative bg-white text-gray-800 px-8 py-4 rounded-full font-medium text-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                  Schedule a Demo Today
                  <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;