import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Heart, Sprout, Users } from "lucide-react"
import Image from "next/image"

export function About() {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Seva",
      subtitle: "सेवा",
      description: "Selfless service to uplift rural communities through education and empowerment.",
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
      title: "Sanskar",
      subtitle: "संस्कार",
      description: "Instilling cultural values and moral character alongside modern education.",
    },
    {
      icon: <Sprout className="w-8 h-8 text-green-500" />,
      title: "Sustainability",
      subtitle: "स्थिरता",
      description: "Promoting eco-friendly farming and self-reliant village economies.",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Community",
      subtitle: "समुदाय",
      description: "Building strong, culturally rooted communities that support each other.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <span className="mr-2">👨‍🎓</span>
                IIT Delhi Alumnus
              </div>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                From Corporate Dreams to
                <span className="text-orange-600 block">Village Classrooms</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                After graduating from IIT Delhi in 2017 with a B.Tech in Mechanical Engineering, Shri Mukund Agrawal
                chose to return to his native Bihar in 2018. His experiences teaching children in Delhi slums and
                meeting dedicated social workers ignited a deep urge to serve his homeland.
              </p>

              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-6">
                <blockquote className="text-gray-800 italic text-lg">
                  "I realized that true success isn't measured by corporate achievements, but by the positive impact we
                  create in our communities. Bihar needed its children to return and serve."
                </blockquote>
                <cite className="text-orange-700 font-medium mt-2 block text-right">- Mukund Agrawal</cite>
              </div>

              <p className="text-gray-600">
                Known affectionately as <strong>"Golu Sir"</strong> by his students, he founded the Divya Bihar Mission
                to provide holistic education that combines modern curriculum with traditional Indian values, creating
                self-reliant and culturally rooted youth.
              </p>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="space-y-8">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Mukund Agrawal with students"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
              <div className="hidden sm:block absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">2018</div>
                  <div className="text-sm text-gray-600">Mission Started</div>
                </div>
              </div>
              <div className="block sm:hidden mt-4 bg-white rounded-lg shadow-lg p-4 border w-full max-w-xs mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">2018</div>
                  <div className="text-sm text-gray-600">Mission Started</div>
                </div>
              </div>
            </div>

            {/* Mission Timeline */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Journey Milestones</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">2013-2017: B.Tech Mechanical Engineering, IIT Delhi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">2018: Returned to Bihar, Founded Divya Bihar Mission</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">2020: Launched Shri Classes &amp; Agro Projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">2024: Established Divya Bihar Global Gurukulam</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add spacing between Journey Milestones and Guiding Mantra */}
        <div className="mt-20"></div>

        {/* Vivekananda Vision Quote */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 lg:p-12 text-white text-center mb-20">
          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold">Our Sacred Duty</h3>
            <blockquote className="text-xl lg:text-3xl font-devanagari leading-relaxed">
              "जब तक करोड़ों लोग भूखे और अज्ञानी रहेंगे, मैं उस प्रत्येक व्यक्ति को विश्वासघाती मानूंगा जो उनकी कीमत पर शिक्षित हुआ है और उनकी ओर बिल्कुल भी ध्यान नहीं देता है।"
            </blockquote>
            <p className="text-lg lg:text-xl opacity-90 italic">
              "As long as millions of people remain hungry and ignorant, I shall consider every person a traitor who has been educated at their expense and pays no attention to them."
            </p>
            <cite className="text-lg opacity-80 block">— Swami Vivekananda</cite>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              This profound wisdom from Swami Vivekananda drives our unwavering commitment to serve those who need the most. Every educated individual has a sacred duty to uplift society and create a beautiful world for all.
            </p>
          </div>
        </div>


        {/* Core Values */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-600 font-devanagari">हमारे मूल सिद्धांत</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">{value.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{value.title}</h4>
                    <p className="text-lg font-devanagari text-gray-600">{value.subtitle}</p>
                  </div>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
