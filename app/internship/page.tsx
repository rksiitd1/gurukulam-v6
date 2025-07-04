import React from 'react';
import InternshipHero from '@/components/internship/InternshipHero';
import InternshipImpact from '@/components/internship/InternshipImpact';
import InternshipRoles from '@/components/internship/InternshipRoles';
import InternshipApplicationForm from '@/components/internship/InternshipApplicationForm';
import InternshipTestimonials from '@/components/internship/InternshipTestimonials';

export default function InternshipPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <InternshipHero />
      <InternshipImpact />
      <InternshipRoles />
      <InternshipApplicationForm />
      <InternshipTestimonials />
    </main>
  );
} 