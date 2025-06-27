import { Button } from "@/components/ui/button"
import { Leaf, TrendingUp } from "lucide-react"

export function AgricultureHero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-green-600">
                <Leaf className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wide">Sustainable Agriculture</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Empowering Farmers Through
                <span className="text-green-600 block">Modern Agriculture</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Join our comprehensive agriculture program designed to transform traditional farming practices with
                modern techniques, sustainable methods, and technology integration.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Farmers Trained</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">Villages Reached</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                Join Program
              </Button>
              <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Modern agriculture training"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Crop Yield</div>
                  <div className="text-xs text-gray-600">+40% Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
