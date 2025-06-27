import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      title: "IIT Delhi Professor",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Mukund's dedication to rural education is exemplary. His approach of combining modern curriculum with traditional values is exactly what India needs.",
      rating: 5,
      type: "mentor",
    },
    {
      name: "Priya Sharma",
      title: "Parent, Raghopur",
      image: "/placeholder.svg?height=80&width=80",
      content: "मेरे बेटे को गुरुकुल में बेहतरीन शिक्षा मिल रही है। यहाँ संस्कार के साथ-साथ आधुनिक विषयों की भी अच्छी पढ़ाई होती है।",
      rating: 5,
      type: "parent",
    },
    {
      name: "Amit Singh",
      title: "Former Student",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Golu sir changed my life. From a village boy with no hope, I'm now pursuing engineering. The values he taught will stay with me forever.",
      rating: 5,
      type: "student",
    },
    {
      name: "Sunita Devi",
      title: "Farmer, Supaul",
      image: "/placeholder.svg?height=80&width=80",
      content: "कृषि प्रशिक्षण से मेरी आय तीन गुना बढ़ गई है। जैविक खेती की तकनीक सीखकर मैं अब दूसरी महिलाओं को भी सिखाती हूँ।",
      rating: 5,
      type: "farmer",
    },
    {
      name: "Prof. Meera Gupta",
      title: "Delhi University",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The holistic development approach at Divya Bihar Mission is remarkable. It's creating well-rounded individuals who are both modern and rooted.",
      rating: 5,
      type: "mentor",
    },
    {
      name: "Ravi Kumar",
      title: "Volunteer",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Working with Mukund bhai has been transformative. His vision of education with yogic values is creating a new generation of conscious leaders.",
      rating: 5,
      type: "volunteer",
    },
  ]

  const getTypeColor = (type: string) => {
    const colors = {
      mentor: "bg-blue-100 text-blue-800",
      parent: "bg-green-100 text-green-800",
      student: "bg-orange-100 text-orange-800",
      farmer: "bg-emerald-100 text-emerald-800",
      volunteer: "bg-purple-100 text-purple-800",
    }
    return colors[type as keyof typeof colors] || colors.mentor
  }

  const getTypeLabel = (type: string) => {
    const labels = {
      mentor: "Mentor",
      parent: "Parent",
      student: "Student",
      farmer: "Farmer",
      volunteer: "Volunteer",
    }
    return labels[type as keyof typeof labels] || "Supporter"
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            <span className="mr-2">💬</span>
            Testimonials
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Voices of
            <span className="text-purple-600 block">Transformation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students, parents, mentors, and community members whose lives have been touched by our mission of
            education with yogic values and rural development.
          </p>
          <p className="text-lg font-devanagari text-purple-700 mt-2">परिवर्तन की आवाजें</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="w-8 h-8 text-purple-400" />
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(testimonial.type)}`}>
                    {getTypeLabel(testimonial.type)}
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>

                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Impact */}
        {/* Community Recognition section removed as per request */}
      </div>
    </section>
  )
}
