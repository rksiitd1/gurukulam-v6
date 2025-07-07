import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { LocationMap } from "@/components/contact/location-map"
import { VisitingInfo } from "@/components/contact/visiting-info"
import { FAQ } from "@/components/contact/faq"
import { CallToAction } from "@/components/call-to-action"

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <LocationMap />
      <VisitingInfo />
      <FAQ />
      <CallToAction />
    </main>
  )
}
