"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Users, Award, CheckCircle, Calendar } from "lucide-react"

const subjects = [
  {
    name: "Mathematics",
    topics: ["Algebra", "Geometry", "Trigonometry", "Calculus"],
    hours: "120",
    level: "Advanced",
  },
  {
    name: "Physics",
    topics: ["Mechanics", "Thermodynamics", "Optics", "Modern Physics"],
    hours: "100",
    level: "Advanced",
  },
  {
    name: "Chemistry",
    topics: ["Organic", "Inorganic", "Physical", "Analytical"],
    hours: "100",
    level: "Advanced",
  },
  {
    name: "Biology",
    topics: ["Botany", "Zoology", "Genetics", "Ecology"],
    hours: "80",
    level: "Intermediate",
  },
  {
    name: "English",
    topics: ["Grammar", "Literature", "Composition", "Communication"],
    hours: "60",
    level: "Intermediate",
  },
  {
    name: "Hindi",
    topics: ["व्याकरण", "साहित्य", "निबंध", "कविता"],
    hours: "40",
    level: "Basic",
  },
]

const schedule = [
  {
    time: "6:00 AM - 7:30 AM",
    activity: "Morning Prayer & Meditation",
    type: "spiritual",
  },
  {
    time: "8:00 AM - 12:00 PM",
    activity: "Core Academic Classes",
    type: "academic",
  },
  {
    time: "1:00 PM - 3:00 PM",
    activity: "Practical Sessions & Labs",
    type: "practical",
  },
  {
    time: "3:30 PM - 5:00 PM",
    activity: "Sports & Physical Activities",
    type: "physical",
  },
  {
    time: "5:30 PM - 7:00 PM",
    activity: "Study Hall & Doubt Clearing",
    type: "study",
  },
  {
    time: "7:30 PM - 8:30 PM",
    activity: "Cultural Activities",
    type: "cultural",
  },
]

const features = [
  {
    icon: Users,
    title: "Small Batch Size",
    description: "Maximum 15 students per class for personalized attention",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "NCERT aligned with additional enrichment materials",
  },
  {
    icon: Award,
    title: "Expert Faculty",
    description: "Experienced teachers with proven track records",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Morning and evening batches available",
  },
]

export function ShriClassesCurriculum() {
  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Academic Excellence</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Comprehensive Curriculum</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our carefully designed curriculum combines traditional values with modern education, ensuring holistic
            development of every student.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 lg:mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subjects Grid */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Subject Coverage</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg font-semibold text-gray-900">{subject.name}</CardTitle>
                    <Badge
                      variant={
                        subject.level === "Advanced"
                          ? "default"
                          : subject.level === "Intermediate"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {subject.level}
                    </Badge>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {subject.hours} hours
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {subject.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Daily Schedule */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Daily Schedule</h3>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-4">
                  {schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center mb-2 sm:mb-0">
                        <Calendar className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-900">{item.time}</div>
                          <div className="text-sm text-gray-600 sm:hidden">{item.activity}</div>
                        </div>
                      </div>
                      <div className="hidden sm:block">
                        <div className="font-medium text-gray-900">{item.activity}</div>
                      </div>
                      <Badge
                        variant="outline"
                        className={`w-fit ${
                          item.type === "academic"
                            ? "border-blue-200 text-blue-700"
                            : item.type === "practical"
                              ? "border-green-200 text-green-700"
                              : item.type === "physical"
                                ? "border-orange-200 text-orange-700"
                                : item.type === "spiritual"
                                  ? "border-purple-200 text-purple-700"
                                  : item.type === "cultural"
                                    ? "border-pink-200 text-pink-700"
                                    : "border-gray-200 text-gray-700"
                        }`}
                      >
                        {item.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Join Our Academic Excellence Program?</h3>
              <p className="mb-6 opacity-90">
                Experience world-class education with traditional values and modern teaching methods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Download Curriculum
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Schedule Visit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
