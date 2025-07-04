import React from 'react';
import VolunteerHero from '@/components/volunteer/VolunteerHero';
import VolunteerImpact from '@/components/volunteer/VolunteerImpact';
import VolunteerOpportunities from '@/components/volunteer/VolunteerOpportunities';
import VolunteerSignupForm from '@/components/volunteer/VolunteerSignupForm';
import VolunteerTestimonials from '@/components/volunteer/VolunteerTestimonials';

export default function VolunteerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-orange-50">
      <VolunteerHero />
      <VolunteerImpact />
      <VolunteerOpportunities />
      <VolunteerSignupForm />
      <VolunteerTestimonials />
    </main>
  );
} 