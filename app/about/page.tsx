import { AboutHero } from "@/components/about/about-hero"
import { Biography } from "@/components/about/biography"
import { Journey } from "@/components/about/journey"
import { TeamProfiles } from "@/components/about/team-profiles"
import { Vision } from "@/components/about/vision"
import { Mentors } from "@/components/about/mentors"
import { CallToAction } from "@/components/call-to-action"

export default function AboutPage() {
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
