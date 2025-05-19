import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LMS = () => {
  const [language, setLanguage] = useState('en');
  const [isHovering, setIsHovering] = useState(null);

  useEffect(() => {
    // Add animation class to body for global effects
    document.body.classList.add('bg-animate');
    return () => document.body.classList.remove('bg-animate');
  }, []);

  const translations = {
    en: {
      title: "Learning Management System",
      subtitle: "Comprehensive platform for education, internships, and career growth",
      features: "Our Features",
      card1: "Course Library",
      card2: "Internship Programs",
      card3: "Skill Assessment",
      card4: "Career Portal",
      explore: "Get Started",
      courses: "Popular Courses",
      internship: "Internship Opportunities",
      stats: "Our Impact",
      students: "Students Enrolled",
      coursesOffered: "Courses Offered",
      partners: "Industry Partners",
      testimonials: "Student Testimonials"
    },
    sv: {
      title: "Lärplattform",
      subtitle: "Omfattande plattform för utbildning, praktik och karriärutveckling",
      features: "Våra funktioner",
      card1: "Kursbibliotek",
      card2: "Praktikprogram",
      card3: "Kompetensbedömning",
      card4: "Karriärportal",
      explore: "Kom igång",
      courses: "Populära kurser",
      internship: "Praktikmöjligheter",
      stats: "Vår påverkan",
      students: "Registrerade studenter",
      coursesOffered: "Erbjudna kurser",
      partners: "Industripartners",
      testimonials: "Studentuttalanden"
    }
  };

  const t = translations[language];

  const popularCourses = [
    {
      title: language === 'en' ? "Web Development" : "Webbutveckling",
      instructor: language === 'en' ? "Sarah Johnson" : "Sarah Johnson",
      rating: 4.8,
      students: 1250,
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: language === 'en' ? "Data Science Fundamentals" : "Data Science Grunderna",
      instructor: language === 'en' ? "Michael Chen" : "Michael Chen",
      rating: 4.6,
      students: 980,
      color: "from-amber-500 to-orange-600"
    },
    {
      title: language === 'en' ? "Digital Marketing" : "Digital Marknadsföring",
      instructor: language === 'en' ? "Emma Wilson" : "Emma Wilson",
      rating: 4.7,
      students: 1120,
      color: "from-emerald-500 to-teal-600"
    }
  ];

  const internshipData = [
    {
      company: language === 'en' ? "Tech Solutions Inc." : "Tech Solutions AB",
      position: language === 'en' ? "Frontend Developer" : "Frontend-utvecklare",
      duration: language === 'en' ? "3-6 months" : "3-6 månader",
      color: "from-blue-500 to-cyan-600"
    },
    {
      company: language === 'en' ? "Data Analytics Co." : "Data Analytics AB",
      position: language === 'en' ? "Data Analyst" : "Dataanalytiker",
      duration: language === 'en' ? "4-8 months" : "4-8 månader",
      color: "from-violet-500 to-fuchsia-600"
    },
    {
      company: language === 'en' ? "Digital Creatives" : "Digitala Kreatörer",
      position: language === 'en' ? "UX Designer" : "UX-designer",
      duration: language === 'en' ? "2-4 months" : "2-4 månader",
      color: "from-rose-500 to-pink-600"
    }
  ];

  const featureCards = [
    {
      title: t.card1,
      description: language === 'en' 
        ? "Access hundreds of courses across various disciplines."
        : "Tillgång till hundratals kurser inom olika discipliner.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      ),
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: t.card2,
      description: language === 'en' 
        ? "Gain real-world experience with our partner companies."
        : "Få verklig erfarenhet med våra partnerföretag.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      color: "from-green-500 to-emerald-600"
    },
    {
      title: t.card3,
      description: language === 'en' 
        ? "Evaluate and improve your skills with our assessment tools."
        : "Utvärdera och förbättra dina färdigheter med våra bedömningsverktyg.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      color: "from-yellow-500 to-amber-600"
    },
    {
      title: t.card4,
      description: language === 'en' 
        ? "Connect with employers and find your dream job."
        : "Knyt kontakt med arbetsgivare och hitta ditt drömjobb.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
        </svg>
      ),
      color: "from-purple-500 to-fuchsia-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-200/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-200/10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-emerald-200/10 blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Language Toggle */}
      <div className="flex justify-end p-6">
        <motion.div 
          className="flex bg-white/80 backdrop-blur-sm rounded-full shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button 
            onClick={() => setLanguage('en')}
            className={`px-6 py-2 transition-all duration-300 ${language === 'en' ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            English
          </button>
          <button 
            onClick={() => setLanguage('sv')}
            className={`px-6 py-2 transition-all duration-300 ${language === 'sv' ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            Svenska
          </button>
        </motion.div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 md:py-28 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 mb-6">
            {t.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-700/90 mb-10 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
          <motion.button 
            className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300"></span>
            <span className="relative z-10 flex items-center justify-center gap-2">
              {t.explore}
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t.features}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureCards.map((card, index) => (
            <motion.div 
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setIsHovering(index)}
              onMouseLeave={() => setIsHovering(null)}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${card.color} rounded-2xl opacity-0 group-hover:opacity-70 blur-md transition-all duration-500 ${isHovering === index ? 'animate-pulse' : ''}`}></div>
              
              {/* Card */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden h-full border border-gray-100 shadow-lg group-hover:shadow-xl transition-all duration-300 z-10">
                <div className="p-8">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto bg-gradient-to-r ${card.color} shadow-md`}>
                    {React.cloneElement(card.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {card.description}
                  </p>
                  
                  {/* Animated button */}
                  <div className="mt-8">
                    <motion.div 
                      className={`relative overflow-hidden rounded-lg bg-gradient-to-r ${card.color} bg-opacity-10 border ${card.color.replace('to', 'to border')}-500/30 transition-all duration-300`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${card.color} transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500`}></div>
                      <div className="px-6 py-3 flex items-center justify-between relative z-10 group-hover:text-white transition-colors duration-300">
                        <span className="font-medium">
                          {language === 'en' ? 'Learn More' : 'Läs mer'}
                        </span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Animated dots background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-dots-white"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t.stats}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: "10,000+", label: t.students, color: "from-cyan-400 to-blue-500" },
              { value: "150+", label: t.coursesOffered, color: "from-emerald-400 to-green-500" },
              { value: "50+", label: t.partners, color: "from-purple-400 to-indigo-500" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xl text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Courses */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t.courses}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularCourses.map((course, index) => (
            <motion.div 
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${course.color} rounded-2xl opacity-0 group-hover:opacity-70 blur-md transition-all duration-500`}></div>
              
              {/* Course card */}
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden h-full border border-gray-100 group-hover:shadow-xl transition-all duration-300 z-10">
                {/* Course image with gradient overlay */}
                <div className={`relative h-48 bg-gradient-to-r ${course.color} flex items-center justify-center`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                  <svg className="w-16 h-16 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-3">{language === 'en' ? "Instructor" : "Instruktör"}: {course.instructor}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span className="ml-1">{course.rating}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">{course.students}+ {language === 'en' ? "students" : "studenter"}</span>
                    </div>
                  </div>
                  
                  <motion.button 
                    className={`mt-6 w-full bg-gradient-to-r ${course.color} text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {language === 'en' ? "Enroll Now" : "Registrera nu"}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Internship Section */}
      <div className="bg-gray-100 py-20 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-dots-gray-900"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t.internship}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {internshipData.map((internship, index) => (
              <motion.div 
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Glow effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${internship.color} rounded-2xl opacity-0 group-hover:opacity-70 blur-md transition-all duration-500`}></div>
                
                {/* Internship card */}
                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden h-full border border-gray-100 group-hover:shadow-xl transition-all duration-300 z-10">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-gradient-to-r ${internship.color} shadow-md`}>
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">{internship.company}</h3>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <span className="text-gray-600">
                          <span className="font-medium">{language === 'en' ? "Position" : "Position"}:</span> {internship.position}
                        </span>
                      </div>
                      
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="text-gray-600">
                          <span className="font-medium">{language === 'en' ? "Duration" : "Varaktighet"}:</span> {internship.duration}
                        </span>
                      </div>
                    </div>
                    
                    <motion.button 
                      className={`w-full bg-gradient-to-r ${internship.color} text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {language === 'en' ? "Apply Now" : "Ansök nu"}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t.testimonials}
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Alex Johnson",
              role: language === 'en' ? "Computer Science Student" : "Datavetenskapsstudent",
              quote: language === 'en' 
                ? "The internship I found through this platform was a game-changer for my career. The hands-on experience was invaluable."
                : "Praktiken jag hittade via denna plattform var en spelväxlare för min karriär. Den praktiska erfarenheten var ovärderlig.",
              color: "from-blue-500 to-indigo-600"
            },
            {
              name: "Sofia Andersson",
              role: language === 'en' ? "Business Administration" : "Företagsekonomi",
              quote: language === 'en' 
                ? "The courses are well-structured and the instructors are knowledgeable. I've significantly improved my skills."
                : "Kurserna är välstrukturerade och lärarna är kunniga. Jag har förbättrat mina färdigheter avsevärt.",
              color: "from-purple-500 to-fuchsia-600"
            }
          ].map((testimonial, index) => (
            <motion.div 
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${testimonial.color} rounded-2xl opacity-0 group-hover:opacity-70 blur-md transition-all duration-500`}></div>
              
              {/* Testimonial card */}
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden h-full border border-gray-100 group-hover:shadow-xl transition-all duration-300 z-10 p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-gradient-to-r ${testimonial.color} shadow-md`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <svg className="absolute -top-6 -left-6 w-16 h-16 text-gray-200/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path>
                  </svg>
                  <p className="text-gray-700 relative z-10 pl-8">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        
        .bg-dots-white {
          background-image: radial-gradient(circle, white 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .bg-dots-gray-900 {
          background-image: radial-gradient(circle, #111827 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .bg-animate {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default LMS;