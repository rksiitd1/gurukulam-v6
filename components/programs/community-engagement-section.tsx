import { Users, Heart, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CommunityEngagementSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            Community Engagement & Open Learning
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Rooted in Community, <span className="text-orange-600">Open to All</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe education thrives when it is woven into the fabric of the community. Our approach is open, inclusive, and nurturing—welcoming every learner and family with warmth and support.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Community Engagement */}
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8 text-center space-y-4">
              <div className="flex justify-center"><Users className="w-8 h-8 text-green-500" /></div>
              <h3 className="text-2xl font-bold text-gray-900">Community Engagement</h3>
              <p className="text-gray-700 leading-relaxed">
                Our programs are deeply rooted in the community. We collaborate with local leaders and families to identify children who can benefit from our holistic education. Outreach camps, village visits, and cultural events help us connect and welcome new learners.
              </p>
            </CardContent>
          </Card>

          {/* Support & Guidance */}
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8 text-center space-y-4">
              <div className="flex justify-center"><Heart className="w-8 h-8 text-red-500" /></div>
              <h3 className="text-2xl font-bold text-gray-900">Support & Guidance</h3>
              <p className="text-gray-700 leading-relaxed">
                Every new student is welcomed into a nurturing environment, with mentors and teachers guiding them at every step. We believe in hand-holding, not gatekeeping—ensuring every child and family feels at home from day one.
              </p>
            </CardContent>
          </Card>

          {/* Open Learning Philosophy */}
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8 text-center space-y-4">
              <div className="flex justify-center"><BookOpen className="w-8 h-8 text-orange-500" /></div>
              <h3 className="text-2xl font-bold text-gray-900">Open Learning Philosophy</h3>
              <p className="text-gray-700 leading-relaxed">
                Learning at our Gurukulam is a lifelong journey. We encourage curiosity, creativity, and participation from all, regardless of background. There are no entrance exams or barriers—just a shared commitment to learning, service, and community.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action & Quote */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto">
              Join Our Community
            </Button>
            <a href="/about#mentors" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="border-green-600 text-green-700 hover:bg-green-50 w-full sm:w-auto">
                Meet Our Mentors
              </Button>
            </a>
          </div>
          <div className="mt-10 max-w-2xl mx-auto bg-white/80 rounded-xl p-6 shadow">
            <blockquote className="text-lg italic text-gray-800 mb-2">
              "Education is the power that can transform society."
            </blockquote>
            <cite className="text-orange-700 font-semibold">- Mukund Agarwal, Founder</cite>
          </div>
        </div>
      </div>
    </section>
  )
} 