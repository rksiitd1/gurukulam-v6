import { AboutHero } from "@/components/about/about-hero"
import { Biography } from "@/components/about/biography"
import { Journey } from "@/components/about/journey"
import { TeamProfiles } from "@/components/about/team-profiles"
import { Vision } from "@/components/about/vision"
import { Mentors } from "@/components/about/mentors"
import { CallToAction } from "@/components/call-to-action"
import AboutMissionHero from "@/components/about/about-mission-hero"
import MissionStatement from "@/components/about/mission-statement"
import FocusAreas from "@/components/about/focus-areas"

export default function AboutPage() {
  return (
    <main>
      <AboutMissionHero />
      <MissionStatement />
      <FocusAreas />
      <Vision />
      <TeamProfiles />
      <Mentors />
      <CallToAction />
    </main>
  )
}
