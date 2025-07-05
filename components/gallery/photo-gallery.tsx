"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, Filter, X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [visibleCount, setVisibleCount] = useState(12)

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "classroom", name: "Classroom" },
    { id: "cultural", name: "Cultural Events" },
    { id: "agriculture", name: "Agriculture" },
    { id: "sports", name: "Sports & Games" },
    { id: "community", name: "Community" },
  ]

  const photos = [
    {
      id: 1,
      src: "/images/gallery/agriculture/1.jpg?height=400&width=600",
      title: "Mathematics Class in Progress",
      description: "Golu Sir teaching advanced mathematics to Class 12 students",
      category: "classroom",
      date: "March 2024",
    },
    {
      id: 2,
      src: "/images/gallery/agriculture/2.jpg?height=400&width=600",
      title: "Saraswati Puja Celebration",
      description: "Annual Saraswati Puja celebration with traditional rituals and cultural programs",
      category: "cultural",
      date: "February 2024",
    },
    {
      id: 3,
      src: "/images/gallery/agriculture/3.jpg?height=400&width=600",
      title: "Organic Farming Training",
      description: "Farmers learning sustainable agriculture techniques at our demonstration farm",
      category: "agriculture",
      date: "January 2024",
    },
    {
      id: 4,
      src: "/images/gallery/agriculture/4.jpg?height=400&width=600",
      title: "Annual Sports Day",
      description: "Students participating in various sports activities and competitions",
      category: "sports",
      date: "December 2023",
    },
    {
      id: 5,
      src: "/images/gallery/agriculture/5.jpg?height=400&width=600",
      title: "Village Community Meeting",
      description: "Monthly community meeting discussing education and development initiatives",
      category: "community",
      date: "March 2024",
    },
    {
      id: 6,
      src: "/images/gallery/agriculture/6.jpg?height=400&width=600",
      title: "Science Laboratory Session",
      description: "Students conducting physics experiments in our well-equipped laboratory",
      category: "classroom",
      date: "February 2024",
    },
    {
      id: 7,
      src: "/images/gallery/agriculture/7.jpg?height=400&width=600",
      title: "Holi Celebration",
      description: "Colorful Holi celebration bringing together students, teachers, and community",
      category: "cultural",
      date: "March 2024",
    },
    {
      id: 8,
      src: "/images/gallery/agriculture/8.jpg?height=400&width=600",
      title: "Cow Care at Gaushala",
      description: "Students learning about cow care and organic farming at our Gaushala",
      category: "agriculture",
      date: "January 2024",
    },
    {
      id: 9,
      src: "/images/gallery/agriculture/9.jpg?height=400&width=600",
      title: "Cricket Tournament",
      description: "Inter-village cricket tournament organized by our sports committee",
      category: "sports",
      date: "November 2023",
    },
    {
      id: 10,
      src: "/images/gallery/agriculture/10.jpg?height=400&width=600",
      title: "Women's Self Help Group",
      description: "Women entrepreneurs showcasing their handicraft products",
      category: "community",
      date: "February 2024",
    },
    {
      id: 11,
      src: "/images/gallery/agriculture/11.jpg?height=400&width=600",
      title: "Sanskrit Class",
      description: "Traditional Sanskrit education integrated with modern curriculum",
      category: "classroom",
      date: "March 2024",
    },
    {
      id: 12,
      src: "/images/gallery/agriculture/12.jpg?height=400&width=600",
      title: "Diwali Celebration",
      description: "Traditional Diwali celebration with diyas, rangoli, and cultural performances",
      category: "cultural",
      date: "October 2023",
    },
    {
      id: 13,
      src: "/images/gallery/agriculture/13.jpg?height=400&width=600",
      title: "Diwali Celebration",
      description: "Traditional Diwali celebration with diyas, rangoli, and cultural performances",
      category: "cultural",
      date: "October 2023",
    },
    {
      id: 14,
      src: "/images/gallery/agriculture/14.jpg?height=400&width=600",
      title: "Diwali Celebration",
      description: "Traditional Diwali celebration with diyas, rangoli, and cultural performances",
      category: "cultural",
      date: "October 2023",
    },
    {
      id: 15,
      src: "/images/gallery/agriculture/15.jpg?height=400&width=600",
      title: "Diwali Celebration",
      description: "Traditional Diwali celebration with diyas, rangoli, and cultural performances",
      category: "cultural",
      date: "October 2023",
    },
    {
      id: 16,
      src: "/images/gallery/agriculture/16.jpg?height=400&width=600",
      title: "Diwali Celebration",
      description: "Traditional Diwali celebration with diyas, rangoli, and cultural performances",
      category: "cultural",
      date: "October 2023",
    },
    
  ]

  const sortedPhotos = [...photos].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const filteredPhotos =
    selectedCategory === "all"
      ? sortedPhotos
      : sortedPhotos.filter((photo) => photo.category === selectedCategory)

  const visiblePhotos = filteredPhotos.slice(0, visibleCount)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredPhotos.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredPhotos.length - 1 : selectedImage - 1)
    }
  }

  // Calculate counts dynamically
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") {
      return photos.length
    }
    return photos.filter(photo => photo.category === categoryId).length
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Camera className="w-4 h-4 mr-2" />
            Photo Gallery
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Capturing
            <span className="text-blue-600 block">Every Moment</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our extensive collection of photographs documenting the journey of transformation, learning,
            and community building at Divya Bihar Mission.
          </p>
          <p className="text-lg font-devanagari text-blue-700 mt-2">हर पल को संजोते हुए</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(category.id)
                setVisibleCount(12)
              }}
              size="sm"
              className={`${
                selectedCategory === category.id
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "border-blue-200 text-blue-700 hover:bg-blue-50"
              } text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 whitespace-nowrap`}
            >
              <Filter className="w-3 h-3 sm:w-4 sm:h-4 mr-0.5 sm:mr-2" />
              <span className="hidden sm:inline">{category.name}</span>
              <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              <span className="hidden sm:inline"> ({getCategoryCount(category.id)})</span>
            </Button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visiblePhotos.map((photo, index) => (
            <Card
              key={photo.id}
              className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => openLightbox(index)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-sm mb-1">{photo.title}</h3>
                    <p className="text-xs opacity-90">{photo.date}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredPhotos.length && (
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-700 hover:bg-blue-50"
              onClick={() => setVisibleCount(visibleCount + 12)}
            >
              Load More Photos
            </Button>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="bg-white rounded-lg overflow-hidden">
                <Image
                  src={filteredPhotos[selectedImage].src || "/placeholder.svg"}
                  alt={filteredPhotos[selectedImage].title}
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{filteredPhotos[selectedImage].title}</h3>
                  <p className="text-gray-600 mb-2">{filteredPhotos[selectedImage].description}</p>
                  <p className="text-sm text-gray-500">{filteredPhotos[selectedImage].date}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
