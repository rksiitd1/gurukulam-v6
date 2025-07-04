import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function CallToAction() {
  const donationOptions = [
    {
      amount: "₹500",
      description: "Sponsors one student for a month",
      impact: "Monthly education support",
    },
    {
      amount: "₹2,000",
      description: "Provides books and materials for 5 students",
      impact: "Educational resources",
    },
    {
      amount: "₹5,000",
      description: "Supports a farmer training program",
      impact: "Sustainable livelihood",
    },
    {
      amount: "₹10,000",
      description: "Funds a complete scholarship for one year",
      impact: "Full year education",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Be Part of the
            <span className="block text-yellow-300">Transformation</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-4">
            Your support can change lives, preserve culture, and build a self-reliant Bihar. Join our mission to create
            educated, empowered, and culturally rooted communities.
          </p>
          <p className="text-lg font-devanagari opacity-90">आपका दान बदल सकता है हजारों जिंदगियां</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Donation Options */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Choose Your Impact</h3>
            <div className="grid gap-4">
              {donationOptions.map((option, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all"
                >
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-xl font-bold text-yellow-300">{option.amount}</div>
                      <div className="text-sm opacity-90">{option.description}</div>
                      <div className="text-xs opacity-75 mt-1">{option.impact}</div>
                    </div>
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                      <Link href="/donate">Donate</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h4 className="font-semibold mb-3">Tax Benefits</h4>
              <p className="text-sm opacity-90 mb-2">
                Donations are eligible for 80G tax exemption under Income Tax Act.
              </p>
              <p className="text-xs opacity-75">Registration: 12A & 80G certified organization</p>
            </div>
          </div>

          {/* Ways to Help */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Other Ways to Help</h3>
              <div className="space-y-4">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Users className="w-8 h-8 text-yellow-300 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Volunteer</h4>
                      <p className="text-sm opacity-90">
                        Join our team as a teacher, mentor, or program coordinator. Share your skills to empower rural
                        communities.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Heart className="w-8 h-8 text-yellow-300 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Sponsor a Child</h4>
                      <p className="text-sm opacity-90">
                        Provide complete educational support for a village child. Get regular updates on their progress
                        and achievements.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Mail className="w-8 h-8 text-yellow-300 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Spread the Word</h4>
                      <p className="text-sm opacity-90">
                        Share our mission with friends and family. Follow us on social media and help us reach more
                        supporters.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h4 className="font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm">+91 92625 36295 </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-300" />
                  <span className="text-sm">divyabiharmission@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-lg opacity-90 mb-6">
              Every contribution, no matter how small, creates ripples of positive change.
            </p>
            <p className="font-devanagari text-lg opacity-90 mb-8">छोटा दान भी बड़ा परिवर्तन लाता है</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold" asChild>
                <Link href="/donate">
                  <Heart className="w-5 h-5 mr-2" />
                  Donate Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white hover:bg-white/10 text-slate-500">
                <Link href="/volunteer">
                  <Users className="w-5 h-5 mr-2" />
                  Join as Volunteer
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
