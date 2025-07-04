import React from 'react';

const InternshipRoles = () => (
  <section className="py-12 px-4 max-w-5xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-8 text-center">Internship Areas</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h3 className="font-semibold text-lg mb-2 text-green-700">Education & Teaching</h3>
        <p className="text-gray-600 text-sm mb-2">Assist in classrooms, develop learning materials, or tutor students.</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h3 className="font-semibold text-lg mb-2 text-green-700">Research & Development</h3>
        <p className="text-gray-600 text-sm mb-2">Conduct field research, analyze data, and support new initiatives.</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h3 className="font-semibold text-lg mb-2 text-green-700">Media & Communications</h3>
        <p className="text-gray-600 text-sm mb-2">Create content, manage social media, or document success stories.</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h3 className="font-semibold text-lg mb-2 text-green-700">Event Management</h3>
        <p className="text-gray-600 text-sm mb-2">Help organize workshops, seminars, and community events.</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h3 className="font-semibold text-lg mb-2 text-green-700">Technology & IT</h3>
        <p className="text-gray-600 text-sm mb-2">Support digital initiatives, website, or data management.</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h3 className="font-semibold text-lg mb-2 text-green-700">Community Outreach</h3>
        <p className="text-gray-600 text-sm mb-2">Engage with local families and leaders to build participation.</p>
      </div>
    </div>
  </section>
);

export default InternshipRoles; 