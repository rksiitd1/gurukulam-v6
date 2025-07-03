import { Heart, Users, Leaf } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "500+", label: "Villages Impacted", color: "text-green-600" },
  { value: "2000+", label: "Students Benefited", color: "text-orange-600" },
  { value: "100+", label: "Volunteers", color: "text-blue-600" },
];

const AboutMissionHero = () => (
  <section className="relative bg-gradient-to-br from-green-50 via-orange-50 to-yellow-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <div className="absolute top-10 left-10 w-16 h-16 text-orange-600">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 10 L90 90 L10 90 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 w-14 h-14 text-green-600">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            <Leaf className="w-4 h-4 mr-2" />
            About Divya Bihar Mission
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Village Upliftment,
            <span className="text-orange-600 block">Nation Building</span>
            <span className="text-green-700 block font-devanagari text-2xl sm:text-3xl lg:text-4xl mt-2">
              बिहार की आत्मा गाँवों में बसती है
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Divya Bihar Mission is dedicated to the holistic development of Bihar's villages—empowering youth, revitalizing agriculture, fostering entrepreneurship, and reviving our rich culture. Join us in building a self-reliant, proud, and progressive rural Bihar.
          </p>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg max-w-xl mx-auto lg:mx-0">
            <p className="text-orange-800 font-devanagari text-base sm:text-lg">
              "गांव उठेंगे, तभी देश प्रगति करेगा।"
            </p>
            <p className="text-orange-700 text-xs sm:text-sm mt-1">- Manifesto</p>
          </div>
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-gray-200">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Image */}
        <div className="relative order-first lg:order-last">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Divya Bihar Mission - Rural Development"
              width={500}
              height={600}
              className="w-full h-64 sm:h-80 lg:h-auto object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <p className="text-xs sm:text-sm font-medium text-gray-900">
                  "Empowering villages, transforming lives."
                </p>
                <p className="text-xs text-gray-600 mt-1">- Divya Bihar Mission</p>
              </div>
            </div>
          </div>
          {/* Floating Elements */}
          <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-orange-500 text-white p-2 sm:p-3 rounded-full shadow-lg">
            <span className="text-lg sm:text-2xl">🌱</span>
          </div>
          <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-green-500 text-white p-2 sm:p-3 rounded-full shadow-lg">
            <span className="text-lg sm:text-2xl">🏡</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMissionHero; 