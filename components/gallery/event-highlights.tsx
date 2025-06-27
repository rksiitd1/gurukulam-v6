import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Users, Camera } from "lucide-react"
import Image from "next/image"

export function EventHighlights() {
  const events = [
    {
      id: 1,
      title: "Annual Convocation 2024",
      date: "March 15, 2024",
      location: "Divya Bihar Global Gurukulam Campus",
      attendees: "200+",
      description: "Celebrating the achievements of our graduating students with awards and recognition ceremonies.",
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
      highlights: [
        "95% pass rate in Class 12",
        "50 students received scholarships",
        "Cultural performances by students",
        "Guest lecture by IIT Delhi professor",
      ],
      category: "Academic",
    },
    {
      id: 2,
      title: "Saraswati Puja Mahotsav",
      date: "February 14, 2024",
      location: "Multiple Village Centers",
      attendees: "500+",
      description:
        "Grand celebration of Saraswati Puja with traditional rituals, cultural programs, and community feast.",
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
      highlights: [
        "Traditional puja rituals",
        "Classical dance performances",
        "Sanskrit recitation competition",
        "Community feast for 1000+ people",
      ],
      category: "Cultural",
    },
    {
      id: 3,
      title: "Kisan Mela & Agriculture Fair",
      date: "January 20, 2024",
      location: "Demonstration Farm, Pirpainti",
      attendees: "300+",
      description:
        "Farmers' fair showcasing organic farming techniques, indigenous seeds, and sustainable agriculture practices.",
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
      highlights: [
        "Organic farming demonstrations",
        "Indigenous seed distribution",
        "Cattle breeding workshop",
        "Best farmer awards",
      ],
      category: "Agriculture",
    },
    {
      id: 4,
      title: "Women's Empowerment Summit",
      date: "December 10, 2023",
      location: "Community Hall, Raghopur",
      attendees: "150+",
      description: "Empowering rural women through skill development workshops and entrepreneurship training programs.",
      images: [
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
        "/placeholder.svg?height=300&width=400",
      ],
      highlights: [
        "Handicraft skill workshops",
        "Micro-finance training",
        "Success story presentations",
        "Self-help group formations",
      ],
      category: "Empowerment",
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      Academic: "bg-blue-100 text-blue-800",
      Cultural: "bg-orange-100 text-orange-800",
      Agriculture: "bg-green-100 text-green-800",
      Empowerment: "bg-purple-100 text-purple-800",
    }
    return colors[category as keyof typeof colors] || colors.Academic
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            Event Highlights
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Memorable
            <span className="text-orange-600 block">Celebrations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From academic achievements to cultural festivals, from agricultural fairs to community gatherings - witness
            the vibrant life of our mission through major events and celebrations.
          </p>
          <p className="text-lg font-devanagari text-orange-700 mt-2">यादगार उत्सव और कार्यक्रम</p>
        </div>

        {/* Events Grid */}
        <div className="space-y-16">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`${index % 2 === 1 ? "lg:flex-row-reverse" : ""} lg:flex gap-12 items-start`}
            >
              {/* Event Images */}
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="grid grid-cols-2 gap-4">
                  {event.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className={`relative overflow-hidden rounded-xl shadow-lg ${
                        imageIndex === 0 ? "col-span-2 h-64" : "h-32"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${event.title} - Image ${imageIndex + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      {imageIndex === 0 && (
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="flex items-center space-x-2 text-sm">
                            <Camera className="w-4 h-4" />
                            <span>{event.images.length} Photos</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Details */}
              <div className="lg:w-1/2">
                <Card className="h-full">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Event Header */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}
                          >
                            {event.category}
                          </span>
                          <div className="text-sm text-gray-500">{event.date}</div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{event.description}</p>
                      </div>

                      {/* Event Meta */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <MapPin className="w-4 h-4 text-orange-500" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Users className="w-4 h-4 text-blue-500" />
                          <span>{event.attendees} Attendees</span>
                        </div>
                      </div>

                      {/* Event Highlights */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Event Highlights:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {event.highlights.map((highlight, highlightIndex) => (
                            <div key={highlightIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm text-gray-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* View More Button */}
                      <div className="pt-4 border-t border-gray-100">
                        <button className="text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors">
                          View Complete Photo Album →
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="mt-20 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Upcoming Events</h3>
            <p className="text-gray-600 font-devanagari">आगामी कार्यक्रम</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Annual Sports Day</h4>
                <p className="text-sm text-gray-600 mb-2">Inter-village sports competition</p>
                <p className="text-xs text-blue-600 font-medium">April 15, 2024</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Science Exhibition</h4>
                <p className="text-sm text-gray-600 mb-2">Student innovation showcase</p>
                <p className="text-xs text-green-600 font-medium">May 20, 2024</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Guru Purnima</h4>
                <p className="text-sm text-gray-600 mb-2">Teacher appreciation ceremony</p>
                <p className="text-xs text-orange-600 font-medium">July 21, 2024</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
