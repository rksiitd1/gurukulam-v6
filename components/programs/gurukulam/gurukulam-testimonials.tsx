import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export function GurukulamTestimonials() {
  const testimonials = [
    {
      name: "Priya Kumari",
      role: "Class 12 Graduate",
      year: "2023",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Divya Bihar Global Gurukulam gave me not just education but values that will guide me throughout life. The teachers here are like family, and the environment helped me grow both academically and personally.",
      achievement: "Secured admission in NIT Patna",
      rating: 5,
    },
    {
      name: "Smt. Sunita Devi",
      role: "Parent",
      year: "Current Parent",
      image: "/placeholder.svg?height=100&width=100",
      content: "मैं अपने बेटे को यहाँ भेजकर बहुत खुश हूँ। यहाँ पढ़ाई के साथ-साथ संस्कार भी मिलते हैं। मेरा बच्चा यहाँ आकर बहुत अच्छा बना है।",
      achievement: "Son improved from 60% to 85% marks",
      rating: 5,
    },
    {
      name: "Raj Kumar Singh",
      role: "Class 10 Graduate",
      year: "2022",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The hostel life taught me independence and discipline. The teachers always encouraged us to ask questions and think critically. I'm grateful for the strong foundation I received here.",
      achievement: "Scored 95% in Class 10 boards",
      rating: 5,
    },
    {
      name: "Shri Ramesh Prasad",
      role: "Parent",
      year: "Alumni Parent",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "My daughter studied here for 8 years. The transformation I saw in her was remarkable. She became confident, respectful, and academically excellent. Now she's pursuing engineering.",
      achievement: "Daughter is now in IIT Kharagpur",
      rating: 5,
    },
    {
      name: "Anita Sharma",
      role: "Class 11 Student",
      year: "Current Student",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The best part about our Gurukulam is the family atmosphere. Seniors help juniors, teachers are always available, and we learn so much beyond textbooks through cultural programs.",
      achievement: "School Cultural Program Leader",
      rating: 5,
    },
    {
      name: "Dr. Manoj Kumar",
      role: "Local Doctor & Parent",
      year: "Parent",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "As a doctor, I appreciate the holistic approach to child development here. The emphasis on physical fitness, mental well-being, and moral values alongside academics is commendable.",
      achievement: "Son excelling in both studies and sports",
      rating: 5,
    },
  ]

  const successStories = [
    {
      name: "Vikash Kumar",
      achievement: "IIT Delhi - Computer Science",
      year: "2021 Graduate",
      story: "From a village with no internet to coding at IIT Delhi",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Kavita Singh",
      achievement: "AIIMS Patna - MBBS",
      year: "2022 Graduate",
      story: "First doctor from her village, now serving rural communities",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Deepak Raj",
      achievement: "CA Finalist",
      year: "2020 Graduate",
      story: "Managing family business with professional expertise",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Meera Gupta",
      achievement: "Delhi University - English Honors",
      year: "2023 Graduate",
      story: "Pursuing journalism to tell stories of rural India",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Quote className="w-4 h-4 mr-2" />
            Student & Parent Testimonials
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Voices of Our
            <span className="text-blue-600 block">Gurukulam Family</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students, parents, and alumni about their transformative journey at Divya Bihar Gurukulam and
            how it shaped their lives and futures.
          </p>
          <p className="text-lg font-devanagari text-blue-700 mt-2">हमारे गुरुकुलम परिवार की आवाजें</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="w-8 h-8 text-blue-400" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>

                {/* Achievement */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm font-medium text-green-800">{testimonial.achievement}</p>
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
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-blue-600">{testimonial.year}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Alumni Success Stories</h3>
            <p className="text-lg text-gray-600 font-devanagari">पूर्व छात्रों की सफलता की कहानियां</p>
            <p className="text-gray-600 mt-2">Where our graduates are making a difference today</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successStories.map((story, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="font-semibold text-gray-900 mb-2">{story.name}</h4>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {story.achievement}
                  </div>
                  <p className="text-sm text-gray-600 italic mb-2">"{story.story}"</p>
                  <p className="text-xs text-gray-500">{story.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Student Satisfaction Statistics</h3>
            <p className="opacity-90 font-devanagari">छात्र संतुष्टि आंकड़े</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Parent Satisfaction</div>
              <div className="text-xs opacity-75">Based on annual surveys</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-90">Board Pass Rate</div>
              <div className="text-xs opacity-75">Class 10 & 12 combined</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-sm opacity-90">College Admissions</div>
              <div className="text-xs opacity-75">Higher education success</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-sm opacity-90">Overall Rating</div>
              <div className="text-xs opacity-75">Student & parent feedback</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
