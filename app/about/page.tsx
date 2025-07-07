import AboutMissionHero from "@/components/about/about-mission-hero"
import { WhyWeExistSection } from "@/components/why-we-exist-section"
import FocusAreas from "@/components/about/focus-areas"
import { TeamProfiles } from "@/components/about/team-profiles"
import { Vision } from "@/components/about/vision"
import { Mentors } from "@/components/about/mentors"
import { CallToAction } from "@/components/call-to-action"
import BhagavadGitaVerse from "@/components/about/BhagavadGitaVerse"


export default function AboutPage() {
  return (
    <main>
      <AboutMissionHero />
      <WhyWeExistSection />
      <FocusAreas />
      <Vision />
      <TeamProfiles />
      <Mentors />
      <BhagavadGitaVerse />
      <CallToAction />
    </main>
  )
}
