import { GurukulamHero } from "@/components/programs/gurukulam/gurukulam-hero"
import { GurukulamCurriculum } from "@/components/programs/gurukulam/gurukulam-curriculum"
import { GurukulamFacilities } from "@/components/programs/gurukulam/gurukulam-facilities"
import { GurukulamAdmission } from "@/components/programs/gurukulam/gurukulam-admission"
import { GurukulamTestimonials } from "@/components/programs/gurukulam/gurukulam-testimonials"
import { CallToAction } from "@/components/call-to-action"

export default function GurukulamPage() {
  return (
    <main>
      <GurukulamHero />
      <GurukulamCurriculum />
      <GurukulamFacilities />
      <GurukulamAdmission />
      <GurukulamTestimonials />
      <CallToAction />
    </main>
  )
}
