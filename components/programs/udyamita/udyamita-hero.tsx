"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Lightbulb, TrendingUp, Users, Award, Target, Briefcase, ArrowRight, CheckCircle } from "lucide-react"

const stats = [
  {
    number: "200+",
    label: "Entrepreneurs Trained",
    icon: Users,
  },
  {
    number: "85%",
    label: "Success Rate",
    icon: TrendingUp,
  },
  {
    number: "50+",
    label: "Businesses Launched",
    icon: Briefcase,
  },
  {
    number: "₹2Cr+",
    label: "Revenue Generated",
    icon: Target,
  },
]

const highlights = [
  "Comprehensive business training program",
  "Mentorship from successful entrepreneurs",
  "Access to funding and investment opportunities",
  "Practical hands-on business experience",
  "Networking with industry professionals",
  "Government scheme guidance and support",
]

export function UdyamitaHero() {
  return (
    <section className="relative py-12 lg:py-20 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-500 rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-red-500 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-orange-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
                <Lightbulb className="w-4 h-4 mr-1" />
                Entrepreneurship Program
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Business Ideas
                </span>
                Into Reality
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Join Udyamita, our comprehensive entrepreneurship development program designed to nurture innovative
                minds and create successful business leaders in rural communities.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50">
                Download Brochure
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-600" />
                <span className="text-sm text-gray-600">Government Recognized</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-600" />
                <span className="text-sm text-gray-600">Expert Mentors</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-orange-600" />
                <span className="text-sm text-gray-600">Proven Results</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="space-y-6">
            {/* Main Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Innovation Hub</h3>
                      <p className="text-sm opacity-90">State-of-the-art facilities for business development</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">6-Month Program</h3>
                      <p className="text-sm text-gray-600">Intensive training with practical implementation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">Business Incubation</h3>
                      <p className="text-sm text-gray-600">Complete support from idea to market launch</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom Section - Next Batch Info */}
        <div className="mt-16 lg:mt-20">
          <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-r from-orange-600 to-red-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Next Batch Starting Soon!</h3>
              <p className="text-lg opacity-90 mb-6">
                Limited seats available for our upcoming entrepreneurship program. Register now to secure your spot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="secondary" className="bg-white/20 text-white border-0">
                    Batch Size: 25 Students
                  </Badge>
                  <Badge variant="secondary" className="bg-white/20 text-white border-0">
                    Duration: 6 Months
                  </Badge>
                </div>
                <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                  Register Interest
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
