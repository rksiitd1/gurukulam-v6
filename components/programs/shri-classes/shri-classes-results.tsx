"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, TrendingUp, Users, Star, Award, BookOpen, Target } from "lucide-react"

const stats = [
  {
    icon: Trophy,
    number: "95%",
    label: "Pass Rate",
    description: "Students successfully completing the program",
    color: "text-yellow-600",
  },
  {
    icon: TrendingUp,
    number: "40%",
    label: "Average Improvement",
    description: "In academic performance within 6 months",
    color: "text-green-600",
  },
  {
    icon: Users,
    number: "500+",
    label: "Students Graduated",
    description: "Successfully completed our programs",
    color: "text-blue-600",
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "Parent Satisfaction",
    description: "Based on feedback surveys",
    color: "text-purple-600",
  },
]

const achievements = [
  {
    year: "2023",
    title: "State Board Toppers",
    description: "3 students secured positions in top 10 of state board examinations",
    icon: Award,
  },
  {
    year: "2023",
    title: "Science Olympiad Winners",
    description: "12 students qualified for national level science olympiad",
    icon: Trophy,
  },
  {
    year: "2022",
    title: "100% College Admission",
    description: "All graduating students secured admission in reputed colleges",
    icon: Target,
  },
  {
    year: "2022",
    title: "Excellence in Mathematics",
    description: "Recognized by district education board for outstanding math results",
    icon: BookOpen,
  },
]

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of Arjun Sharma",
    content:
      "My son's confidence and academic performance improved dramatically. The teachers here truly care about each student's progress.",
    rating: 5,
    improvement: "Mathematics: 65% → 92%",
  },
  {
    name: "Rajesh Kumar",
    role: "Parent of Anita Kumar",
    content:
      "The holistic approach to education here is remarkable. My daughter not only excels academically but also developed strong moral values.",
    rating: 5,
    improvement: "Overall Grade: B → A+",
  },
  {
    name: "Sunita Devi",
    role: "Parent of Vikash Singh",
    content:
      "The small class sizes and individual attention helped my son overcome his learning difficulties. Highly recommended!",
    rating: 5,
    improvement: "Science: 58% → 88%",
  },
]

const subjects = [
  { name: "Mathematics", improvement: "+45%", students: 120 },
  { name: "Science", improvement: "+38%", students: 115 },
  { name: "English", improvement: "+42%", students: 130 },
  { name: "Hindi", improvement: "+35%", students: 125 },
  { name: "Social Studies", improvement: "+40%", students: 110 },
]

export function ShriClassesResults() {
  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">Proven Results</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Academic Excellence & Success Stories
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our students consistently achieve outstanding results and develop into confident, well-rounded individuals
            ready for future challenges.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    stat.color === "text-yellow-600"
                      ? "bg-yellow-100"
                      : stat.color === "text-green-600"
                        ? "bg-green-100"
                        : stat.color === "text-blue-600"
                          ? "bg-blue-100"
                          : "bg-purple-100"
                  }`}
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subject-wise Performance */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Subject-wise Performance Improvement
          </h3>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-4">
                  {subjects.map((subject, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center mb-2 sm:mb-0">
                        <BookOpen className="w-5 h-5 text-green-600 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-900">{subject.name}</div>
                          <div className="text-sm text-gray-600">{subject.students} students</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                        <span className="text-lg font-bold text-green-600">{subject.improvement}</span>
                        <span className="text-sm text-gray-600 ml-1">average improvement</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievements Timeline */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Recent Achievements</h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex items-center sm:flex-col sm:items-center gap-3 sm:gap-2">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <achievement.icon className="w-6 h-6 text-green-600" />
                        </div>
                        <Badge variant="outline" className="border-green-200 text-green-700">
                          {achievement.year}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                        <p className="text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Parent Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 mb-2">{testimonial.role}</div>
                    <Badge variant="outline" className="border-green-200 text-green-700 text-xs">
                      {testimonial.improvement}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-0 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <CardContent className="p-8">
              <Trophy className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">Join Our Success Story</h3>
              <p className="mb-6 opacity-90">
                Give your child the opportunity to excel academically and develop strong character values.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                  View Detailed Results
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600"
                >
                  Schedule Counseling
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
