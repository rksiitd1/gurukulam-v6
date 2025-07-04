import AboutMissionHero from "@/components/about/about-mission-hero"
import MissionStatement from "@/components/about/mission-statement"
import FocusAreas from "@/components/about/focus-areas"
import { TeamProfiles } from "@/components/about/team-profiles"
import { Vision } from "@/components/about/vision"
import { Mentors } from "@/components/about/mentors"
import { CallToAction } from "@/components/call-to-action"


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
