import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Sprout, Home, Award, Heart } from "lucide-react"

export function Impact() {
  const stats = [
    {
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      number: "500+",
      label: "Students Educated",
      description: "Children receiving holistic education",
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      number: "50+",
      label: "Villages Reached",
      description: "Communities directly impacted",
    },
    {
      icon: <Sprout className="w-8 h-8 text-emerald-500" />,
      number: "100+",
      label: "Acres Preserved",
      description: "Land under sustainable farming",
    },
    {
      icon: <Home className="w-8 h-8 text-orange-500" />,
      number: "200+",
      label: "Families Supported",
      description: "Through various programs",
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      number: "95%",
      label: "Success Rate",
      description: "Students passing with distinction",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      number: "1000+",
      label: "Lives Transformed",
      description: "Through our initiatives",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
            <span className="mr-2">📊</span>
            Our Impact
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Transforming Lives Through
            <span className="text-orange-600 block">Education with Yogic Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 2018, our mission has touched thousands of lives across Bihar, creating sustainable change through
            education, agriculture, and cultural preservation.
          </p>
          <p className="text-lg font-devanagari text-orange-700 mt-2">शिक्षा से समाज का कल्याण</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="flex justify-center">{stat.icon}</div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-800">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
