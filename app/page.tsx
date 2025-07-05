import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Programs } from "@/components/programs"
import { CallToAction } from "@/components/call-to-action"
import { WhyWeExistSection } from "@/components/why-we-exist-section"
import { GetInvolvedSection } from "@/components/get-involved-section"
import UpanishadVerse from "@/components/UpanishadVerse"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhyWeExistSection />
      <About />
      <Programs />
      <GetInvolvedSection />
      <UpanishadVerse />
      <CallToAction />
    </main>
  )
}
