import React, { useEffect } from 'react';
import { Rocket, Briefcase, Users, ArrowRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeatureCard = ({ icon, title, description, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: delay * 0.2 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      whileHover={{ y: -10 }}
      className="flex flex-col items-center p-8 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all duration-300 group"
    >
      <div className="p-4 mb-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl group-hover:rotate-6 transition-transform duration-500">
        {React.cloneElement(icon, { size: 40, className: 'text-white' })}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-emerald-600 font-medium">
        Learn more <ArrowRight size={18} className="ml-2" />
      </div>
    </motion.div>
  );
};

const CTA = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const features = [
    {
      icon: <Rocket />,
      title: "Streamlined Learning",
      description: "Manage courses, schedules, and assignments effortlessly."
    },
    {
      icon: <Briefcase />,
      title: "Internship & Job Placement",
      description: "Connect students with opportunities and employers directly."
    },
    {
      icon: <Users />,
      title: "Collaborative Platform",
      description: "Empower teachers and students with seamless communication."
    }
  ];

  return (
    <section className="relative px-6 py-20 md:py-32 overflow-hidden bg-white text-gray-900">
      {/* Curved top divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-50 to-white -translate-y-[99px]"></div>
      
      {/* Floating abstract shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-emerald-100/30 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-emerald-100/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
              Future of Education
            </span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold leading-tight mb-8 max-w-4xl"
          >
            Ready to <span className="text-emerald-600">Transform</span> Your Institution?
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 max-w-3xl text-gray-600"
          >
            Elevate your school or university with our integrated LMS, Internship Placement, and Career Services platform.
          </motion.p>

          <motion.div variants={itemVariants} className="relative">
            <motion.a
              href="#join"
              whileHover={{ 
                y: -4,
                boxShadow: "0 10px 25px -5px rgba(5, 150, 105, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-block px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold rounded-xl text-lg md:text-xl overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                GET STARTED TODAY
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-emerald-800 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
              />
              <span className="absolute inset-0 border-2 border-emerald-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
            
            {/* Animated pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-emerald-400/50 -z-10"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
          >
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Curved bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-white translate-y-[99px]"></div>
      
      {/* Floating dots pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-emerald-100"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 30}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              transition: {
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CTA;
