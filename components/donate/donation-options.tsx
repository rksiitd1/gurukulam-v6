import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Sprout, Building2, Heart, Users, Zap } from "lucide-react"

export function DonationOptions() {
  const donationCategories = [
    {
      icon: GraduationCap,
      title: "Education Support",
      description: "Fund scholarships, books, and educational materials for underprivileged students",
      amounts: [500, 1000, 2500, 5000],
      impact: "₹1000 sponsors one student's books for a year",
      color: "from-blue-500 to-blue-600",
      popular: false,
    },
    {
      icon: Sprout,
      title: "Agriculture Development",
      description: "Support organic farming, seed distribution, and farmer training programs",
      amounts: [750, 1500, 3000, 7500],
      impact: "₹1500 provides organic seeds for 5 farmers",
      color: "from-green-500 to-green-600",
      popular: true,
    },
    {
      icon: Building2,
      title: "Infrastructure",
      description: "Build classrooms, libraries, and community centers in rural areas",
      amounts: [2000, 5000, 10000, 25000],
      impact: "₹10000 helps build one classroom",
      color: "from-orange-500 to-orange-600",
      popular: false,
    },
    {
      icon: Users,
      title: "Community Programs",
      description: "Support skill development, healthcare camps, and cultural activities",
      amounts: [300, 800, 2000, 5000],
      impact: "₹800 organizes one health camp for 50 people",
      color: "from-purple-500 to-purple-600",
      popular: false,
    },
    {
      icon: Zap,
      title: "Udyamita Program",
      description: "Fund entrepreneurship training and startup support for rural youth",
      amounts: [1000, 2500, 5000, 15000],
      impact: "₹5000 supports one entrepreneur's training",
      color: "from-red-500 to-red-600",
      popular: false,
    },
    {
      icon: Heart,
      title: "General Fund",
      description: "Support all our programs and let us allocate funds where needed most",
      amounts: [500, 1000, 2500, 10000],
      impact: "Flexible support for maximum impact",
      color: "from-pink-500 to-pink-600",
      popular: false,
    },
  ]

  const monthlyPlans = [
    {
      amount: 500,
      title: "Supporter",
      description: "Monthly support for basic needs",
      benefits: ["Monthly impact report", "Thank you certificate"],
    },
    {
      amount: 1500,
      title: "Champion",
      description: "Significant monthly contribution",
      benefits: ["Quarterly visit invitation", "Direct beneficiary updates", "Tax receipts"],
      popular: true,
    },
    {
      amount: 5000,
      title: "Patron",
      description: "Major monthly partnership",
      benefits: ["Annual recognition", "Program naming opportunity", "Direct communication with leadership"],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select a cause close to your heart and see exactly how your donation creates positive change
          </p>
        </div>

        {/* One-time Donations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">One-time Donations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationCategories.map((category, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-all duration-300 group">
                {category.popular && (
                  <Badge className="absolute -top-2 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-4`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-gray-600">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {category.amounts.map((amount, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        size="sm"
                        className="hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700"
                      >
                        ₹{amount.toLocaleString()}
                      </Button>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 mb-4 p-3 bg-gray-50 rounded-lg">
                    <strong>Impact:</strong> {category.impact}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                    Donate Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Monthly Donations */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Monthly Giving Plans</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {monthlyPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-lg transition-all duration-300 ${plan.popular ? "ring-2 ring-orange-500 scale-105" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    Recommended
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    ₹{plan.amount.toLocaleString()}
                    <span className="text-lg font-normal text-gray-500">/month</span>
                  </div>
                  <CardTitle className="text-xl">{plan.title}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    Start Monthly Giving
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Custom Amount */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to donate a custom amount?</h3>
            <p className="text-gray-600 mb-6">Every contribution, big or small, makes a meaningful difference</p>
            <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
              Enter Custom Amount
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
