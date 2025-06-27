import { Card, CardContent } from "@/components/ui/card"
import { Home, BookOpen, Utensils, Dumbbell, Microscope, Wifi, Shield, Heart } from "lucide-react"
import Image from "next/image"

export function GurukulamFacilities() {
  const facilities = [
    {
      category: "Accommodation",
      icon: <Home className="w-8 h-8 text-blue-500" />,
      description: "Comfortable and safe residential facilities for students",
      features: [
        "Separate hostels for boys and girls",
        "4-6 students per room",
        "24/7 security and supervision",
        "Common areas for recreation",
        "Laundry and housekeeping services",
        "Medical room with first aid",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      category: "Academic Infrastructure",
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
      description: "Modern classrooms and learning spaces equipped with latest technology",
      features: [
        "Smart classrooms with projectors",
        "Well-stocked library with 5000+ books",
        "Computer lab with 30+ systems",
        "Science laboratories for all subjects",
        "Language lab for English proficiency",
        "Audio-visual room for presentations",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      category: "Dining & Nutrition",
      icon: <Utensils className="w-8 h-8 text-orange-500" />,
      description: "Nutritious and hygienic meals prepared with care and love",
      features: [
        "Vegetarian meals with local cuisine",
        "Balanced nutrition for growing children",
        "Clean and hygienic kitchen",
        "Special diet for health conditions",
        "Fresh fruits and vegetables",
        "Filtered drinking water",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      category: "Sports & Recreation",
      icon: <Dumbbell className="w-8 h-8 text-red-500" />,
      description: "Comprehensive sports facilities for physical development",
      features: [
        "Cricket and football grounds",
        "Badminton and table tennis courts",
        "Indoor games room",
        "Yoga and meditation hall",
        "Athletics track",
        "Swimming pool (planned)",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      category: "Laboratories",
      icon: <Microscope className="w-8 h-8 text-purple-500" />,
      description: "Well-equipped labs for hands-on learning and experimentation",
      features: [
        "Physics lab with modern equipment",
        "Chemistry lab with safety measures",
        "Biology lab with specimens",
        "Mathematics lab for practical learning",
        "Geography lab with maps and models",
        "Art and craft workshop",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      category: "Technology & Connectivity",
      icon: <Wifi className="w-8 h-8 text-indigo-500" />,
      description: "Modern technology infrastructure for digital learning",
      features: [
        "High-speed internet connectivity",
        "Wi-Fi enabled campus",
        "Digital learning platforms",
        "Online assessment tools",
        "Video conferencing facilities",
        "Educational software and apps",
      ],
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const safetyMeasures = [
    {
      title: "24/7 Security",
      description: "Round-the-clock security personnel and CCTV monitoring",
      icon: <Shield className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Medical Care",
      description: "On-campus medical facility with qualified nurse",
      icon: <Heart className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Fire Safety",
      description: "Fire extinguishers and emergency evacuation procedures",
      icon: <Shield className="w-6 h-6 text-orange-500" />,
    },
    {
      title: "Child Protection",
      description: "Strict child protection policies and background-verified staff",
      icon: <Shield className="w-6 h-6 text-green-500" />,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            <Home className="w-4 h-4 mr-2" />
            Campus Facilities
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            World-Class
            <span className="text-green-600 block">Infrastructure</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our campus provides a nurturing environment with modern facilities that support both academic excellence and
            holistic development of every student.
          </p>
          <p className="text-lg font-devanagari text-green-700 mt-2">गुरुकुलम</p>
        </div>

        {/* Facilities Grid */}
        <div className="space-y-16">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.category}
                    width={500}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                    {facility.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{facility.category}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{facility.description}</p>
                </div>

                <div className="grid gap-3">
                  {facility.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Safety & Security */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Safety & Security</h3>
            <p className="text-lg text-gray-600 font-devanagari">सुरक्षा और संरक्षा</p>
            <p className="text-gray-600 mt-2">Your child's safety is our top priority</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyMeasures.map((measure, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">{measure.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{measure.title}</h4>
                  <p className="text-sm text-gray-600">{measure.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
