import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, description }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all"
    whileHover={{ scale: 1.05 }}
  >
    <h3 className="text-xl font-semibold mb-2 text-blue-700">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const LiaHub = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 to-blue-100 p-8">
      <div className="flex justify-end space-x-4 mb-6">
        <button className="bg-white px-4 py-2 rounded-lg shadow">English</button>
        <button className="bg-white px-4 py-2 rounded-lg shadow">Svenska</button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-blue-800">Welcome to LiaHub</h1>
        <p className="text-lg text-gray-700 mt-2">
          A unique learning space for students – stay tuned for exciting features and tools!
        </p>
        <p className="text-md text-gray-600 mt-1">
          Explore, connect, and grow with LiaHub – your modern education companion.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        <Card title="Interactive Modules" description="Engage with rich learning content designed to boost your understanding." />
        <Card title="Community Support" description="Join a network of peers and mentors always ready to help." />
        <Card title="Progress Tracking" description="Stay updated with your learning milestones and goals." />
      </div>
    </div>
  );
};

export default LiaHub;