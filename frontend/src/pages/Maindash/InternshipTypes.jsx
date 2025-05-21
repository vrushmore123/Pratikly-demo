import React from "react"
import { useContext, useState ,useEffect } from "react"
import { motion } from "framer-motion"
import { LanguageContext } from "../../Context/LanguageContext"
import { useTheme } from "../../Context/ThemeContext"
import { 
  GraduationCap, 
  Briefcase, 
  School, 
  Users, 
  SunIcon,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Info,
  Search
} from "lucide-react"

const InternshipTypes = () => {
  const { language } = useContext(LanguageContext)
  const { darkMode } = useTheme()
  const [expandedIndex, setExpandedIndex] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")
  
  const title =
    language === "sv" ? "Vi Stödjer Alla Typer av Praktik i Sverige" : "We Support All Types of Internships in Sweden"

  const description =
    language === "sv"
      ? "Även om vår plattform är särskilt utvecklad för LIA inom YH-utbildningar, stödjer vi även andra former av arbetsplatsförlagt lärande."
      : "While our platform is tailored for LIA internships in YH programs, we also support other types of workplace-based learning."

  const data =
    language === "sv"
      ? [
          {
            level: "Gymnasieskola (Yrkesprogram)",
            term: "APL (Arbetsplatsförlagt lärande)",
            icon: <School />,
            description: "Praktisk arbetslivserfarenhet för gymnasieelever inom yrkesprogram.",
            extendedInfo: "APL är en viktig del av utbildningen inom yrkesprogram på gymnasienivå. Eleverna får praktisk erfarenhet inom sitt valda yrkesområde under totalt minst 15 veckor.",
            category: "youth",
            color: "blue"
          },
          {
            level: "Anpassad gymnasieskola",
            term: "APL (anpassad gymnasieskola)",
            icon: <Users />,
            description: "Specialanpassad arbetsplatsförlagt lärande för elever med särskilda behov.",
            extendedInfo: "Anpassad APL erbjuder elever med särskilda behov möjlighet att få arbetsplatsförlagt lärande med individuellt anpassat stöd och handledning.",
            category: "special",
            color: "purple"
          },
          {
            level: "Vuxenutbildning",
            term: "Praktik / Yrkespraktik",
            icon: <Briefcase />,
            description: "Arbetslivserfarenhet för vuxenstuderande inom olika yrkesområden.",
            extendedInfo: "Praktik inom vuxenutbildning ger vuxenstuderande möjlighet att tillämpa teoretiska kunskaper i arbetslivet och skapa viktiga kontakter för framtida anställning.",
            category: "adult",
            color: "green"
          },
          {
            level: "Universitet",
            term: "VFU / Praktik / Examensarbete",
            icon: <GraduationCap />,
            description: "Verksamhetsförlagd utbildning och praktik för högskolestudenter.",
            extendedInfo: "VFU och praktik inom högre utbildning är avgörande för att studenter ska kunna förbereda sig för arbetslivet. Det omfattar allt från kortare praktikperioder till längre verksamhetsförlagda utbildningsmoment inom program som lärarutbildning, socionomprogram och vårdutbildningar.",
            category: "higher",
            color: "amber"
          },
          {
            level: "Informell utbildning / Sommarinitiativ",
            term: "Skuggning / Sommarjobb",
            icon: <SunIcon />,
            description: "Kortare praktiska erfarenheter och sommarjobb för ungdomar.",
            extendedInfo: "Informella praktikformer som jobbskuggning och sommarjobb ger ungdomar en första inblick i arbetslivet och möjlighet att utforska olika karriärvägar. Dessa erfarenheter är ofta första steget mot framtida yrkesval.",
            category: "informal",
            color: "pink"
          },
        ]
      : [
          {
            level: "Upper Secondary School (Vocational)",
            term: "Apprenticeship / Workplace Learning",
            icon: <School />,
            description: "Practical workplace experience for vocational high school students.",
            extendedInfo: "Workplace learning is a vital component of vocational programs at the upper secondary level. Students gain practical experience in their chosen professional field for a total of at least 15 weeks.",
            category: "youth",
            color: "blue"
          },
          {
            level: "Adapted Upper Secondary Programs",
            term: "Workplace Learning (Adapted)",
            icon: <Users />,
            description: "Specially adapted workplace learning for students with special needs.",
            extendedInfo: "Adapted workplace learning offers students with special needs the opportunity to gain work experience with individually tailored support and guidance.",
            category: "special",
            color: "purple"
          },
          {
            level: "Adult Education",
            term: "Vocational Internship",
            icon: <Briefcase />,
            description: "Work experience for adult learners across various professional fields.",
            extendedInfo: "Internships in adult education give adult learners the opportunity to apply theoretical knowledge in real work settings and create important connections for future employment.",
            category: "adult",
            color: "green"
          },
          {
            level: "Universities",
            term: "Clinical / Academic Internships",
            icon: <GraduationCap />,
            description: "Field placements and internships for higher education students.",
            extendedInfo: "Field placements and internships in higher education are crucial for preparing students for working life. This includes everything from shorter internship periods to longer workplace-based educational modules in programs such as teacher education, social work programs, and healthcare education.",
            category: "higher",
            color: "amber"
          },
          {
            level: "Informal Education / Summer Initiatives",
            term: "Job Shadowing / Summer Jobs",
            icon: <SunIcon />,
            description: "Short-term practical experiences and summer jobs for youth.",
            extendedInfo: "Informal internship forms such as job shadowing and summer jobs give young people their first glimpse into working life and an opportunity to explore different career paths. These experiences are often the first step toward future career choices.",
            category: "informal",
            color: "pink"
          },
        ]

  const getColorClass = (color, isDark) => {
    const colorMap = {
      blue: {
        bg: isDark ? "bg-blue-900/30" : "bg-blue-100",
        text: isDark ? "text-blue-300" : "text-blue-600",
        border: isDark ? "border-blue-500" : "border-blue-400",
        gradient: isDark ? "from-blue-900/50 to-blue-800/20" : "from-blue-100 to-blue-50",
        hover: isDark ? "hover:bg-blue-900/50" : "hover:bg-blue-50",
        button: isDark ? "bg-blue-800 hover:bg-blue-700" : "bg-blue-600 hover:bg-blue-500",
        buttonText: "text-white",
        accentBorder: isDark ? "border-l-blue-500" : "border-l-blue-400"
      },
      purple: {
        bg: isDark ? "bg-purple-900/30" : "bg-purple-100",
        text: isDark ? "text-purple-300" : "text-purple-600",
        border: isDark ? "border-purple-500" : "border-purple-400",
        gradient: isDark ? "from-purple-900/50 to-purple-800/20" : "from-purple-100 to-purple-50",
        hover: isDark ? "hover:bg-purple-900/50" : "hover:bg-purple-50",
        button: isDark ? "bg-purple-800 hover:bg-purple-700" : "bg-purple-600 hover:bg-purple-500",
        buttonText: "text-white",
        accentBorder: isDark ? "border-l-purple-500" : "border-l-purple-400"
      },
      green: {
        bg: isDark ? "bg-emerald-900/30" : "bg-emerald-100",
        text: isDark ? "text-emerald-300" : "text-emerald-600",
        border: isDark ? "border-emerald-500" : "border-emerald-400",
        gradient: isDark ? "from-emerald-900/50 to-emerald-800/20" : "from-emerald-100 to-emerald-50",
        hover: isDark ? "hover:bg-emerald-900/50" : "hover:bg-emerald-50",
        button: isDark ? "bg-emerald-800 hover:bg-emerald-700" : "bg-emerald-600 hover:bg-emerald-500",
        buttonText: "text-white",
        accentBorder: isDark ? "border-l-emerald-500" : "border-l-emerald-400"
      },
      amber: {
        bg: isDark ? "bg-amber-900/30" : "bg-amber-100",
        text: isDark ? "text-amber-300" : "text-amber-600",
        border: isDark ? "border-amber-500" : "border-amber-400",
        gradient: isDark ? "from-amber-900/50 to-amber-800/20" : "from-amber-100 to-amber-50",
        hover: isDark ? "hover:bg-amber-900/50" : "hover:bg-amber-50",
        button: isDark ? "bg-amber-800 hover:bg-amber-700" : "bg-amber-600 hover:bg-amber-500",
        buttonText: "text-white",
        accentBorder: isDark ? "border-l-amber-500" : "border-l-amber-400"
      },
      pink: {
        bg: isDark ? "bg-pink-900/30" : "bg-pink-100",
        text: isDark ? "text-pink-300" : "text-pink-600",
        border: isDark ? "border-pink-500" : "border-pink-400",
        gradient: isDark ? "from-pink-900/50 to-pink-800/20" : "from-pink-100 to-pink-50",
        hover: isDark ? "hover:bg-pink-900/50" : "hover:bg-pink-50",
        button: isDark ? "bg-pink-800 hover:bg-pink-700" : "bg-pink-600 hover:bg-pink-500",
        buttonText: "text-white",
        accentBorder: isDark ? "border-l-pink-500" : "border-l-pink-400"
      }
    }
    
    return colorMap[color] || colorMap.blue
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        duration: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  }

  const filters = [
    { id: "all", label: language === "sv" ? "Alla" : "All" },
    { id: "youth", label: language === "sv" ? "Ungdomar" : "Youth" },
    { id: "special", label: language === "sv" ? "Särskild" : "Special" },
    { id: "adult", label: language === "sv" ? "Vuxen" : "Adult" },
    { id: "higher", label: language === "sv" ? "Högre" : "Higher" },
    { id: "informal", label: language === "sv" ? "Informell" : "Informal" }
  ]

  const filteredData = data.filter(item => {
    const matchesSearch = item.level.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = activeFilter === "all" || item.category === activeFilter
    
    return matchesSearch && matchesFilter
  })

  const handleToggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const SearchBar = () => (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="relative max-w-md mx-auto mb-8"
    >
      <div className="relative">
        <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={language === "sv" ? "Sök praktiktyper..." : "Search internship types..."}
          className={`w-full py-3 pl-10 pr-4 rounded-full border ${
            darkMode 
              ? "bg-gray-800 border-gray-700 text-gray-200 placeholder-gray-400 focus:border-blue-500" 
              : "bg-white border-gray-300 text-gray-700 placeholder-gray-500 focus:border-blue-400"
          } focus:outline-none focus:ring-2 ${
            darkMode ? "focus:ring-blue-500/30" : "focus:ring-blue-400/30"
          } transition-colors`}
        />
        {searchTerm && (
          <button 
            onClick={() => setSearchTerm("")}
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full ${
              darkMode ? "bg-gray-700 text-gray-300 hover:bg-gray-600" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            <span className="sr-only">{language === "sv" ? "Rensa sökning" : "Clear search"}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </motion.div>
  )

  const FilterTabs = () => (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="flex flex-wrap justify-center gap-2 mb-8"
    >
      {filters.map(filter => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeFilter === filter.id
              ? darkMode 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" 
                : "bg-blue-500 text-white shadow-md shadow-blue-400/20"
              : darkMode
                ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </motion.div>
  )

  const ListView = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {filteredData.length > 0 ? (
        filteredData.map((item, index) => {
          const colorClasses = getColorClass(item.color, darkMode)
          const isExpanded = expandedIndex === index
          
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`rounded-lg overflow-hidden transition-all duration-300 shadow-md ${colorClasses.accentBorder} border-l-4 ${
                darkMode 
                  ? `bg-gray-800/80` 
                  : `bg-white`
              } ${isExpanded ? 'shadow-lg' : ''} ${colorClasses.hover}`}
            >
              <div 
                className={`p-5 cursor-pointer transition-colors ${isExpanded ? colorClasses.bg : ''}`}
                onClick={() => handleToggleExpand(index)}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${colorClasses.bg} ${colorClasses.text} flex-shrink-0`}>
                    {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h3 className={`text-lg font-bold ${colorClasses.text} flex items-center gap-2`}>
                        {item.level}
                        <Info className="w-4 h-4 opacity-70" />
                      </h3>
                      
                      <p className={`text-sm font-medium mt-1 sm:mt-0 ${darkMode ? "text-gray-300" : "text-gray-500"}`}>
                        {item.term}
                      </p>
                    </div>
                    
                    <p className={`mt-2 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex-shrink-0 ml-2">
                    {isExpanded ? (
                      <ChevronUp className={`w-5 h-5 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
                    ) : (
                      <ChevronDown className={`w-5 h-5 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
                    )}
                  </div>
                </div>
              </div>
              
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`px-5 pb-5 pt-3 border-t ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <div className={`rounded-lg p-4 ${
                    darkMode ? "bg-gray-850" : "bg-gray-50"
                  }`}>
                    <h4 className={`font-medium mb-2 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                      {language === "sv" ? "Mer information" : "More information"}
                    </h4>
                    <p className={`text-sm mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                      {item.extendedInfo}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )
        })
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-center py-12 ${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          <div className="mx-auto w-16 h-16 mb-4 opacity-30">
            <Search className="w-full h-full" />
          </div>
          <h3 className="text-xl font-medium mb-2">
            {language === "sv" ? "Inga resultat hittades" : "No results found"}
          </h3>
          <p>
            {language === "sv" 
              ? "Försök med en annan sökterm eller filter" 
              : "Try a different search term or filter"}
          </p>
        </motion.div>
      )}

      {filteredData.length > 0 && filteredData.length < data.length && (
        <motion.div 
          variants={fadeInVariants} 
          className={`text-center mt-6 text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          {language === "sv" 
            ? `Visar ${filteredData.length} av ${data.length} praktiktyper` 
            : `Showing ${filteredData.length} of ${data.length} internship types`}
        </motion.div>
      )}
    </motion.div>
  )






const FooterNote = () => {
  const [language, setLanguage] = useState("en");
  const { darkMode } = useTheme(); // Add this line to get the theme state
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mt-12 text-center max-w-3xl mx-auto"
    >
      <motion.div
        className={`relative p-8 rounded-3xl overflow-hidden ${
          darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
        }`}
        style={{
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          boxShadow: darkMode 
            ? "0 0 40px -10px rgba(138, 43, 226, 0.5), 0 0 20px -5px rgba(123, 31, 162, 0.4) inset"
            : "0 0 40px -10px rgba(138, 43, 226, 0.2), 0 0 20px -5px rgba(123, 31, 162, 0.1) inset"
        }}
      >
        {/* Dark glowy background effect */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className={`w-full h-full ${darkMode ? "opacity-40" : "opacity-20"}`}
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 20,
              ease: "easeInOut" 
            }}
            style={{
              background: darkMode
                ? "radial-gradient(circle at 30% 20%, rgba(138, 43, 226, 0.8) 0%, transparent 60%), radial-gradient(circle at 70% 80%, rgba(123, 31, 162, 0.7) 0%, transparent 65%)"
                : "radial-gradient(circle at 30% 20%, rgba(138, 43, 226, 0.3) 0%, transparent 60%), radial-gradient(circle at 70% 80%, rgba(123, 31, 162, 0.2) 0%, transparent 65%)"
            }}
          />
        </div>
        
        {/* Animated pulsing border */}
        <motion.div 
          className="absolute inset-0 rounded-3xl"
          animate={{
            boxShadow: darkMode
              ? [
                  "0 0 0 1px rgba(138, 43, 226, 0.2) inset", 
                  "0 0 0 1px rgba(138, 43, 226, 0.6) inset", 
                  "0 0 0 1px rgba(138, 43, 226, 0.2) inset"
                ]
              : [
                  "0 0 0 1px rgba(138, 43, 226, 0.1) inset", 
                  "0 0 0 1px rgba(138, 43, 226, 0.3) inset", 
                  "0 0 0 1px rgba(138, 43, 226, 0.1) inset"
                ]
          }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
        
        {/* Main content area */}
        <div className="relative z-10">
          {/* Icon with floating animation */}
          <motion.div 
            className={`inline-flex items-center justify-center mb-4 p-3 rounded-full ${
              darkMode 
                ? "bg-gradient-to-tr from-purple-600 to-indigo-500"
                : "bg-gradient-to-tr from-purple-400 to-indigo-400"
            }`}
            animate={{ 
              y: [0, -6, 0],
              boxShadow: darkMode
                ? [
                    "0 0 0 0 rgba(138, 43, 226, 0)",
                    "0 0 25px 5px rgba(138, 43, 226, 0.6)",
                    "0 0 0 0 rgba(138, 43, 226, 0)"
                  ]
                : [
                    "0 0 0 0 rgba(138, 43, 226, 0)",
                    "0 0 25px 5px rgba(138, 43, 226, 0.3)",
                    "0 0 0 0 rgba(138, 43, 226, 0)"
                  ]
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <span className="text-2xl">📘</span>
          </motion.div>
          
          {/* Text with shine effect */}
          <motion.p 
            className={`text-lg font-medium mx-auto max-w-lg relative ${
              darkMode ? "text-purple-50" : "text-gray-700"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
           {language === "sv" 
          ? "Vår flexibla plattform säkerställer att skolor på alla nivåer kan hantera praktikperioder på ett strukturerat, GDPR-säkert och användarvänligt sätt." 
          : "Our flexible platform ensures that schools at all levels can manage internship periods in a structured, GDPR-compliant, and user-friendly way."}
         {/* Shine effect overlay */}
        <motion.span 
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-purple-100 to-transparent opacity-0"
          animate={{
            opacity: [0, 0.2, 0],
            left: ["-100%", "100%", "100%"]
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 5,
            duration: 1.5,
            ease: "easeInOut"
          }}
        />
      </motion.p>
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 rounded-full ${
                  darkMode ? "bg-purple-400" : "bg-purple-300"
                }`}
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${15 + (i % 4) * 20}%`,
                  opacity: darkMode ? 0.4 : 0.3,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: darkMode 
                    ? [0.2, 0.7, 0.2]
                    : [0.1, 0.4, 0.1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4 + i * 0.5,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
          
          {/* Additional glowing orbs with adjusted opacity for light mode */}
          <motion.div
            className={`absolute w-32 h-32 rounded-full blur-3xl ${
              darkMode ? "bg-purple-700 opacity-20" : "bg-purple-400 opacity-10"
            }`}
            style={{ top: "20%", right: "10%" }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: darkMode ? [0.1, 0.3, 0.1] : [0.05, 0.15, 0.05],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className={`absolute w-24 h-24 rounded-full blur-3xl ${
              darkMode ? "bg-indigo-600 opacity-20" : "bg-indigo-400 opacity-10"
            }`}
            style={{ bottom: "20%", left: "15%" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: darkMode ? [0.1, 0.25, 0.1] : [0.05, 0.12, 0.05],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};



  return (
    <section
      className={`py-20 px-4 transition-colors duration-500 font-["Helvetica_Neue",sans-serif] ${
        darkMode 
          ? "bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" 
          : "bg-gradient-to-b from-blue-50 via-white to-blue-50"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 tracking-tight ${darkMode ? "text-white" : "text-gray-900"}`}>
              {title}
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={`mt-4 text-lg max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {description}
          </motion.p>
        </motion.div>

        <SearchBar />
        <FilterTabs />
        <ListView />
        <FooterNote />
      </div>
    </section>
  )
}

export default InternshipTypes;