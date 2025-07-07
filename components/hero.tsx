import { Button } from "@/components/ui/button"
import { Play, Heart, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Pattern - responsive sizing */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 text-orange-600">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 10 L90 90 L10 90 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 w-10 h-10 sm:w-16 sm:h-16 text-green-600">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content - improved mobile spacing */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium">
                <span className="mr-2">🎓</span>
                From IIT Delhi to Bihar Villages
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Education with
                <span className="text-orange-600 block">Indian Values</span>
                <span className="text-green-700 block font-devanagari text-2xl sm:text-3xl lg:text-4xl mt-2">
                  भारतीय संस्कृति के साथ
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Empowering Bihar's rural youth through holistic education that blends modern learning with traditional
                Indian values. Join our mission to create self-reliant, culturally rooted communities.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                <p className="text-orange-800 font-devanagari text-base sm:text-lg">
                  "ग्रामे-ग्रामे सभाकार्या, ग्रामे-ग्रामे कथा शुभा"
                </p>
                <p className="text-orange-700 text-xs sm:text-sm mt-1">- Mahamana Madan Mohan Malaviya</p>
              </div>
            </div>

            {/* Quick Stats - responsive grid */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-orange-600">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Students Educated</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-green-600">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Villages Reached</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">100+</div>
                <div className="text-xs sm:text-sm text-gray-600">Acres Preserved</div>
              </div>
            </div>
          </div>

          {/* Image - responsive sizing and positioning */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Mukund Agarwal teaching village children"
                width={500}
                height={600}
                className="w-full h-64 sm:h-80 lg:h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <p className="text-xs sm:text-sm font-medium text-gray-900">
                    Every child deserves education rooted in our cultural values
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Elements - responsive positioning */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-orange-500 text-white p-2 sm:p-3 rounded-full shadow-lg">
              <span className="text-lg sm:text-2xl">🕉️</span>
            </div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-green-500 text-white p-2 sm:p-3 rounded-full shadow-lg">
              <span className="text-lg sm:text-2xl">🌱</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
