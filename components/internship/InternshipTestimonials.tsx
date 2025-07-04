import React from 'react';

const InternshipTestimonials = () => (
  <section className="py-16 px-4 bg-gradient-to-r from-blue-100 via-white to-green-100">
    <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-10 text-center">Internship Stories</h2>
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-700 italic mb-4">“My internship here gave me real-world experience and a sense of purpose. I learned so much from the team and the community.”</p>
        <div className="text-blue-700 font-semibold">— Riya M., Education Intern</div>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-700 italic mb-4">“I was able to apply my skills in a meaningful way and see the impact of my work. The mentorship and support were incredible!”</p>
        <div className="text-blue-700 font-semibold">— Arjun T., Media Intern</div>
      </div>
    </div>
  </section>
);

export default InternshipTestimonials; 