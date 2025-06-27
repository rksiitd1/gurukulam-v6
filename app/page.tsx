import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Impact } from "@/components/impact"
import { Programs } from "@/components/programs"
import { Testimonials } from "@/components/testimonials"
import { CallToAction } from "@/components/call-to-action"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Impact />
      <Programs />
      <Testimonials />
      <CallToAction />
    </main>
  )
}
