"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Video, Clock, Eye, X } from "lucide-react"
import Image from "next/image"

export function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)

  const videos = [
    {
      id: 1,
      title: "Divya Bihar Mission - Our Story",
      description: "Complete journey of Divya Bihar Mission from inception to current impact",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "12:45",
      views: "2.5K",
      category: "Documentary",
      embedId: "dQw4w9WgXcQ", // YouTube video ID
      date: "March 2024",
    },
    {
      id: 2,
      title: "A Day at Divya Bihar Gurukul",
      description: "Follow students through their daily routine at our residential school",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "8:30",
      views: "1.8K",
      category: "Education",
      embedId: "dQw4w9WgXcQ",
      date: "February 2024",
    },
    {
      id: 3,
      title: "Organic Farming Success Stories",
      description: "Farmers share their experiences with sustainable agriculture practices",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "15:20",
      views: "3.2K",
      category: "Agriculture",
      embedId: "dQw4w9WgXcQ",
      date: "January 2024",
    },
    {
      id: 4,
      title: "Cultural Program - Saraswati Puja 2024",
      description: "Highlights from our annual Saraswati Puja celebration",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "6:15",
      views: "4.1K",
      category: "Cultural",
      embedId: "dQw4w9WgXcQ",
      date: "February 2024",
    },
    {
      id: 5,
      title: "Student Success Stories",
      description: "Former students share how Divya Bihar Mission changed their lives",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "10:45",
      views: "2.9K",
      category: "Testimonials",
      embedId: "dQw4w9WgXcQ",
      date: "March 2024",
    },
    {
      id: 6,
      title: "Women Empowerment Through Udyamita",
      description: "Women entrepreneurs showcase their journey to financial independence",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "9:30",
      views: "1.6K",
      category: "Empowerment",
      embedId: "dQw4w9WgXcQ",
      date: "February 2024",
    },
    {
      id: 7,
      title: "Annual Sports Day Highlights",
      description: "Best moments from our inter-village sports competition",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "7:20",
      views: "2.3K",
      category: "Sports",
      embedId: "dQw4w9WgXcQ",
      date: "December 2023",
    },
    {
      id: 8,
      title: "Gaushala and Cow Protection",
      description: "Our efforts in preserving indigenous cow breeds and organic farming",
      thumbnail: "/placeholder.svg?height=300&width=500",
      duration: "11:15",
      views: "1.9K",
      category: "Agriculture",
      embedId: "dQw4w9WgXcQ",
      date: "January 2024",
    },
  ]

  const openVideo = (index: number) => {
    setSelectedVideo(index)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
            <Video className="w-4 h-4 mr-2" />
            Video Gallery
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Stories in
            <span className="text-red-600 block">Motion</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the impact of our mission through compelling videos that showcase real stories, achievements, and
            the transformative power of education in rural Bihar.
          </p>
          <p className="text-lg font-devanagari text-red-700 mt-2">चलचित्रों में हमारी कहानी</p>
        </div>

        {/* Featured Video */}
        <div className="mb-16">
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="relative">
                <Image
                  src={videos[0].thumbnail || "/placeholder.svg"}
                  alt={videos[0].title}
                  width={1200}
                  height={600}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={() => openVideo(0)}
                    className="bg-red-600 hover:bg-red-700 text-white rounded-full p-6 transition-all duration-300 hover:scale-110 shadow-2xl"
                  >
                    <Play className="w-12 h-12 ml-1" />
                  </button>
                </div>
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-sm">
                  {videos[0].duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{videos[0].title}</h3>
                <p className="text-gray-600 mb-4">{videos[0].description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{videos[0].date}</span>
                    </div>
                  </div>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    {videos[0].category}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.slice(1).map((video, index) => (
            <Card
              key={video.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => openVideo(index + 1)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-red-600 text-white rounded-full p-3">
                      <Play className="w-6 h-6 ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {video.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{video.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{video.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeVideo}
                className="absolute -top-12 right-0 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="bg-white rounded-lg overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${videos[selectedVideo].embedId}?autoplay=1`}
                    title={videos[selectedVideo].title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{videos[selectedVideo].title}</h3>
                  <p className="text-gray-600 mb-4">{videos[selectedVideo].description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{videos[selectedVideo].date}</span>
                      </div>
                    </div>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      {videos[selectedVideo].category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* YouTube Channel CTA */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <Video className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our YouTube Channel</h3>
            <p className="text-lg opacity-90 mb-6">
              Stay updated with our latest videos, success stories, and educational content. Join our growing community
              of supporters and students.
            </p>
            <p className="font-devanagari text-lg opacity-90 mb-6">हमारे यूट्यूब चैनल को सब्सक्राइब करें</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                <Video className="w-5 h-5 mr-2" />
                Subscribe Now
              </Button>
              <Button size="lg" variant="outline" className="border-white hover:bg-white/10 text-slate-500">
                Watch All Videos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
