import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Programs } from "@/components/programs"
import { CallToAction } from "@/components/call-to-action"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Programs />
      <CallToAction />
    </main>
  )
}
