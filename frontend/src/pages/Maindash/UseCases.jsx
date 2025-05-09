import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// Using reliable placeholder images from Pexels
const PLACEHOLDER_IMAGES = {
  learning: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg',
  internship: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
  job: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg',
  microsoft: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg'
};

const useCases = [
  {
    id: 1,
    title: "Streamlined Learning Management",
    titleHighlight: "Learning",
    description: "Manage courses, track assignments, grade submissions, and communicate seamlessly between students and teachers.",
    image: PLACEHOLDER_IMAGES.learning,
    fullWidth: true,
    icon: "🎓",
    colorClass: "bg-emerald-100"
  },
  {
    id: 2,
    title: "Internship Placement System",
    titleHighlight: "Internship",
    description: "Automated workflows that connect students to verified companies with follow-ups and evaluations.",
    image: PLACEHOLDER_IMAGES.internship,
    icon: "🤝",
    colorClass: "bg-blue-100"
  },
  {
    id: 3,
    title: "Job Preparation & Placement",
    titleHighlight: "Job",
    description: "In-built job board, CV support, and tracking of student employment with integration into market platforms.",
    image: PLACEHOLDER_IMAGES.job,
    icon: "💼",
    colorClass: "bg-purple-100"
  },
  {
    id: 4,
    title: "Microsoft 365 Integration",
    titleHighlight: "Microsoft",
    description: "Connect Teams, Outlook, SharePoint to streamline online learning, planning, and collaboration.",
    image: PLACEHOLDER_IMAGES.microsoft,
    icon: "🔗",
    colorClass: "bg-orange-100",
    fullWidth: true
  }
];

const UseCases = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="px-4 py-16 sm:px-8 lg:px-12 xl:px-16 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-emerald-100/30 blur-3xl"></div>
        <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-amber-100/30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col"
        >
          {/* Section Header */}
          <motion.div 
            variants={titleVariants}
            className="text-center pb-12 sm:pb-16 lg:pb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gray-900">One Platform. </span>
              <span className="text-emerald-600">Multiple Solutions.</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Empower your institution with <span className="font-medium text-emerald-600">powerful tools</span> for learning, internships, and job success.
            </p>
          </motion.div>

          {/* Use Cases Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          >
            {useCases.map((useCase) => (
              <motion.div 
                key={useCase.id}
                variants={itemVariants}
                whileHover="hover"
                className={`relative group ${useCase.fullWidth ? 'md:col-span-2' : ''}`}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-emerald-400/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500 -z-10" />
                
                {/* Main Card */}
                <motion.div
                  variants={cardHoverVariants}
                  className={`relative bg-white rounded-2xl overflow-hidden h-full border border-gray-200/80 shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:border-emerald-200/50`}
                >
                  <div className={`flex ${useCase.fullWidth ? 'flex-col lg:flex-row' : 'flex-col'} h-full`}>
                    {/* Text Content */}
                    <div className={`p-8 lg:p-10 ${useCase.fullWidth ? 'lg:w-1/2' : ''}`}>
                      <div className="flex items-center mb-6">
                        <div className="text-3xl mr-4">{useCase.icon}</div>
                        <div className="border-2 border-gray-200 rounded-full w-14 h-14 flex justify-center items-center text-xl font-bold text-gray-800">
                          {useCase.id}
                        </div>
                      </div>
                      <div className="max-w-[500px]">
                        <h3 className="text-2xl lg:text-3xl font-bold leading-snug mb-4 text-gray-900">
                          {useCase.title.split(useCase.titleHighlight)[0]}
                          <span className="text-emerald-600">{useCase.titleHighlight}</span>
                          {useCase.title.split(useCase.titleHighlight)[1]}
                        </h3>
                        <p className="text-base lg:text-lg text-gray-600">{useCase.description}</p>
                      </div>
                    </div>

                    {/* Image Content with Fallback */}
                    <div className={`flex-1 min-h-[300px] ${useCase.fullWidth ? 'lg:min-h-[450px]' : ''} ${useCase.colorClass} relative`}>
                      <motion.div
                        className="absolute inset-0 w-full h-full"
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <img 
                          src={useCase.image} 
                          alt={`Illustration for ${useCase.title}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://via.placeholder.com/800x500?text=${useCase.title.replace(/ /g, '+')}`;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </motion.div>
                      <div className="absolute bottom-6 right-6">
  <Link to="/form">
    <motion.div 
      whileHover={{ scale: 1.1 }}
      className="inline-block px-4 py-2 bg-white rounded-full shadow-md text-sm font-medium"
    >
      View Demo →
    </motion.div>
  </Link>
</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;