import { ProgramsOverview } from "@/components/programs/programs-overview"
import { ProgramsGrid } from "@/components/programs/programs-grid"
import { CallToAction } from "@/components/call-to-action"
import { CommunityEngagementSection } from "@/components/programs/community-engagement-section"

export default function ProgramsPage() {
  return (
    <main>
      <ProgramsOverview />
      <ProgramsGrid />
      <CommunityEngagementSection />
      <CallToAction />
    </main>
  )
}
