import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Sprout, Users } from "lucide-react"
import Image from "next/image"

export function ProgramsOverview() {
  const programs = [
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
      name: "Divya Bihar Global Gurukulam",
      students: "200+",
      description: "K-12 residential education",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
      name: "Shri Classes",
      students: "150+",
      description: "Competitive exam coaching",
    },
    {
      icon: <Sprout className="w-8 h-8 text-emerald-500" />,
      name: "Agriculture Program",
      students: "300+",
      description: "Sustainable farming training",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      name: "Udyamita Program",
      students: "100+",
      description: "Entrepreneurship development",
    },
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-green-50 to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <GraduationCap className="w-4 h-4 mr-2" />
                Our Programs
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Comprehensive
                <span className="text-blue-600 block">Education Ecosystem</span>
                <span className="text-green-700 block font-devanagari text-3xl lg:text-4xl mt-2">
                  संपूर्ण शिक्षा व्यवस्था
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                From early childhood to entrepreneurship, our integrated programs provide holistic development
                opportunities that combine modern education with traditional values, creating well-rounded individuals
                ready to serve society.
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <blockquote className="text-blue-800 font-devanagari text-xl mb-2">
                  "शिक्षा वह शक्ति है जो व्यक्ति और समाज दोनों को बदल देती है"
                </blockquote>
                <p className="text-blue-700 italic">
                  "Education is the power that transforms both individual and society"
                </p>
              </div>
            </div>

            {/* Program Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {programs.map((program, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center">
                  <div className="flex justify-center mb-2">{program.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">{program.students}</div>
                  <div className="text-xs text-gray-600 font-medium">{program.name}</div>
                  <div className="text-xs text-gray-500">{program.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Students in various programs at Divya Bihar Mission"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-blue-500 text-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">750+</div>
                <div className="text-xs">Total Students</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">4</div>
                <div className="text-xs">Programs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
