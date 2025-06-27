import { ShriClassesHero } from "@/components/programs/shri-classes/shri-classes-hero"
import { ShriClassesCurriculum } from "@/components/programs/shri-classes/shri-classes-curriculum"
import { ShriClassesResults } from "@/components/programs/shri-classes/shri-classes-results"
import { ShriClassesAdmission } from "@/components/programs/shri-classes/shri-classes-admission"
import { CallToAction } from "@/components/call-to-action"

export default function ShriClassesPage() {
  return (
    <main>
      <ShriClassesHero />
      <ShriClassesCurriculum />
      <ShriClassesResults />
      <ShriClassesAdmission />
      <CallToAction />
    </main>
  )
}
