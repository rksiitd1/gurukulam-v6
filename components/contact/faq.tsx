"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      category: "General Information",
      questions: [
        {
          question: "What is Divya Bihar Mission?",
          answer:
            "Divya Bihar Mission is a comprehensive rural development organization founded by Mukund Agarwal in 2018. We focus on holistic education, sustainable agriculture, and community empowerment in rural Bihar through our four main programs: Divya Bihar Global Gurukulam, Shri Classes, Agriculture Program, and Udyamita Program.",
        },
        {
          question: "Where are you located?",
          answer:
            "Our main campus is situated in Raghopur Village, Supaul District, Bihar, and is conveniently accessible by both road and rail.",
        },
        {
          question: "What makes your approach unique?",
          answer:
            "Our unique approach combines modern education with traditional Indian values. We integrate NCERT curriculum with Sanskrit, Yoga, and cultural education. Our residential Gurukulam model, affordable fee structure, and focus on character building alongside academic excellence sets us apart.",
        },
      ],
    },
    {
      category: "Admissions",
      questions: [
        {
          question: "What is the admission process for Divya Bihar Global Gurukulam?",
          answer:
            "Our admission process involves four steps: 1) Online/Offline application submission, 2) Document verification, 3) Student and parent interview, 4) Admission confirmation. The entire process takes 7-10 days. We focus on identifying students who will benefit most from our holistic education approach.",
        },
        {
          question: "What are the fee structures for different programs?",
          answer:
            "We follow a flexible fee structure. For those who can afford it, we accept a minimal fee as a contribution to support our mission. However, for students from economically weaker backgrounds, we provide our services free of cost to the best of our ability.",
        },
      ],
    },
    {
      category: "Programs & Curriculum",
      questions: [
        {
          question: "What curriculum do you follow at the Gurukulam?",
          answer:
            "We follow NCERT curriculum integrated with Sanskrit education, Yoga, meditation, and cultural programs. Our curriculum is designed grade-wise from K-12, with special focus on character building, practical learning, and competitive exam preparation for higher grades.",
        },
        {
          question: "What co-curricular activities are available?",
          answer:
            "We plan to offer extensive co-curricular activities including classical music & dance, folk arts of Bihar, drama & theatre, Sanskrit recitation, sports (cricket, football, badminton, athletics), yoga & meditation, leadership training, computer programming, and community service projects. Currently, our activities are limited since available resource constraints.",
        },
        {
          question: "How do you ensure quality education in rural areas?",
          answer:
            "We maintain quality through qualified teachers, modern infrastructure, regular teacher training, continuous assessment methods, technology integration, and mentorship from experts at IITs and other premier institutions. Our 95% board pass rate demonstrates our commitment to excellence.",
        },
      ],
    },
    {
      category: "Facilities & Campus Life",
      questions: [
        {
          question: "What facilities are available for residential students?",
          answer:
            "Our residential facilities include separate hostels for boys and girls, 4-6 students per room, 24/7 security, nutritious vegetarian meals, medical room, library, computer lab, science laboratories, sports facilities, and recreational areas. We ensure a safe and nurturing environment for all students.",
        },
        {
          question: "How do you ensure student safety and security?",
          answer:
            "Student safety is our top priority. We have 24/7 security personnel, CCTV monitoring, background-verified staff, strict child protection policies, on-campus medical facility, fire safety measures, and emergency contact systems. All staff are trained in child safety protocols.",
        },
        {
          question: "What is the daily routine for residential students?",
          answer:
            "Our daily routine includes morning yoga/meditation (6:00 AM), breakfast (7:00 AM), classes (8:00 AM-3:00 PM), lunch, study time, sports/activities (4:00-6:00 PM), evening prayers, dinner (7:00 PM), and supervised study time (8:00-9:30 PM). Lights out at 10:00 PM.",
        },
      ],
    },
    {
      category: "Support & Donations",
      questions: [
        {
          question: "How can I support Divya Bihar Mission?",
          answer:
            "You can support us through monetary donations, volunteering, sponsoring a child's education, providing equipment/books, offering professional expertise, or spreading awareness about our mission. All donations are tax-exempt under 80G. We welcome both individual and corporate support.",
        },
        {
          question: "Are donations tax-deductible?",
          answer:
            "Yes, all donations to Divya Bihar Mission are eligible for tax exemption under Section 80G of the Income Tax Act. We are registered under 12A and 80G, and provide proper receipts for all donations. You can claim up to 50% tax deduction on your donations.",
        },
        {
          question: "Can I visit the campus before making a donation?",
          answer:
            "We encourage potential donors to visit our campus and see our work firsthand. You can schedule a campus tour, meet our students and teachers, and understand our impact. Contact us at donations@divyabiharmission.in or +91 98765 43214 to arrange a visit.",
        },
      ],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Common
            <span className="text-blue-600 block">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to the most commonly asked questions about our programs, admissions, facilities, and how you
            can get involved with our mission.
          </p>
          <p className="text-lg font-devanagari text-blue-700 mt-2">अक्सर पूछे जाने वाले प्रश्न</p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gradient-to-r from-white via-gray-50 to-blue-50/30 rounded-lg border-l-4 border-blue-600 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6 font-mono tracking-tight border-b-2 border-blue-200 pb-3">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 10 + faqIndex
                  const isOpen = openItems.includes(globalIndex)

                  return (
                    <Card key={faqIndex} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <h4 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h4>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-slate-800 via-blue-900 to-slate-900 p-10 text-white border-l-4 border-blue-500 shadow-2xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold font-mono tracking-tight mb-6 text-blue-100">Still Have Questions?</h3>
            <p className="text-lg font-medium text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Can't find the answer you're looking for? Our team is here to help you with any questions about our
              programs, admissions, or how to get involved.
            </p>
            <p className="font-devanagari text-xl text-blue-200 mb-10">अभी भी कोई प्रश्न है?</p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <a
                href="mailto:divyabiharmission@gmail.com"
                className="bg-white text-slate-800 hover:bg-gray-100 px-8 py-4 font-bold font-mono tracking-wide transition-all duration-300 hover:scale-105 inline-flex items-center justify-center border-2 border-transparent hover:border-blue-300"
              >
                <HelpCircle className="w-5 h-5 mr-3" />
                Ask a Question
              </a>
              <a
                href="tel:+919262536295"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 font-bold font-mono tracking-wide transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                Call Us Now
              </a>
            </div>

            <div className="bg-slate-700/50 p-6 border-l-2 border-blue-400">
              <div className="font-mono text-sm text-gray-300 space-y-2">
                <p className="font-semibold">
                  Email: <span className="text-blue-300">divyabiharmission@gmail.com</span>
                </p>
                <p className="font-semibold">
                  Phone: <span className="text-blue-300">+91 92625 36295</span>
                </p>
                <p className="text-xs text-gray-400 mt-3">We typically respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
