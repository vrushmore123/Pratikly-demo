import { useState } from 'react';

const LMS = () => {
  const [language, setLanguage] = useState('en');

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
      students: 1250
    },
    {
      title: language === 'en' ? "Data Science Fundamentals" : "Data Science Grunderna",
      instructor: language === 'en' ? "Michael Chen" : "Michael Chen",
      rating: 4.6,
      students: 980
    },
    {
      title: language === 'en' ? "Digital Marketing" : "Digital Marknadsföring",
      instructor: language === 'en' ? "Emma Wilson" : "Emma Wilson",
      rating: 4.7,
      students: 1120
    }
  ];

  const internshipData = [
    {
      company: language === 'en' ? "Tech Solutions Inc." : "Tech Solutions AB",
      position: language === 'en' ? "Frontend Developer" : "Frontend-utvecklare",
      duration: language === 'en' ? "3-6 months" : "3-6 månader"
    },
    {
      company: language === 'en' ? "Data Analytics Co." : "Data Analytics AB",
      position: language === 'en' ? "Data Analyst" : "Dataanalytiker",
      duration: language === 'en' ? "4-8 months" : "4-8 månader"
    },
    {
      company: language === 'en' ? "Digital Creatives" : "Digitala Kreatörer",
      position: language === 'en' ? "UX Designer" : "UX-designer",
      duration: language === 'en' ? "2-4 months" : "2-4 månader"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Language Toggle */}
      <div className="flex justify-end p-4">
        <button 
          onClick={() => setLanguage('en')}
          className={`px-4 py-2 rounded-l-lg ${language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          English
        </button>
        <button 
          onClick={() => setLanguage('sv')}
          className={`px-4 py-2 rounded-r-lg ${language === 'sv' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Svenska
        </button>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold text-blue-900 mb-4">{t.title}</h1>
        <p className="text-xl text-blue-700 mb-8 max-w-2xl mx-auto">{t.subtitle}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
          {t.explore}
        </button>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">{t.features}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">{t.card1}</h3>
              <p className="text-gray-600 text-center">
                {language === 'en' 
                  ? "Access hundreds of courses across various disciplines."
                  : "Tillgång till hundratals kurser inom olika discipliner."}
              </p>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">{t.card2}</h3>
              <p className="text-gray-600 text-center">
                {language === 'en' 
                  ? "Gain real-world experience with our partner companies."
                  : "Få verklig erfarenhet med våra partnerföretag."}
              </p>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">{t.card3}</h3>
              <p className="text-gray-600 text-center">
                {language === 'en' 
                  ? "Evaluate and improve your skills with our assessment tools."
                  : "Utvärdera och förbättra dina färdigheter med våra bedömningsverktyg."}
              </p>
            </div>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">{t.card4}</h3>
              <p className="text-gray-600 text-center">
                {language === 'en' 
                  ? "Connect with employers and find your dream job."
                  : "Knyt kontakt med arbetsgivare och hitta ditt drömjobb."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{t.stats}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10,000+</div>
              <div className="text-xl">{t.students}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <div className="text-xl">{t.coursesOffered}</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-xl">{t.partners}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Courses */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">{t.courses}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-48 bg-blue-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Internship Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">{t.internship}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {internshipData.map((internship, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{internship.company}</h3>
                  </div>
                  <p className="text-gray-600 mb-2"><span className="font-medium">{language === 'en' ? "Position" : "Position"}:</span> {internship.position}</p>
                  <p className="text-gray-600"><span className="font-medium">{language === 'en' ? "Duration" : "Varaktighet"}:</span> {internship.duration}</p>
                  <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                    {language === 'en' ? "Apply Now" : "Ansök nu"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">{t.testimonials}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Alex Johnson</h4>
                <p className="text-gray-600 text-sm">{language === 'en' ? "Computer Science Student" : "Datavetenskapsstudent"}</p>
              </div>
            </div>
            <p className="text-gray-700">
              {language === 'en' 
                ? "The internship I found through this platform was a game-changer for my career. The hands-on experience was invaluable."
                : "Praktiken jag hittade via denna plattform var en spelväxlare för min karriär. Den praktiska erfarenheten var ovärderlig."}
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Sofia Andersson</h4>
                <p className="text-gray-600 text-sm">{language === 'en' ? "Business Administration" : "Företagsekonomi"}</p>
              </div>
            </div>
            <p className="text-gray-700">
              {language === 'en' 
                ? "The courses are well-structured and the instructors are knowledgeable. I've significantly improved my skills."
                : "Kurserna är välstrukturerade och lärarna är kunniga. Jag har förbättrat mina färdigheter avsevärt."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LMS;