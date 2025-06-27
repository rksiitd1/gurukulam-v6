import { UdyamitaHero } from "@/components/programs/udyamita/udyamita-hero"
import { UdyamitaPrograms } from "@/components/programs/udyamita/udyamita-programs"
import { UdyamitaTraining } from "@/components/programs/udyamita/udyamita-training"
import { UdyamitaSuccess } from "@/components/programs/udyamita/udyamita-success"
import { CallToAction } from "@/components/call-to-action"

export default function UdyamitaPage() {
  return (
    <main>
      <UdyamitaHero />
      <UdyamitaPrograms />
      <UdyamitaTraining />
      <UdyamitaSuccess />
      <CallToAction />
    </main>
  )
}
