import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sprout, Tractor, Droplets, Sun, Users, BookOpen } from "lucide-react"

const programs = [
  {
    icon: Sprout,
    title: "Organic Farming",
    description: "Learn sustainable organic farming techniques that improve soil health and crop quality.",
    duration: "3 months",
    level: "Beginner",
    topics: ["Soil preparation", "Organic fertilizers", "Pest management", "Crop rotation"],
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Tractor,
    title: "Modern Equipment Training",
    description: "Master the use of modern agricultural machinery and equipment for efficient farming.",
    duration: "2 months",
    level: "Intermediate",
    topics: ["Tractor operation", "Harvesting equipment", "Maintenance", "Safety protocols"],
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Droplets,
    title: "Water Management",
    description: "Efficient irrigation systems and water conservation techniques for sustainable farming.",
    duration: "6 weeks",
    level: "All levels",
    topics: ["Drip irrigation", "Water harvesting", "Soil moisture", "Conservation methods"],
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    icon: Sun,
    title: "Climate-Smart Agriculture",
    description: "Adapt farming practices to climate change and weather variability.",
    duration: "4 months",
    level: "Advanced",
    topics: ["Weather forecasting", "Crop selection", "Risk management", "Adaptation strategies"],
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Users,
    title: "Cooperative Farming",
    description: "Build and manage agricultural cooperatives for collective growth and success.",
    duration: "8 weeks",
    level: "Intermediate",
    topics: ["Group formation", "Resource sharing", "Marketing", "Financial management"],
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: BookOpen,
    title: "Agricultural Business",
    description: "Transform farming into a profitable business with modern marketing strategies.",
    duration: "3 months",
    level: "All levels",
    topics: ["Market analysis", "Value addition", "Branding", "Digital marketing"],
    color: "bg-indigo-100 text-indigo-600",
  },
]

export function AgriculturePrograms() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Agriculture Programs</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training programs designed to modernize farming practices and increase agricultural
            productivity through sustainable methods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-full ${program.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {program.duration}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {program.level}
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2 group-hover:text-green-600 transition-colors">
                      {program.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">{program.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-900">Key Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Farming?</h3>
            <p className="text-gray-600 mb-6">
              Join thousands of farmers who have already benefited from our comprehensive agriculture programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Enroll Now
              </button>
              <button className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
