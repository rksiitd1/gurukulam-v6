"use client"

import Link from "next/link"
import { Calendar, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { blogPosts } from "@/lib/blog-posts"

export function BlogGrid() {
  const [visiblePosts, setVisiblePosts] = useState(12)

  // Sort posts by id in descending order
  const sortedPosts = blogPosts.slice().sort((a, b) => b.id - a.id)
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
