import React from 'react';

// Example course data
const courses = [
  {
    id: 1,
    title: "Introduction to Programming",
    description: "Learn the fundamentals of programming using JavaScript.",
    instructor: "John Doe",
    duration: "4 weeks",
    image: "https://via.placeholder.com/150", // Replace with actual course image
  },
  {
    id: 2,
    title: "Advanced Web Development",
    description: "Dive deeper into web development with React and Node.js.",
    instructor: "Jane Smith",
    duration: "6 weeks",
    image: "https://via.placeholder.com/150", // Replace with actual course image
  },
  {
    id: 3,
    title: "Data Science with Python",
    description: "Master data analysis and visualization using Python libraries.",
    instructor: "Alice Johnson",
    duration: "8 weeks",
    image: "https://via.placeholder.com/150", // Replace with actual course image
  },
  {
    id: 4,
    title: "Machine Learning Basics",
    description: "Get started with machine learning and build your first model.",
    instructor: "Bob Brown",
    duration: "6 weeks",
    image: "https://via.placeholder.com/150", // Replace with actual course image
  },
];

const Courses = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-8">Available Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => (
          <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{course.description}</p>
              <div className="mt-4 flex justify-between text-sm text-gray-600">
                <span>Instructor: {course.instructor}</span>
                <span>Duration: {course.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
