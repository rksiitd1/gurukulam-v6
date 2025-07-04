import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Lightbulb } from "lucide-react"

export function Vision() {
  const visionElements = [
    {
      icon: <Eye className="w-8 h-8 text-blue-500" />,
      title: "Vision",
      subtitle: "दृष्टि",
      content:
        "To create a network of dharmic educational institutions across Bihar that produce culturally rooted, globally competent, and socially conscious individuals who become catalysts for rural transformation.",
      color: "blue",
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Mission",
      subtitle: "मिशन",
      content:
        "To provide holistic education that integrates modern curriculum with Indian values, while simultaneously developing sustainable livelihoods and preserving cultural heritage in rural communities.",
      color: "green",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Values",
      subtitle: "मूल्य",
      content:
        "Seva (selfless service), Sanskar (cultural values), Sustainability, Community welfare, Educational excellence, and preservation of Bharatiya Sanskriti.",
      color: "red",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
      title: "Philosophy",
      subtitle: "दर्शन",
      content:
        "Education should not just fill minds with information but transform hearts with wisdom, creating individuals who are both modern in thinking and rooted in values.",
      color: "orange",
    },
  ]

  const goals = [
    {
      title: "Educational Excellence",
      description: "Establish model schools in 5 districts of Bihar by 2030",
      target: "5 Districts",
      progress: "1 District (Current)",
    },
    {
      title: "Student Impact",
      description: "Educate and empower 10,000 rural students",
      target: "10,000 Students",
      progress: "500+ Students",
    },
    {
      title: "Livelihood Creation",
      description: "Train 1,000 farmers in sustainable agriculture",
      target: "1,000 Farmers",
      progress: "200+ Farmers",
    },
    {
      title: "Women Empowerment",
      description: "Create 500 women entrepreneurs through Udyamita",
      target: "500 Women",
      progress: "100+ Women",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            <Target className="w-4 h-4 mr-2" />
            Vision & Mission
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Guiding Principles &<span className="text-green-600 block">Future Aspirations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our vision extends beyond education to encompass complete rural transformation through dharmic values,
            sustainable practices, and community empowerment.
          </p>
        </div>

        {/* Vision, Mission, Values, Philosophy */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {visionElements.map((element, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center space-y-4">
                <div className="flex justify-center">{element.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{element.title}</h3>
                  <p className="text-lg font-devanagari text-gray-600">{element.subtitle}</p>
                </div>
                <p className="text-gray-700 leading-relaxed">{element.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sanskrit Vision Quote */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 lg:p-12 text-white text-center mb-20">
          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold">Our Guiding Mantra</h3>
            <blockquote className="text-2xl lg:text-4xl font-devanagari leading-relaxed">
              "ग्रामे-ग्रामे सभाकार्या, ग्रामे-ग्रामे कथा शुभा"
            </blockquote>
            <p className="text-xl opacity-90">
              "In every village, establish cultural assemblies; in every village, spread auspicious knowledge"
            </p>
            <cite className="text-lg opacity-80 block">- Mahamana Madan Mohan Malaviya</cite>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              This ancient wisdom guides our mission to make every village a center of learning, culture, and
              prosperity, ultimately making Bihar and Bharat Mata once again Vishwaguru.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Be Part of This Vision</h3>
          <p className="text-lg text-gray-600 mb-6">
            Every great vision needs dedicated supporters. Join us in transforming rural Bihar through education and
            values.
          </p>
          <p className="font-devanagari text-lg text-green-700 mb-6">इस दृष्टि का हिस्सा बनें</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/donate" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Support Our Vision
            </a>
            <a href="/volunteer" className="border border-green-600 text-green-700 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition-colors">
              Volunteer With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
