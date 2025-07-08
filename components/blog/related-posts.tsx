import Link from "next/link"
import { Calendar, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function RelatedPosts() {
  // Get the top 3 latest posts (same as in BlogGrid)
  const latestPosts = [
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
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Stories</h2>
          <p className="text-lg text-gray-600">Inspiring journeys and transformative experiences from our community</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full rounded-none bg-white">
                <div className="relative rounded-none">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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
      </div>
    </section>
  )
}
