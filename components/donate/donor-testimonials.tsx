import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote, Star, Heart, Users } from "lucide-react"

export function DonorTestimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai, Maharashtra",
      donorSince: "2020",
      donationType: "Monthly Donor",
      amount: "₹2,500/month",
      testimonial:
        "Supporting Divya Bihar Mission has been one of my most fulfilling decisions. Seeing the quarterly reports and knowing exactly how my contribution is helping rural students pursue education gives me immense satisfaction. The transparency is remarkable.",
      impact: "Sponsored 3 students' education",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Priya Sharma",
      location: "Delhi, NCR",
      donorSince: "2019",
      donationType: "Annual Donor",
      amount: "₹50,000/year",
      testimonial:
        "As someone who believes in sustainable development, I'm impressed by their agriculture program. The organic farming initiatives and farmer training programs are creating real change in Bihar's rural economy.",
      impact: "Supported 15 farmers transition to organic",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Dr. Amit Verma",
      location: "Bangalore, Karnataka",
      donorSince: "2021",
      donationType: "Program Sponsor",
      amount: "₹1,00,000",
      testimonial:
        "The Udyamita program aligns perfectly with my vision of rural entrepreneurship. I've seen firsthand how the training and micro-credit support is helping young people start their own businesses and become job creators.",
      impact: "Enabled 8 entrepreneurs to start businesses",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Sunita Agarwal",
      location: "Pune, Maharashtra",
      donorSince: "2022",
      donationType: "One-time Donor",
      amount: "₹25,000",
      testimonial:
        "I donated for infrastructure development and was amazed to receive photos and updates of the actual classroom being built. This level of transparency and accountability is rare in the NGO sector.",
      impact: "Helped build 1 classroom",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Corporate Donor",
      location: "Gurgaon, Haryana",
      donorSince: "2020",
      donationType: "CSR Partner",
      amount: "₹5,00,000/year",
      testimonial:
        "As part of our CSR initiatives, we've been supporting the education program. The detailed impact reports and regular site visits have convinced us that this is one of the most effective organizations we partner with. Their focus on measurable outcomes aligns with our corporate values.",
      impact: "Sponsored 50+ students annually",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Meera Joshi",
      location: "Chennai, Tamil Nadu",
      donorSince: "2023",
      donationType: "Monthly Donor",
      amount: "₹1,000/month",
      testimonial:
        "Even though my contribution is modest, I feel like I'm part of something bigger. The monthly updates and success stories keep me motivated to continue supporting this wonderful mission.",
      impact: "Part of community support network",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const donorStats = [
    { number: "1,200+", label: "Active Donors", sublabel: "Growing community" },
    { number: "87%", label: "Donor Retention", sublabel: "Return donors" },
    { number: "4.9/5", label: "Satisfaction Rating", sublabel: "Based on surveys" },
    { number: "₹2.5 Cr", label: "Total Raised", sublabel: "Since inception" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5 text-orange-600" />
            <span className="text-orange-800 font-semibold">Donor Stories</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Donors Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a community of changemakers who are transforming lives in rural Bihar. Here's what our donors have to
            say about their experience.
          </p>
        </div>

        {/* Donor Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {donorStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.sublabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-orange-300" />
                  <p className="text-gray-600 leading-relaxed pl-4 italic">"{testimonial.testimonial}"</p>
                </div>

                {/* Impact */}
                <div className="bg-orange-50 p-3 rounded-lg mb-4">
                  <div className="text-sm font-semibold text-orange-800 mb-1">Impact Created:</div>
                  <div className="text-sm text-orange-700">{testimonial.impact}</div>
                </div>

                {/* Donor Info */}
                <div className="flex items-center space-x-3 border-t pt-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                    <div className="text-xs text-orange-600 font-medium">
                      {testimonial.donationType} • Since {testimonial.donorSince}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-900">{testimonial.amount}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Donor Community CTA */}
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Donor Community</h3>
            <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">
              Become part of a passionate community of donors who are creating lasting change. Get regular updates,
              connect with fellow donors, and see your impact firsthand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
              >
                <Heart className="w-5 h-5 mr-2" />
                Start Your Giving Journey
              </Button>
              <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                Connect with Donors
              </Button>
            </div>

            <div className="mt-6 text-sm text-gray-500">Join 1,200+ donors who are already making a difference</div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/60 backdrop-blur-sm rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Verified Reviews</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Regular Updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Impact Tracking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
