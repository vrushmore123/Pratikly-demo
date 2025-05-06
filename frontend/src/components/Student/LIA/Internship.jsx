import React from 'react';

// Example internship data
const internships = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    duration: "12 weeks",
    description: "Work on developing web applications using React and Node.js, collaborating with senior engineers to deliver high-quality software.",
    skills: ["JavaScript", "React", "Node.js", "Git", "Agile"],
    applyLink: "#", // Replace with actual application link
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "DataMasters",
    location: "Remote",
    duration: "8 weeks",
    description: "Analyze large datasets, create predictive models, and help build data pipelines using Python and machine learning tools.",
    skills: ["Python", "Machine Learning", "Pandas", "SQL"],
    applyLink: "#", // Replace with actual application link
  },
  {
    id: 3,
    title: "UX/UI Design Intern",
    company: "CreativeTech",
    location: "New York, NY",
    duration: "10 weeks",
    description: "Design user-centric UI and UX experiences, working closely with developers and product managers to create intuitive products.",
    skills: ["Figma", "Sketch", "Wireframing", "Prototyping", "User Research"],
    applyLink: "#", // Replace with actual application link
  },
];

const Internships = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-8">Available Internships</h2>
      <div className="space-y-6">
        {internships.map((internship) => (
          <div key={internship.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold">{internship.title}</h3>
                <p className="text-gray-500">{internship.company}</p>
              </div>
              <div className="text-sm text-gray-600">
                <span>{internship.location}</span> | <span>{internship.duration}</span>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{internship.description}</p>

            <div className="flex flex-wrap space-x-2 mb-4">
              {internship.skills.map((skill, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 text-sm py-1 px-3 rounded-full">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <a
                href={internship.applyLink}
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
              <div className="text-sm text-gray-500">{internship.duration} Internship</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;
