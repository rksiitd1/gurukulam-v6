"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Lightbulb,
  TrendingUp,
  Users,
  Briefcase,
  Target,
  DollarSign,
  BookOpen,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
} from "lucide-react"

const programs = [
  {
    title: "Business Ideation & Planning",
    duration: "4 weeks",
    level: "Foundation",
    icon: Lightbulb,
    description: "Transform your ideas into viable business concepts with comprehensive planning.",
    topics: [
      "Idea generation and validation",
      "Market research and analysis",
      "Business model development",
      "Competitive analysis",
      "SWOT analysis",
      "Business plan creation",
    ],
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Financial Management & Funding",
    duration: "3 weeks",
    level: "Intermediate",
    icon: DollarSign,
    description: "Master financial planning, budgeting, and explore various funding options.",
    topics: [
      "Financial planning and budgeting",
      "Cash flow management",
      "Investment and funding options",
      "Government schemes and subsidies",
      "Loan application process",
      "Financial risk management",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Marketing & Sales Strategy",
    duration: "3 weeks",
    level: "Intermediate",
    icon: TrendingUp,
    description: "Develop effective marketing strategies and sales techniques for your business.",
    topics: [
      "Digital marketing fundamentals",
      "Brand building and positioning",
      "Customer acquisition strategies",
      "Sales funnel development",
      "Social media marketing",
      "Content marketing",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Operations & Supply Chain",
    duration: "2 weeks",
    level: "Advanced",
    icon: Target,
    description: "Streamline operations and build efficient supply chain networks.",
    topics: [
      "Operations management",
      "Supply chain optimization",
      "Quality control systems",
      "Inventory management",
      "Vendor relationship management",
      "Process automation",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Legal & Compliance",
    duration: "2 weeks",
    level: "Foundation",
    icon: BookOpen,
    description: "Understand legal requirements and compliance for business operations.",
    topics: [
      "Business registration process",
      "Tax obligations and GST",
      "Labor laws and regulations",
      "Intellectual property rights",
      "Contracts and agreements",
      "Compliance management",
    ],
    color: "from-red-500 to-rose-500",
  },
  {
    title: "Leadership & Team Building",
    duration: "2 weeks",
    level: "Advanced",
    icon: Users,
    description: "Develop leadership skills and learn effective team management.",
    topics: [
      "Leadership development",
      "Team building strategies",
      "Communication skills",
      "Conflict resolution",
      "Performance management",
      "Organizational culture",
    ],
    color: "from-indigo-500 to-purple-500",
  },
]

const specializations = [
  {
    title: "Agriculture & Food Processing",
    icon: Briefcase,
    description: "Focus on agri-business, food processing, and rural market opportunities",
    duration: "Additional 4 weeks",
  },
  {
    title: "Technology & Innovation",
    icon: Zap,
    description: "Leverage technology for business growth and digital transformation",
    duration: "Additional 4 weeks",
  },
  {
    title: "Social Entrepreneurship",
    icon: Award,
    description: "Create businesses that solve social problems and create impact",
    duration: "Additional 4 weeks",
  },
]

const features = [
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "One-on-one guidance from successful entrepreneurs",
  },
  {
    icon: Briefcase,
    title: "Real Projects",
    description: "Work on actual business cases and live projects",
  },
  {
    icon: TrendingUp,
    title: "Market Access",
    description: "Connect with potential customers and partners",
  },
  {
    icon: DollarSign,
    title: "Funding Support",
    description: "Assistance in securing loans and investments",
  },
]

export function UdyamitaPrograms() {
  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Comprehensive Training</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Udyamita Program Modules</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our structured 6-month program covers all aspects of entrepreneurship, from ideation to business launch and
            scaling.
          </p>
        </div>

        {/* Program Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 lg:mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Programs */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Core Program Modules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${program.color} rounded-full flex items-center justify-center`}
                    >
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-1">
                        {program.duration}
                      </Badge>
                      <div className="text-xs text-gray-500">{program.level}</div>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {program.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{program.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-4">
                    {program.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group-hover:bg-orange-50 group-hover:border-orange-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Specialization Tracks</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-orange-50"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <spec.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{spec.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{spec.description}</p>
                  <Badge variant="outline" className="border-orange-300 text-orange-700">
                    <Clock className="w-3 h-3 mr-1" />
                    {spec.duration}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Program Timeline */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Program Timeline</h3>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">1-2</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Foundation Phase</h4>
                    <p className="text-sm text-gray-600">Business ideation, planning, and legal compliance</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">3-4</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Development Phase</h4>
                    <p className="text-sm text-gray-600">Financial management, marketing, and operations</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">5-6</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Launch Phase</h4>
                    <p className="text-sm text-gray-600">Leadership development and business launch</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-0 bg-gradient-to-r from-orange-600 to-red-600 text-white">
            <CardContent className="p-8">
              <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Entrepreneurial Journey?</h3>
              <p className="mb-6 opacity-90">
                Join our comprehensive program and transform your business ideas into successful ventures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
                  Apply for Program
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-600"
                >
                  Download Curriculum
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
