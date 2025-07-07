import { Button } from "@/components/ui/button"
import { GraduationCap, Heart, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AboutHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-orange-50 to-green-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 text-orange-600">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 20 L80 80 L20 80 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-20 w-24 h-24 text-green-600">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="30" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                <GraduationCap className="w-4 h-4 mr-2" />
                About Our Founder
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Meet
                <span className="text-orange-600 block">Shri Mukund Agrawal</span>
                <span className="text-green-700 block font-devanagari text-3xl lg:text-4xl mt-2">श्री मुकुंद अग्रवाल</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                An IIT Delhi alumnus who chose service over success, returning to his roots in Bihar to transform rural
                education and empower communities through dharmic values and modern learning.
              </p>

              <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                <blockquote className="text-orange-800 font-devanagari text-xl mb-2">
                  "शिक्षा ही वह शक्ति है जो समाज को बदल सकती है"
                </blockquote>
                <p className="text-orange-700 italic">"Education is the power that can transform society"</p>
                <cite className="text-orange-600 font-medium mt-2 block">- Mukund Agrawal</cite>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-8 h-8 text-blue-500" />
                  <div>
                    <div className="font-semibold text-gray-900">IIT Delhi</div>
                    <div className="text-sm text-gray-600">B.Tech 2013-2017</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-8 h-8 text-green-500" />
                  <div>
                    <div className="font-semibold text-gray-900">Raghopur</div>
                    <div className="text-sm text-gray-600">Supaul, Bihar</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <Heart className="w-8 h-8 text-red-500" />
                  <div>
                    <div className="font-semibold text-gray-900">Since 2018</div>
                    <div className="text-sm text-gray-600">Serving Bihar</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/donate">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  <Heart className="w-5 h-5 mr-2" />
                  Support Our Mission
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                Read Full Story
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=700&width=600"
                alt="Mukund Agrawal teaching students in village classroom"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

              {/* Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-medium text-gray-900 mb-1">"Golu Sir" - as lovingly called by students</p>
                  <p className="text-xs text-gray-600">Teaching mathematics to village children in Raghopur</p>
                </div>
              </div>
            </div>

            {/* Floating Achievement Cards */}
            <div className="absolute -top-6 -right-6 bg-blue-500 text-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs">Students</div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-green-500 text-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">6+</div>
                <div className="text-xs">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
