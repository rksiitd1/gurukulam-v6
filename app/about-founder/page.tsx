import { AboutHero } from "@/components/about-founder/about-hero"
import { Biography } from "@/components/about-founder/biography"
import { Journey } from "@/components/about-founder/journey"
import { TeamProfiles } from "@/components/about-founder/team-profiles"
import { Vision } from "@/components/about-founder/vision"
import { Mentors } from "@/components/about-founder/mentors"
import { CallToAction } from "@/components/call-to-action"

export default function AboutFounderPage() {
  return (
    <main>
      <AboutHero />
      <Biography />
      <Journey />
      <Vision />
      <TeamProfiles />
      <Mentors />
      <CallToAction />
    </main>
  )
}
