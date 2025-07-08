import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote, GraduationCap, Sprout, TrendingUp } from "lucide-react"

export function ImpactStories() {
  const stories = [
    {
      icon: GraduationCap,
      category: "Education",
      title: "From Village to Engineering College",
      story:
        "Priya, a farmer's daughter from Raghopur, received scholarship support through our education program. Today, she's pursuing Computer Science Engineering and dreams of developing technology solutions for rural communities.",
      donor: "Supported by monthly donors",
      amount: "₹15,000 scholarship",
      image: "/placeholder.svg?height=300&width=400",
      color: "bg-blue-100 text-blue-800",
    },
    {
      icon: Sprout,
      category: "Agriculture",
      title: "Organic Farming Success Story",
      story:
        "Ram Prasad switched to organic farming with our support and training. His income increased by 40% in the first year, and he now trains other farmers in sustainable agriculture practices.",
      donor: "Funded by agriculture donors",
      amount: "₹8,000 initial support",
      image: "/placeholder.svg?height=300&width=400",
      color: "bg-green-100 text-green-800",
    },
    {
      icon: TrendingUp,
      category: "Entrepreneurship",
      title: "Women's Self-Help Group Success",
      story:
        "Sunita started a small tailoring business with micro-credit from our Udyamita program. She now employs 5 women from her village and has expanded to handicrafts and food processing.",
      donor: "Supported by Udyamita donors",
      amount: "₹12,000 business loan",
      image: "/placeholder.svg?height=300&width=400",
      color: "bg-purple-100 text-purple-800",
    },
  ]

  const impactNumbers = [
    { number: "₹2.5 Cr", label: "Total Donations Received", sublabel: "Since 2018" },
    { number: "95%", label: "Direct Program Spending", sublabel: "Only 5% admin costs" },
    { number: "2,500+", label: "Lives Directly Impacted", sublabel: "Across all programs" },
    { number: "15+", label: "Villages Transformed", sublabel: "In Supaul district" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Donations in Action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how your contributions are creating real, lasting change in rural Bihar communities
          </p>
        </div>

        {/* Impact Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {impactNumbers.map((item, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-orange-600 mb-2">{item.number}</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{item.label}</div>
                <div className="text-xs text-gray-500">{item.sublabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className={`absolute top-4 left-4 ${story.color}`}>
                  <story.icon className="w-3 h-3 mr-1" />
                  {story.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{story.title}</h3>

                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-orange-300" />
                  <p className="text-gray-600 leading-relaxed pl-4 italic">"{story.story}"</p>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">{story.donor}</span>
                    <span className="font-semibold text-orange-600">{story.amount}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Be Part of the Next Success Story</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Your donation today could be the catalyst that transforms someone's life tomorrow. Join our community of
              changemakers and see your impact unfold.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                Start Your Impact Journey
              </button>
              <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-all">
                View More Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
