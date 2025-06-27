import Link from "next/link"
import { Calendar, User, ArrowRight, Eye, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface CategoryPostsProps {
  category: string
}

export function CategoryPosts({ category }: CategoryPostsProps) {
  // In a real app, you'd filter posts based on the category
  const posts = [
    {
      id: 1,
      title: "Gurukulam Education: Bridging Ancient Wisdom with Modern Learning",
      excerpt:
        "Exploring how our Gurukulam system combines traditional Sanskrit education with contemporary subjects to create well-rounded individuals.",
      category: "Education",
      author: "Dr. Priya Sharma",
      date: "2024-01-12",
      readTime: "6 min read",
      views: "1.8K",
      image: "/placeholder.svg?height=300&width=400",
      slug: "gurukulam-education-ancient-wisdom-modern-learning",
    },
    {
      id: 2,
      title: "Digital Learning in Rural Areas: Bridging the Gap",
      excerpt:
        "How we're using technology to enhance education in remote villages while maintaining our focus on traditional values.",
      category: "Education",
      author: "Rahul Sharma",
      date: "2023-12-25",
      readTime: "8 min read",
      views: "1.3K",
      image: "/placeholder.svg?height=300&width=400",
      slug: "digital-learning-rural-areas-bridging-gap",
    },
    // Add more posts based on category
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          {category.charAt(0).toUpperCase() + category.slice(1).replace("-", " ")} Articles
        </h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Sort by:</span>
          <select className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>Latest</option>
            <option>Most Popular</option>
            <option>Most Viewed</option>
          </select>
        </div>
      </div>

      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.id} className="group cursor-pointer border-b border-gray-200 pb-8 last:border-b-0">
            <Link href={`/blog/${post.slug}`}>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                <div className="relative overflow-hidden rounded-xl md:w-80 flex-shrink-0">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 md:h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-orange-600 hover:bg-orange-700 text-white">{post.category}</Badge>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{post.views}</span>
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg" className="hover:bg-orange-600 hover:text-white hover:border-orange-600">
          Load More Articles
        </Button>
      </div>
    </div>
  )
}
