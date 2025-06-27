import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Award, MapPin, Star, Quote } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Farmers Trained",
    description: "Successfully completed our agriculture programs",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: TrendingUp,
    value: "40%",
    label: "Average Yield Increase",
    description: "Improvement in crop productivity",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: MapPin,
    value: "50+",
    label: "Villages Reached",
    description: "Across rural areas in the region",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Award,
    value: "95%",
    label: "Success Rate",
    description: "Farmers implementing learned techniques",
    color: "bg-orange-100 text-orange-600",
  },
]

const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Village Khairpur",
    crop: "Wheat & Rice",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "The organic farming techniques I learned increased my wheat yield by 45% while reducing input costs. My family's income has doubled in just one year.",
    improvement: "+45% Yield",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    location: "Village Ramgarh",
    crop: "Vegetables",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "Water management training helped me save 60% water while growing better quality vegetables. Now I supply to three nearby markets regularly.",
    improvement: "60% Water Saved",
    rating: 5,
  },
  {
    name: "Mohan Singh",
    location: "Village Sultanpur",
    crop: "Sugarcane",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "Modern equipment training transformed my farming. I can now harvest in half the time and my sugarcane quality has improved significantly.",
    improvement: "50% Time Saved",
    rating: 5,
  },
]

const achievements = [
  {
    title: "Best Agriculture Training Program",
    organization: "State Agriculture Department",
    year: "2023",
    description: "Recognized for innovative training methods and outstanding results",
  },
  {
    title: "Rural Development Excellence Award",
    organization: "Ministry of Agriculture",
    year: "2022",
    description: "For significant contribution to rural farmer empowerment",
  },
  {
    title: "Sustainable Farming Initiative",
    organization: "Green Agriculture Foundation",
    year: "2023",
    description: "Outstanding work in promoting sustainable farming practices",
  },
]

export function AgricultureResults() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Impact Statistics */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Transforming Lives Through Agriculture</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our agriculture programs have created measurable impact in rural communities, empowering farmers with modern
            techniques and sustainable practices.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-full ${stat.color} flex items-center justify-center`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <CardTitle className="text-lg mb-2">{stat.label}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">{stat.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            )
          })}
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Success Stories</h3>
            <p className="text-lg text-gray-600">
              Real farmers, real results - hear from those who transformed their lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.location}</p>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {testimonial.crop}
                        </Badge>
                      </div>
                      <div className="flex items-center mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <Quote className="h-6 w-6 text-gray-300 absolute -top-2 -left-1" />
                    <p className="text-gray-700 italic pl-6 leading-relaxed">{testimonial.quote}</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-sm font-medium text-green-800">Key Improvement: {testimonial.improvement}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards and Recognition */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Awards & Recognition</h3>
            <p className="text-lg text-gray-600">
              Our commitment to excellence has been recognized by leading organizations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{achievement.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{achievement.organization}</p>
                  <Badge variant="outline" className="text-xs">
                    {achievement.year}
                  </Badge>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 sm:p-12 rounded-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Farming?</h3>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Join hundreds of successful farmers who have revolutionized their agriculture practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-medium transition-colors">
                Download Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
