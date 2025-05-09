import React, { useState } from 'react';
import { CalendarDays, Building2, User, Mail, Phone, GraduationCap, ArrowRight } from 'lucide-react';
import logo from '../../../assets/logoPraktikly.png';
const DemoBookingForm = () => {
  const [formData, setFormData] = useState({
    institutionName: '',
    institutionType: '',
    contactName: '',
    email: '',
    phone: '',
    role: '',
    studentCount: '',
    features: [],
    preferredDate: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        features: checked
          ? [...prevData.features, value]
          : prevData.features.filter((f) => f !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Here you can make API call to submit the data
  };

  return (
    <div className="max-w-4xl mx-auto p-8 md:p-10 bg-white rounded-xl shadow-lg border border-gray-100 my-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side - Branding and info */}
        <div className="md:w-1/3 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-8 text-white">
          <div className="mb-8">
            {/* Replace with your actual logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className=" text-blue-600 p-2 rounded-lg">
                 <img
                      src={logo}
                      alt="Praktikly Logo"
                      className="h-10 w-auto"
                    />
              </div>
           
            </div>
            <h2 className="text-3xl font-bold mb-4">Book a Demo</h2>
            <p className="text-blue-100">
              Experience how our platform can transform your institution's learning and placement processes.
            </p>
          </div>

          <div className="space-y-6 mt-12">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-2 rounded-full">
                <User size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Personalized Demo</h4>
                <p className="text-sm text-blue-100">Tailored to your institution's needs</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-2 rounded-full">
                <CalendarDays size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Flexible Scheduling</h4>
                <p className="text-sm text-blue-100">Choose a time that works for you</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white/20 p-2 rounded-full">
                <Building2 size={20} />
              </div>
              <div>
                <h4 className="font-semibold">Comprehensive Walkthrough</h4>
                <p className="text-sm text-blue-100">See all features in action</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="md:w-2/3">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Institution Name</label>
                <div className="relative">
                  <Building2 size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="institutionName"
                    value={formData.institutionName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Institution Type</label>
                <select
                  name="institutionType"
                  value={formData.institutionType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="School">School</option>
                  <option value="College">College</option>
                  <option value="University">University</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                <div className="relative">
                  <User size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <div className="relative">
                  <Phone size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select Role</option>
                  <option value="Principal">Principal</option>
                  <option value="Administrator">Administrator</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Placement Officer">Placement Officer</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Students</label>
                <input
                  type="number"
                  name="studentCount"
                  value={formData.studentCount}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                <div className="relative">
                  <CalendarDays size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Interested Features</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['LMS', 'Internship Placement', 'Job Placement', 'Microsoft 365 Integration'].map((feature) => (
                  <label key={feature} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
                    <input
                      type="checkbox"
                      name="features"
                      value={feature}
                      checked={formData.features.includes(feature)}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="text-gray-700">{feature}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tell us about your specific needs..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              Schedule Demo <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DemoBookingForm;