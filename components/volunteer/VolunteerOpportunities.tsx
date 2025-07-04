import React from 'react';

const VolunteerOpportunities = () => (
  <section className="py-12 px-4 max-w-5xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold text-orange-700 mb-8 text-center">Volunteer Opportunities</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h3 className="font-semibold text-lg mb-2 text-green-700">Teaching & Mentoring</h3>
        <p className="text-gray-600 text-sm mb-2">Lead classes, tutor students, or mentor youth in academics and life skills.</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h3 className="font-semibold text-lg mb-2 text-green-700">Event Organization</h3>
        <p className="text-gray-600 text-sm mb-2">Help plan and run workshops, camps, and community events.</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h3 className="font-semibold text-lg mb-2 text-green-700">Creative & Media</h3>
        <p className="text-gray-600 text-sm mb-2">Support with photography, videography, design, or social media outreach.</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h3 className="font-semibold text-lg mb-2 text-green-700">Fundraising & Outreach</h3>
        <p className="text-gray-600 text-sm mb-2">Assist with fundraising campaigns and spreading awareness.</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h3 className="font-semibold text-lg mb-2 text-green-700">Administration</h3>
        <p className="text-gray-600 text-sm mb-2">Help with data entry, logistics, and day-to-day operations.</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <h3 className="font-semibold text-lg mb-2 text-green-700">Community Engagement</h3>
        <p className="text-gray-600 text-sm mb-2">Work directly with families and local leaders to build trust and participation.</p>
      </div>
    </div>
  </section>
);

export default VolunteerOpportunities; 