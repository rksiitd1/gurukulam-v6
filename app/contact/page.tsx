import { ContactHero } from "@/components/contact/contact-hero"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactForm } from "@/components/contact/contact-form"
import { LocationMap } from "@/components/contact/location-map"
import { VisitingInfo } from "@/components/contact/visiting-info"
import { FAQ } from "@/components/contact/faq"

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <LocationMap />
      <VisitingInfo />
      <FAQ />
    </main>
  )
}
