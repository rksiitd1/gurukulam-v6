"use client"
import {
  Phone,
  MapPin,
  Navigation,
  Train,
  Heart,
  Star,
  Sparkles,
  BookOpen,
  Users,
  Lightbulb,
  Plane,
} from "lucide-react"
import Image from "next/image"

export function ContactHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-10 left-10 w-20 h-20 text-green-300 animate-pulse">
          <Heart className="w-full h-full" />
        </div>
        <div className="absolute bottom-10 right-80 w-56 h-56 text-cyan-400 animate-pulse opacity-20 transform scale-x-[-1]">
          <Plane className="w-full h-full" />
        </div>
        <div className="absolute bottom-10 right-10 w-24 h-24 text-blue-300 animate-bounce">
          <Train className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 text-purple-300 animate-pulse">
          <Star className="w-full h-full" />
        </div>
        <div className="absolute top-20 right-1/4 w-12 h-12 text-pink-300 animate-bounce">
          <Sparkles className="w-full h-full" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 w-14 h-14 text-yellow-300 animate-pulse">
          <Navigation className="w-full h-full" />
        </div>

        {/* Additional cute designs to fill blank spaces */}
        <div className="absolute top-1/3 right-10 w-10 h-10 text-indigo-300 animate-pulse">
          <BookOpen className="w-full h-full" />
        </div>
        <div className="absolute bottom-20 left-20 w-12 h-12 text-teal-300 animate-bounce">
          <Users className="w-full h-full" />
        </div>
        <div className="absolute top-2/3 left-10 w-8 h-8 text-orange-300 animate-pulse">
          <Lightbulb className="w-full h-full" />
        </div>
        <div className="absolute top-40 left-1/2 w-6 h-6 text-rose-300 animate-bounce">
          <Heart className="w-full h-full" />
        </div>
        <div className="absolute bottom-40 right-1/3 w-10 h-10 text-cyan-300 animate-pulse">
          <Star className="w-full h-full" />
        </div>

        {/* Floating circles */}
        <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-green-200 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 left-1/5 w-6 h-6 bg-blue-200 rounded-full animate-float-delayed"></div>
        <div className="absolute top-3/4 right-1/5 w-10 h-10 bg-purple-200 rounded-full animate-float"></div>
        <div className="absolute top-1/5 left-2/3 w-4 h-4 bg-pink-200 rounded-full animate-float"></div>
        <div className="absolute bottom-1/5 left-1/2 w-7 h-7 bg-yellow-200 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/6 w-5 h-5 bg-indigo-200 rounded-full animate-float"></div>

        {/* Decorative lines and shapes */}
        <div className="absolute top-1/4 left-1/2 w-20 h-1 bg-gradient-to-r from-green-200 to-blue-200 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-16 h-1 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full animate-pulse"></div>
        <div className="absolute top-3/5 left-1/6 w-12 h-1 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full animate-pulse"></div>

        {/* Bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-300 via-blue-300 to-purple-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="w-4 h-4 mr-2 animate-pulse" />
                Get in Touch
                <Sparkles className="w-4 h-4 ml-2 text-purple-600" />
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Connect with
                <span className="text-green-600 block relative">
                  Our Mission
                  <div className="absolute -top-2 -right-2 w-6 h-6 text-pink-400">
                    <Heart className="w-full h-full animate-pulse" />
                  </div>
                </span>
                <span className="text-blue-700 block font-devanagari text-3xl lg:text-4xl mt-2">हमसे जुड़ें</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                We're here to answer your questions, provide information about our programs, and help you become part of
                our mission to transform rural education in Bihar. Reach out to us anytime!
              </p>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 rounded-r-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <blockquote className="text-green-800 font-devanagari text-xl mb-2 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-500" />
                  "संपर्क में रहें, साथ चलें, समाज को बदलें"
                </blockquote>
                <p className="text-green-700 italic">"Stay connected, walk together, transform society"</p>
              </div>
            </div>

            {/* Visit Us Card */}
            <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50/30 backdrop-blur-lg rounded-lg p-10 shadow-2xl border-l-4 border-t-4 border-blue-600 hover:shadow-3xl hover:border-green-600 transition-all duration-500 relative overflow-hidden group">
              {/* Technical grid pattern overlay */}
              <div className="absolute inset-0 opacity-5 bg-[linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(180deg,#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>

              {/* Sophisticated corner accents */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-600/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-green-600/20 to-transparent"></div>

              {/* Minimalist decorative elements */}
              <div className="absolute top-6 right-6 w-2 h-2 bg-blue-600 rotate-45 group-hover:rotate-90 transition-transform duration-300"></div>
              <div className="absolute bottom-6 left-6 w-1 h-8 bg-gradient-to-t from-green-600 to-blue-600 group-hover:h-12 transition-all duration-300"></div>

              <div className="flex items-start space-x-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-slate-800 via-blue-700 to-green-700 rounded-lg flex items-center justify-center shadow-xl hover:rotate-3 transition-transform duration-300 border border-slate-300">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-slate-800 mb-3 tracking-tight">Visit Our Campus</h3>
                  <div className="flex items-center space-x-2 text-sm text-slate-600 font-medium bg-slate-100 px-4 py-2 rounded-md inline-block border border-slate-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Always Open • No Appointment Required</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-slate-50 to-green-50 rounded-lg p-6 border-l-4 border-green-600 hover:border-blue-600 transition-colors duration-300 shadow-sm">
                  <div className="flex items-start space-x-4 font-mono">
                    <MapPin className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-slate-600 text-xl leading-relaxed">
                        Village Jiaram, Raghopur Block,
                      </p>
                      <p className="font-bold text-slate-600 text-xl">Supaul District, Bihar 852111, India</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-6 border-l-4 border-blue-600 hover:border-green-600 transition-colors duration-300 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <Train className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-slate-700 font-semibold text-lg">
                        <span className="font-mono bg-blue-100 px-2 py-1 rounded text-blue-800">~200m</span> from{" "}
                        <span className="font-bold text-blue-700">Raghopur Railway Station</span>
                      </p>
                      <p className="text-slate-600 font-medium mt-2">
                        Direct access via{" "}
                        <span className="font-mono bg-slate-100 px-2 py-1 rounded text-slate-800">NH27/NH131</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-3xl hover:shadow-4xl transition-shadow duration-300">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Mukund Agarwal with students and community members"
                width={500}
                height={600}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

              {/* Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <p className="text-sm font-medium text-gray-900 mb-1 flex items-center">
                    <Heart className="w-4 h-4 mr-2 text-red-500" />
                    "We're always here to listen and help"
                  </p>
                  <p className="text-xs text-gray-600">Open communication with our community</p>
                </div>
              </div>
            </div>

            {/* Floating Contact Stats */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500 to-blue-500 text-white p-6 rounded-2xl shadow-2xl hover:rotate-6 transition-transform duration-300">
              <div className="text-center">
                <div className="text-3xl font-bold flex items-center justify-center">
                  24/7
                  <Sparkles className="w-6 h-6 ml-2 animate-pulse" />
                </div>
                <div className="text-sm font-medium">Always Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
        .shadow-4xl {
          box-shadow: 0 45px 80px -12px rgba(0, 0, 0, 0.35);
        }
      `}</style>
    </section>
  )
}
