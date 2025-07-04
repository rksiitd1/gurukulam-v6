import { GraduationCap, Sprout, Users, Heart, BookOpen } from "lucide-react"
import Link from "next/link"

export function WhyWeExistSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-orange-50 via-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-orange-700 font-devanagari">हमारा उद्देश्य</h2>
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">Our Purpose</h3>
        <p className="text-lg text-gray-700 mb-4 font-devanagari">
          हमारा मानना है कि जब तक गांव नहीं उठेंगे, तब तक बिहार और भारत का सम्पूर्ण विकास संभव नहीं है।
        </p>
        <p className="text-base sm:text-lg text-gray-600 mb-8">
          We believe true progress begins in the villages. Our mission is to empower rural Bihar through education, sustainable agriculture, entrepreneurship, and cultural pride.
        </p>
        <div className="hidden sm:grid grid-cols-5 gap-4 mb-8">
          <div className="flex flex-col items-center p-3 bg-white/70 rounded-lg shadow-sm">
            <GraduationCap className="w-9 h-9 text-blue-600 mb-2" />
            <span className="font-medium text-base font-devanagari">शिक्षा</span>
            <span className="text-xs text-gray-500">Education</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-white/70 rounded-lg shadow-sm">
            <Sprout className="w-9 h-9 text-green-600 mb-2" />
            <span className="font-medium text-base font-devanagari">कृषि</span>
            <span className="text-xs text-gray-500">Agriculture</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-white/70 rounded-lg shadow-sm">
            <Users className="w-9 h-9 text-orange-600 mb-2" />
            <span className="font-medium text-base font-devanagari">उद्यमिता</span>
            <span className="text-xs text-gray-500">Entrepreneurship</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-white/70 rounded-lg shadow-sm">
            <Heart className="w-9 h-9 text-pink-600 mb-2" />
            <span className="font-medium text-base font-devanagari">गौशाला</span>
            <span className="text-xs text-gray-500">Gaushala</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-white/70 rounded-lg shadow-sm">
            <BookOpen className="w-9 h-9 text-yellow-600 mb-2" />
            <span className="font-medium text-base font-devanagari">संस्कृति</span>
            <span className="text-xs text-gray-500">Culture</span>
          </div>
        </div>
        <Link href="/manifesto" target="_blank" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors">Read Our Manifesto</Link>
      </div>
    </section>
  )
} 