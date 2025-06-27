"use client"

import Link from "next/link"
import { Calendar, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export function BlogGrid() {
  const [visiblePosts, setVisiblePosts] = useState(12)

  const blogPosts = [
    {
      id: 1,
      title: "Success Story: From Village Student to Engineering College",
      excerpt:
        "Meet Priya Kumari, who cracked JEE Advanced after studying at our Shri Classes and is now pursuing her dream of becoming an engineer.",
      date: "2024-01-15",
      image: "/placeholder.svg?height=200&width=350",
      slug: "village-student-engineering-college-success",
      type: "Article",
    },
    {
      id: 2,
      title: "Udyamita Program: Nurturing Young Entrepreneurs",
      excerpt:
        "How our entrepreneurship program is helping rural youth start their own businesses and become job creators rather than job seekers.",
      date: "2024-01-12",
      image: "/placeholder.svg?height=200&width=350",
      slug: "udyamita-program-nurturing-young-entrepreneurs",
      type: "Video",
    },
    {
      id: 3,
      title: "Traditional Festivals at Gurukulam: Preserving Cultural Heritage",
      excerpt:
        "Celebrating Diwali, Holi, and other festivals at our Gurukulam while teaching students about their cultural significance and values.",
      date: "2024-01-10",
      image: "/placeholder.svg?height=200&width=350",
      slug: "traditional-festivals-gurukulam-cultural-heritage",
      type: "Article",
    },
    {
      id: 4,
      title: "Sustainable Agriculture: Water Conservation Techniques",
      excerpt:
        "Learn about the innovative water conservation methods our students are implementing to make farming more sustainable and profitable.",
      date: "2024-01-08",
      image: "/placeholder.svg?height=200&width=350",
      slug: "sustainable-agriculture-water-conservation-techniques",
      type: "Video",
    },
    {
      id: 5,
      title: "Parent Testimonials: Why Families Choose Our Gurukulam",
      excerpt:
        "Hear directly from parents about their experiences with Divya Bihar Mission and why they believe in our educational approach.",
      date: "2024-01-05",
      image: "/placeholder.svg?height=200&width=350",
      slug: "parent-testimonials-families-choose-gurukulam",
      type: "Article",
    },
    {
      id: 6,
      title: "Digital Learning in Rural Areas: Bridging the Gap",
      excerpt:
        "How we're using technology to enhance education in remote villages while maintaining our focus on traditional values.",
      date: "2024-01-03",
      image: "/placeholder.svg?height=200&width=350",
      slug: "digital-learning-rural-areas-bridging-gap",
      type: "Video",
    },
    {
      id: 7,
      title: "Holistic Education: Mind, Body, and Spirit Development",
      excerpt:
        "Understanding our comprehensive approach to education that nurtures students intellectually, physically, and spiritually.",
      date: "2023-12-28",
      image: "/placeholder.svg?height=200&width=350",
      slug: "holistic-education-mind-body-spirit",
      type: "Article",
    },
    {
      id: 8,
      title: "Community Impact: Transforming Rural Villages",
      excerpt:
        "See how our programs are creating positive change in rural communities across India through education and empowerment.",
      date: "2023-12-25",
      image: "/placeholder.svg?height=200&width=350",
      slug: "community-impact-transforming-villages",
      type: "Video",
    },
    {
      id: 9,
      title: "Student Achievements: Academic Excellence Stories",
      excerpt:
        "Celebrating the remarkable achievements of our students in various academic and competitive examinations.",
      date: "2023-12-22",
      image: "/placeholder.svg?height=200&width=350",
      slug: "student-achievements-academic-excellence",
      type: "Article",
    },
    {
      id: 10,
      title: "Yoga and Meditation: Daily Practice at Gurukulam",
      excerpt: "A look into the daily yoga and meditation practices at our centers and how they contribute to students' well-being and focus.",
      date: "2023-12-20",
      image: "/placeholder.svg?height=200&width=350",
      slug: "yoga-meditation-daily-practice",
      type: "Video",
    },
    {
      id: 11,
      title: "Agricultural Innovation: Modern Farming Techniques",
      excerpt:
        "Exploring how our agricultural program combines traditional wisdom with modern technology for better yields.",
      date: "2023-12-18",
      image: "/placeholder.svg?height=200&width=350",
      slug: "agricultural-innovation-modern-farming",
      type: "Article",
    },
    {
      id: 12,
      title: "Teacher Training: Preparing Quality Educators",
      excerpt: "Our comprehensive teacher training programs that ensure quality education delivery in rural areas.",
      date: "2023-12-15",
      image: "/placeholder.svg?height=200&width=350",
      slug: "teacher-training-quality-educators",
      type: "Video",
    },
    {
      id: 13,
      title: "Cultural Programs: Preserving Indian Heritage",
      excerpt: "How our cultural programs help students connect with their roots while preparing for the modern world.",
      date: "2023-12-12",
      image: "/placeholder.svg?height=200&width=350",
      slug: "cultural-programs-indian-heritage",
      type: "Article",
    },
    {
      id: 14,
      title: "Health and Nutrition: Caring for Student Wellbeing",
      excerpt: "Our comprehensive approach to student health including nutritious meals and regular health checkups.",
      date: "2023-12-10",
      image: "/placeholder.svg?height=200&width=350",
      slug: "health-nutrition-student-wellbeing",
      type: "Video",
    },
    {
      id: 15,
      title: "Alumni Success: Making a Difference in Society",
      excerpt:
        "Stories of our alumni who are now contributing to society in various fields and making a positive impact.",
      date: "2023-12-08",
      image: "/placeholder.svg?height=200&width=350",
      slug: "alumni-success-making-difference",
      type: "Article",
    },
  ]

  // Sort posts by date (newest first)
  const sortedPosts = blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const displayedPosts = sortedPosts.slice(0, visiblePosts)
  const hasMorePosts = visiblePosts < sortedPosts.length

  const loadMorePosts = () => {
    setVisiblePosts((prev) => Math.min(prev + 12, sortedPosts.length))
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Stories</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with our latest insights, success stories, and educational content
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full rounded-none">
              <div className="relative rounded-none">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <Badge
                    variant={post.type === "Video" ? "default" : "secondary"}
                    className={
                      post.type === "Video"
                        ? "bg-red-600 hover:bg-red-700 rounded-none"
                        : "bg-blue-600 hover:bg-blue-700 rounded-none"
                    }
                  >
                    {post.type}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-4 flex flex-col justify-between h-full">
                <div className="space-y-3 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">{post.excerpt}</p>
                </div>

                <div className="flex items-center justify-between pt-4 mt-auto">
                  <div className="flex items-center text-sm text-gray-600 font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <button className="text-gray-400 hover:text-orange-600 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {hasMorePosts && (
        <div className="text-center pt-8">
          <Button
            onClick={loadMorePosts}
            variant="outline"
            size="lg"
            className="hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-colors"
          >
            Load More Stories
          </Button>
        </div>
      )}
    </div>
  )
}
