import React from 'react';

const VolunteerImpact = () => (
  <section className="py-12 px-4 max-w-4xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">Why Volunteer With Us?</h2>
    <p className="text-gray-700 text-lg mb-6">
      Our volunteers are the heart of our mission. Whether you teach, mentor, organize events, or help behind the scenes, your contribution creates lasting change in rural communities. Experience personal growth, build lifelong friendships, and be part of something bigger than yourself.
    </p>
    <div className="flex flex-col md:flex-row gap-6 justify-center">
      <div className="bg-white rounded-xl shadow p-6 flex-1">
        <span className="text-3xl text-orange-500 mb-2 inline-block">🌱</span>
        <h3 className="font-bold text-lg mb-1">Empower Children</h3>
        <p className="text-gray-600 text-sm">Help students discover their potential and achieve their dreams.</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex-1">
        <span className="text-3xl text-green-500 mb-2 inline-block">🤝</span>
        <h3 className="font-bold text-lg mb-1">Build Community</h3>
        <p className="text-gray-600 text-sm">Foster connections and strengthen the fabric of rural society.</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex-1">
        <span className="text-3xl text-yellow-500 mb-2 inline-block">🌟</span>
        <h3 className="font-bold text-lg mb-1">Grow Personally</h3>
        <p className="text-gray-600 text-sm">Gain new skills, confidence, and a sense of fulfillment.</p>
      </div>
    </div>
  </section>
);

export default VolunteerImpact; 