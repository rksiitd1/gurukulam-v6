import React from 'react';

const InternshipImpact = () => (
  <section className="py-12 px-4 max-w-4xl mx-auto text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">Why Intern With Us?</h2>
    <p className="text-gray-700 text-lg mb-6">
      Our internships offer a unique opportunity to work on meaningful projects, learn from experienced mentors, and contribute to real change in rural communities. Develop your professional skills, expand your network, and leave a lasting legacy.
    </p>
    <div className="flex flex-col md:flex-row gap-6 justify-center">
      <div className="bg-white rounded-xl shadow p-6 flex-1">
        <span className="text-3xl text-blue-500 mb-2 inline-block">🚀</span>
        <h3 className="font-bold text-lg mb-1">Real-World Experience</h3>
        <p className="text-gray-600 text-sm">Work on impactful projects and see your ideas come to life.</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex-1">
        <span className="text-3xl text-green-500 mb-2 inline-block">🌱</span>
        <h3 className="font-bold text-lg mb-1">Mentorship</h3>
        <p className="text-gray-600 text-sm">Learn from experts and receive personalized guidance.</p>
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex-1">
        <span className="text-3xl text-yellow-500 mb-2 inline-block">🌏</span>
        <h3 className="font-bold text-lg mb-1">Make a Difference</h3>
        <p className="text-gray-600 text-sm">Help empower communities and create positive change.</p>
      </div>
    </div>
  </section>
);

export default InternshipImpact; 