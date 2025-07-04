import React from 'react';

const InternshipApplicationForm = () => (
  <section id="apply" className="py-12 px-4 max-w-2xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6 text-center">Apply for Internship</h2>
    <form className="bg-white rounded-xl shadow p-8 space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </div>
      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Area of Interest</label>
        <select id="interest" name="interest" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option value="">Select an area</option>
          <option value="education">Education & Teaching</option>
          <option value="research">Research & Development</option>
          <option value="media">Media & Communications</option>
          <option value="event">Event Management</option>
          <option value="technology">Technology & IT</option>
          <option value="community">Community Outreach</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to intern with us?</label>
        <textarea id="message" name="message" rows={4} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
      </div>
      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors">Submit</button>
    </form>
  </section>
);

export default InternshipApplicationForm; 