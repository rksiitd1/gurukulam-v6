import React from 'react';

const VolunteerTestimonials = () => (
  <section className="py-16 px-4 bg-gradient-to-r from-green-100 via-white to-orange-100">
    <h2 className="text-2xl md:text-3xl font-bold text-orange-700 mb-10 text-center">Volunteer Stories</h2>
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-700 italic mb-4">“Volunteering here has been a life-changing experience. The smiles of the children and the warmth of the community inspire me every day.”</p>
        <div className="text-orange-700 font-semibold">— Priya S., Volunteer Teacher</div>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-700 italic mb-4">“I never imagined I could make such a difference. The team is supportive, and I've learned so much about myself and rural India.”</p>
        <div className="text-orange-700 font-semibold">— Ankit R., Event Organizer</div>
      </div>
    </div>
  </section>
);

export default VolunteerTestimonials; 