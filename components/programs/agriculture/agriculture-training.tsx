import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Users, Award, Calendar, CheckCircle } from "lucide-react"

const trainingMethods = [
  {
    title: "Field Demonstrations",
    description: "Hands-on learning in real farm environments with expert guidance.",
    features: ["Live demonstrations", "Practical exercises", "Q&A sessions", "Take-home materials"],
    icon: MapPin,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Workshop Sessions",
    description: "Interactive workshops covering theoretical and practical aspects.",
    features: ["Expert lectures", "Group discussions", "Case studies", "Resource materials"],
    icon: Users,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Digital Learning",
    description: "Online modules and video tutorials for flexible learning.",
    features: ["Video tutorials", "Online assessments", "Digital certificates", "24/7 access"],
    icon: Award,
    color: "bg-purple-100 text-purple-600",
  },
]

const schedule = [
  {
    phase: "Foundation Phase",
    duration: "Week 1-2",
    topics: ["Introduction to modern agriculture", "Soil science basics", "Crop selection principles"],
    status: "current",
  },
  {
    phase: "Practical Training",
    duration: "Week 3-8",
    topics: ["Hands-on farming techniques", "Equipment operation", "Pest and disease management"],
    status: "upcoming",
  },
  {
    phase: "Advanced Techniques",
    duration: "Week 9-12",
    topics: ["Precision agriculture", "Technology integration", "Business planning"],
    status: "upcoming",
  },
  {
    phase: "Certification",
    duration: "Week 13-14",
    topics: ["Final assessment", "Project presentation", "Certificate award"],
    status: "upcoming",
  },
]

export function AgricultureTraining() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Training Methods */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Training Methodology</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive training approach combines theoretical knowledge with practical hands-on experience to
              ensure effective learning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {trainingMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader className="space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-full ${method.color} flex items-center justify-center`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{method.title}</CardTitle>
                      <CardDescription className="text-gray-600">{method.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {method.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center justify-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Training Schedule */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Training Schedule</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our 14-week comprehensive agriculture program is structured to provide progressive learning from basic
              concepts to advanced farming techniques.
            </p>

            <div className="space-y-4">
              {schedule.map((phase, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      phase.status === "current" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                      <Badge variant={phase.status === "current" ? "default" : "secondary"} className="text-xs">
                        {phase.duration}
                      </Badge>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {phase.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-green-800">
                  <Calendar className="h-5 w-5 mr-2" />
                  Next Batch Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-green-600 font-medium">Start Date</div>
                    <div className="text-green-800 font-semibold">March 15, 2024</div>
                  </div>
                  <div>
                    <div className="text-sm text-green-600 font-medium">Duration</div>
                    <div className="text-green-800 font-semibold">14 Weeks</div>
                  </div>
                  <div>
                    <div className="text-sm text-green-600 font-medium">Batch Size</div>
                    <div className="text-green-800 font-semibold">25 Farmers</div>
                  </div>
                  <div>
                    <div className="text-sm text-green-600 font-medium">Language</div>
                    <div className="text-green-800 font-semibold">Hindi & English</div>
                  </div>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Register for Next Batch
                </button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Training Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "Expert trainers with 10+ years experience",
                    "Practical field training on 50+ acre farm",
                    "Modern equipment and technology access",
                    "Post-training support for 6 months",
                    "Certificate upon successful completion",
                    "Networking with fellow farmers",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
