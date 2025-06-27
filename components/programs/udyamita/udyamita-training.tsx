"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, BookOpen, Award, CheckCircle, Calendar, Target, Lightbulb } from "lucide-react"

const trainingMethods = [
  {
    title: "Practical Learning",
    description: "Real business case studies and hands-on project implementation.",
    features: ["Live business cases", "Practical exercises", "Real-world scenarios", "Industry projects"],
    icon: Target,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Mentorship Program",
    description: "One-on-one guidance from successful entrepreneurs and industry experts.",
    features: ["Personal mentors", "Weekly sessions", "Expert guidance", "Success strategies"],
    icon: Users,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Peer Learning",
    description: "Collaborative environment with fellow aspiring entrepreneurs.",
    features: ["Group discussions", "Peer feedback", "Team projects", "Networking events"],
    icon: Lightbulb,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Industry Exposure",
    description: "Field visits and sessions with industry leaders and successful entrepreneurs.",
    features: ["Company visits", "Expert sessions", "Market exposure", "Industry insights"],
    icon: Award,
    color: "bg-purple-100 text-purple-600",
  },
]

const schedule = [
  {
    phase: "Foundation Phase",
    duration: "Week 1-3",
    topics: ["Business ideation", "Market research", "Opportunity identification", "Basic business concepts"],
    status: "current",
  },
  {
    phase: "Planning Phase",
    duration: "Week 4-6",
    topics: ["Business plan development", "Financial planning", "Legal compliance", "Risk assessment"],
    status: "upcoming",
  },
  {
    phase: "Development Phase",
    duration: "Week 7-9",
    topics: ["Product development", "Marketing strategies", "Operations setup", "Team building"],
    status: "upcoming",
  },
  {
    phase: "Launch Phase",
    duration: "Week 10-12",
    topics: ["Business launch", "Customer acquisition", "Growth strategies", "Scaling plans"],
    status: "upcoming",
  },
]

const features = [
  "Small batch sizes (15-20 participants)",
  "Flexible weekend and evening batches",
  "Digital resources and learning materials",
  "Lifetime alumni network access",
  "Post-training business support",
  "Government scheme guidance",
  "Funding assistance and connections",
  "Certificate upon completion",
]

export function UdyamitaTraining() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Training Methods */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Training Methodology</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive training approach combines theoretical knowledge with practical implementation to ensure
              successful entrepreneurship development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
                      <p className="text-gray-600 text-sm">{method.description}</p>
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
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">12-Week Training Schedule</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our structured 12-week program is designed to take you from idea to business launch with comprehensive
              support at every stage.
            </p>

            <div className="space-y-4">
              {schedule.map((phase, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      phase.status === "current" ? "bg-orange-600 text-white" : "bg-gray-200 text-gray-600"
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
            <Card className="bg-orange-50 border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-800">
                  <Calendar className="h-5 w-5 mr-2" />
                  Next Batch Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-orange-600 font-medium">Start Date</div>
                    <div className="text-orange-800 font-semibold">April 1, 2024</div>
                  </div>
                  <div>
                    <div className="text-sm text-orange-600 font-medium">Duration</div>
                    <div className="text-orange-800 font-semibold">12 Weeks</div>
                  </div>
                  <div>
                    <div className="text-sm text-orange-600 font-medium">Batch Size</div>
                    <div className="text-orange-800 font-semibold">20 Participants</div>
                  </div>
                  <div>
                    <div className="text-sm text-orange-600 font-medium">Mode</div>
                    <div className="text-orange-800 font-semibold">Hybrid</div>
                  </div>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">Register for Next Batch</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Program Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
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

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-orange-600 to-red-600 text-white border-0">
            <CardContent className="p-8">
              <Target className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Entrepreneurial Journey?</h3>
              <p className="mb-6 opacity-90">
                Join our comprehensive training program and get the skills, knowledge, and support you need to build a
                successful business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                  Apply Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-600"
                >
                  Download Brochure
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
