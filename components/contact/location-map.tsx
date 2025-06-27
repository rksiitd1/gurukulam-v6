"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Car, Train, Plane } from "lucide-react"

export function LocationMap() {
  const locations = [
    {
      name: "Main Campus - Divya Bihar Global Gurukulam",
      address: "Village Raghopur, Supaul District, Bihar – 852111",
      coordinates: "26.30128° N, 86.83820° E",
      type: "primary",
      description: "Our main residential campus with Gurukulam and office",
      mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=26.301284,86.838190",
      locationUrl: "https://maps.app.goo.gl/37NWe3Hm5ku9S4r27",
    },
    {
      name: "Agriculture & Training Center",
      address: "Village Pirpainti, Bhagalpur District, Bihar – 813209",
      coordinates: "25.32187° N, 87.42092° E",
      type: "secondary",
      description: "Demonstration farm and agricultural training center",
      mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=25.321870,87.420920",
      locationUrl: "https://maps.app.goo.gl/FcxsNNirW43SQvo86",
    },
  ]

  const handleGetDirections = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=26.301284,86.838190`, "_blank")
  }

  const handleViewInGoogleMaps = () => {
    window.open("https://maps.app.goo.gl/37NWe3Hm5ku9S4r27", "_blank")
  }

  const handleLocationDirections = (coordinates: string) => {
    const [lat, lng] = coordinates.split("° N, ").map((coord) => coord.replace("° E", ""))
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "_blank")
  }

  const transportOptions = [
    {
      mode: "By Air",
      icon: <Plane className="w-6 h-6 text-blue-500" />,
      details: [
        "Nearest Airport: Bagdogra Airport (120 km)",
        "Alternative: Patna Airport (200 km)",
        "Taxi/Bus available from airport",
      ],
    },
    {
      mode: "By Train",
      icon: <Train className="w-6 h-6 text-green-500" />,
      details: [
        "Nearest Station: Supaul Railway Station (15 km)",
        "Major Station: Saharsa Junction (45 km)",
        "Auto-rickshaw/taxi available",
      ],
    },
    {
      mode: "By Road",
      icon: <Car className="w-6 h-6 text-orange-500" />,
      details: [
        "NH-327 connects to major cities",
        "Bus service from Patna, Darbhanga",
        "Private vehicle parking available",
      ],
    },
  ]

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Our Locations
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Find Us on
            <span className="text-orange-600 block">the Map</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Located in the heart of rural Bihar, our campuses are easily accessible by road, rail, and air. Plan your
            visit with our detailed location and transportation information.
          </p>
          <p className="text-lg font-devanagari text-orange-700 mt-2">हमारे स्थान खोजें</p>
        </div>

        {/* Interactive Map Placeholder */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <div className="relative h-96 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                {/* Map Placeholder */}
                <div className="text-center space-y-4">
                  <MapPin className="w-16 h-16 text-green-600 mx-auto" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Interactive Map</h3>
                    <p className="text-gray-600">Detailed location map with directions</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={handleGetDirections} className="bg-green-600 hover:bg-green-700 text-white">
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                    <Button
                      onClick={handleViewInGoogleMaps}
                      variant="outline"
                      className="border-blue-600 text-blue-700 hover:bg-blue-50"
                    >
                      View in Google Maps
                    </Button>
                  </div>
                </div>

                {/* Location Markers */}
                <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-medium">Main Campus</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Location Details */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {locations.map((location, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div
                      className={`w-4 h-4 rounded-full mt-1 ${
                        location.type === "primary" ? "bg-red-500" : "bg-green-500"
                      }`}
                    ></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">{location.name}</h3>
                      <p className="text-gray-600 mt-1">{location.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3 ml-7">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">{location.address}</p>
                        <p className="text-sm text-gray-500">{location.coordinates}</p>
                      </div>
                    </div>

                    <div className="flex space-x-3 pt-3">
                      <Button
                        size="sm"
                        onClick={() => window.open(location.mapsUrl, "_blank")}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        <Navigation className="w-4 h-4 mr-1" />
                        Directions
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(location.locationUrl, "_blank")}
                        className="border-gray-300 text-gray-700"
                      >
                        Share Location
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Transportation Options */}
        <div className="bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 rounded-3xl p-6 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">How to Reach Us</h3>
            <p className="text-lg md:text-xl text-gray-600 font-devanagari mb-2">हम तक कैसे पहुंचें</p>
            <p className="text-sm md:text-base text-gray-600">Your journey to us starts here! 🌟</p>
          </div>

          <div className="space-y-8 md:space-y-12">
            {/* By Air */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center mb-6">
                <span className="text-3xl md:text-4xl mr-4">✈️</span>
                <h4 className="text-xl md:text-2xl font-bold text-blue-600">By Air</h4>
              </div>
              <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-blue-50 rounded-xl p-4">
                  <h5 className="font-bold text-gray-900 mb-2">Darbhanga Airport (DBR)</h5>
                  <p className="text-sm text-gray-700">
                    Nearest airport — the quickest way to reach us. Land, relax, and we'll help you reach campus easily.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <h5 className="font-bold text-gray-900 mb-2">Patna Airport (PAT)</h5>
                  <p className="text-sm text-gray-700">
                    Well-connected to major cities. From here, road or train options bring you comfortably to our door.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <h5 className="font-bold text-gray-900 mb-2">Bagdogra Airport (IXB)</h5>
                  <p className="text-sm text-gray-700">
                    Great for those combining a Northeast India trip with a visit. A longer route, but scenic and
                    doable.
                  </p>
                </div>
              </div>
            </div>

            {/* By Train */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center mb-6">
                <span className="text-3xl md:text-4xl mr-4">🚆</span>
                <h4 className="text-xl md:text-2xl font-bold text-green-600">By Train</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-green-50 rounded-xl p-4">
                  <h5 className="font-bold text-gray-900 mb-2">Raghopur Railway Station</h5>
                  <p className="text-sm text-gray-700 mb-2">
                    Just 200 meters from campus — literally a 2-minute walk. You'll be here before you know it!
                  </p>
                  <span className="inline-block bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                    Super Close! 🎯
                  </span>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <h5 className="font-bold text-gray-900 mb-2">Supaul & Saharsa Stations</h5>
                  <p className="text-sm text-gray-700">
                    Popular junctions with easy taxi/auto connections to campus. Great if you're arriving from major
                    routes.
                  </p>
                </div>
              </div>
            </div>

            {/* By Road */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center mb-6">
                <span className="text-3xl md:text-4xl mr-4">🚗</span>
                <h4 className="text-xl md:text-2xl font-bold text-orange-600">By Road</h4>
              </div>
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-xl p-4">
                  <h5 className="font-bold text-gray-900 mb-2">Highway Access</h5>
                  <p className="text-sm text-gray-700">
                    We're located near NH-131, which connects smoothly with the main NH-27 (East–West Corridor).
                    Whether you're coming from Patna, Darbhanga, or beyond — the roads lead straight to us.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 rounded-xl p-4">
                    <h5 className="font-bold text-gray-900 mb-2">By Bus or Car</h5>
                    <p className="text-sm text-gray-700">
                      Regular buses run from Patna, Darbhanga, and nearby towns. Or enjoy a peaceful drive in your own
                      vehicle.
                    </p>
                  </div>
                  <div className="bg-orange-50 rounded-xl p-4">
                    <h5 className="font-bold text-gray-900 mb-2">Local Transport</h5>
                    <p className="text-sm text-gray-700">
                      From Supaul or Saharsa, local taxis and autos are always available to bring you right to the gate.
                      We're happy to guide or help arrange a ride!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-md">
              <p className="text-sm md:text-base text-gray-700 mb-2">
                <span className="font-semibold">Need help planning your journey?</span>
              </p>
              <p className="text-xs md:text-sm text-gray-600">
                We're here to help make your visit smooth and comfortable! 💫
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
