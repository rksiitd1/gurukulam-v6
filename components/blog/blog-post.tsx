import Link from "next/link"
import { Calendar, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/lib/blog-posts"
import { RelatedPosts } from "./related-posts"

interface BlogPostProps {
  slug: string
}

export function BlogPost({ slug }: BlogPostProps) {
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) {
    return (
      <article className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Post Not Found</h1>
          <p className="text-gray-600">Sorry, the blog post you are looking for does not exist.</p>
        </div>
      </article>
    );
  }

  return (
    <article className="min-h-screen bg-gradient-to-b from-orange-50/30 to-white">
      {/* Back Button */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-all duration-200 hover:translate-x-1"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="font-medium">Back to Blog</span>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Article Header */}
        <header className="mb-12 text-center">
          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 text-sm font-medium shadow-lg mb-6">
            {post.category}
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
            {post.title}
          </h1>

          <div className="flex justify-center items-center text-gray-600 mb-8">
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 border border-orange-100">
              <Calendar className="w-5 h-5 text-orange-500" />
              <span className="font-medium">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 relative">
          <div className="relative overflow-hidden shadow-2xl">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white/60 backdrop-blur-sm p-8 md:p-12 shadow-xl border border-orange-100">
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-orange-500 prose-blockquote:bg-gradient-to-r prose-blockquote:from-orange-50 prose-blockquote:to-orange-25 prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:shadow-sm prose-ul:text-gray-700 prose-li:text-gray-700 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
      {/* Related Posts */}
      <RelatedPosts currentId={post.id} />
    </article>
  )
}
