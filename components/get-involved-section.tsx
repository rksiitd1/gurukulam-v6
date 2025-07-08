import Link from "next/link"
import { Users, Heart, Lightbulb } from "lucide-react"

export function GetInvolvedSection() {
  return (
    <section id="get-involved" className="py-16 px-4 bg-gradient-to-br from-blue-50 via-sky-100 to-blue-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-green-700">Join the Movement</h2>
        <p className="text-lg text-gray-700 mb-10">
          We're just getting started—and we need you! Be a founding volunteer, supporter, or advisor. Your ideas, time, and support will shape our journey.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <Users className="w-10 h-10 text-orange-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Volunteer</h3>
            <p className="text-gray-600 text-sm mb-4">Join our team and help us build a brighter future for rural Bihar.</p>
            <Link href="/volunteer" className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded font-semibold transition-colors">Volunteer With Us</Link>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <Lightbulb className="w-10 h-10 text-yellow-500 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Suggest an Idea</h3>
            <p className="text-gray-600 text-sm mb-4">Share your thoughts or suggestions to help us grow and improve.</p>
            <a href="mailto:divyabiharmission@gmail.com" className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded font-semibold transition-colors">Suggest Now</a>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <Heart className="w-10 h-10 text-pink-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Donate</h3>
            <p className="text-gray-600 text-sm mb-4">Support our mission and help us reach more villages and families.</p>
            <Link href="/donate" className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded font-semibold transition-colors">Donate Now</Link>
          </div>

        </div>
      </div>
    </section>
  )
} 