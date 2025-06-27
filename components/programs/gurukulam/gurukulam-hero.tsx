import { Button } from "@/components/ui/button"
import { GraduationCap, Home, Users, Award } from "lucide-react"
import Image from "next/image"

export function GurukulamHero() {
  const highlights = [
    { icon: <Users className="w-5 h-5" />, label: "200+ Students", value: "K-12 Education" },
    { icon: <Home className="w-5 h-5" />, label: "Residential", value: "Hostel Facilities" },
    { icon: <Award className="w-5 h-5" />, label: "95% Success", value: "Board Results" },
    { icon: <GraduationCap className="w-5 h-5" />, label: "Holistic", value: "Development" },
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <GraduationCap className="w-4 h-4 mr-2" />
                Residential School
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Divya Bihar Global
                <span className="text-blue-600 block">Gurukulam</span>
                <span className="text-indigo-700 block font-devanagari text-3xl lg:text-4xl mt-2">दिव्य बिहार ग्लोबल गुरुकुलम</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                A residential K-12 school that combines modern NCERT curriculum with traditional Indian values, Sanskrit
                education, and character building. Creating future leaders who are both globally competent and
                culturally rooted.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <blockquote className="text-blue-800 font-devanagari text-xl mb-2">
                  "विद्यां चाविनयं चैव, शक्तिं शीलं पराक्रमम्।<br />
                  एतत् सर्वं गुरुकुले, सम्यगाधीयते सदा॥"
                </blockquote>
                <p className="text-blue-700 italic">"In the Gurukulam, one truly learns knowledge, humility, strength, character, and courage — all in harmony."</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center">
                  <div className="flex justify-center text-blue-500 mb-2">{highlight.icon}</div>
                  <div className="text-lg font-bold text-gray-900">{highlight.label}</div>
                  <div className="text-xs text-gray-600">{highlight.value}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <GraduationCap className="w-5 h-5 mr-2" />
                Apply for Admission
              </Button>
              <Button size="lg" variant="outline" className="border-indigo-600 text-indigo-700 hover:bg-indigo-50">
                Schedule Campus Tour
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Students at Divya Bihar Global Gurukulam"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

              {/* Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    "Where tradition meets modernity in education"
                  </p>
                  <p className="text-xs text-gray-600">Established 2019 • Raghopur Campus</p>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-blue-500 text-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-xs">Students</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-indigo-500 text-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">K-12</div>
                <div className="text-xs">Grades</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
