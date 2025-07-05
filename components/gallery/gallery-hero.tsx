import { Button } from "@/components/ui/button"
import { Camera, Video, Calendar, Users } from "lucide-react"
import Image from "next/image"

export function GalleryHero() {

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-24 h-24 text-purple-600">
          <Camera className="w-full h-full" />
        </div>
        <div className="absolute bottom-10 right-10 w-20 h-20 text-blue-600">
          <Video className="w-full h-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                <Camera className="w-4 h-4 mr-2" />
                Visual Journey
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Moments of
                <span className="text-purple-600 block">Transformation</span>
                <span className="text-green-700 block font-devanagari text-3xl lg:text-4xl mt-2">परिवर्तन के पल</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Witness the journey of rural transformation through our comprehensive gallery. From classroom moments to
                cultural celebrations, from agricultural innovations to student achievements - every image tells a story
                of hope and progress.
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <blockquote className="text-purple-800 font-devanagari text-xl mb-2">
                  "हर तस्वीर एक कहानी कहती है"
                </blockquote>
                <p className="text-purple-700 italic">"Every picture tells a story, every video shows a dream"</p>
              </div>
            </div>


          </div>

          {/* Featured Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Students in classroom"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white text-sm font-medium">Classroom Learning</div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=250&width=300"
                    alt="Cultural program"
                    width={300}
                    height={250}
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white text-sm font-medium">Cultural Programs</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=250&width=300"
                    alt="Agricultural training"
                    width={300}
                    height={250}
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white text-sm font-medium">Farm Training</div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Community gathering"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white text-sm font-medium">Community Events</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-purple-500 text-white p-3 rounded-full shadow-lg">
              <span className="text-xl">📸</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg">
              <span className="text-xl">🎥</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
