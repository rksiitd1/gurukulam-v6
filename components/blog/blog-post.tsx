"use client"

import Link from "next/link"
import { Calendar, ArrowLeft, Clock, Eye, Heart, Share2, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { blogPosts } from "@/lib/blog-posts"
import { RelatedPosts } from "./related-posts"

interface BlogPostProps {
  slug: string
}

// Enhanced content renderer that handles the HTML content better
function ContentRenderer({ content }: { content: string }) {
  // Clean up the HTML content and add proper styling
  const cleanContent = content
    .replace(/<h2>/g, '<h2 class="text-3xl font-bold text-gray-900 mt-12 mb-6 border-b border-orange-200 pb-2">')
    .replace(/<h3>/g, '<h3 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">')
    .replace(/<p>/g, '<p class="text-gray-700 leading-relaxed mb-6 text-lg">')
    .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-orange-500 bg-gradient-to-r from-orange-50 to-orange-25 py-6 px-8 my-8 shadow-sm rounded-r-lg">')
    .replace(/<ul>/g, '<ul class="list-disc list-inside space-y-2 text-gray-700 mb-6 ml-4">')
    .replace(/<li>/g, '<li class="text-gray-700 leading-relaxed">')

  return (
    <div 
      className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900"
      dangerouslySetInnerHTML={{ __html: cleanContent }}
    />
  )
}

// Article metadata component
function ArticleMetadata({ post }: { post: any }) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-8">
      <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full border border-orange-100">
        <Calendar className="w-4 h-4 text-orange-500" />
        <span className="font-medium">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
      
      {post.readTime && (
        <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full border border-orange-100">
          <Clock className="w-4 h-4 text-orange-500" />
          <span>{post.readTime}</span>
        </div>
      )}
      
      {post.views && (
        <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full border border-orange-100">
          <Eye className="w-4 h-4 text-orange-500" />
          <span>{post.views} views</span>
        </div>
      )}
      
      {post.author && (
        <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full border border-orange-100">
          <User className="w-4 h-4 text-orange-500" />
          <span>By {post.author}</span>
        </div>
      )}
    </div>
  )
}

// Article actions (like, share, etc.)
function ArticleActions({ post }: { post: any }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <Button 
        variant="outline" 
        size="sm"
        className="flex items-center space-x-2 hover:bg-orange-50 hover:border-orange-300"
      >
        <Heart className="w-4 h-4" />
        <span>{post.likes || 0} Likes</span>
      </Button>
      
      <Button 
        variant="outline" 
        size="sm"
        onClick={handleShare}
        className="flex items-center space-x-2 hover:bg-orange-50 hover:border-orange-300"
      >
        <Share2 className="w-4 h-4" />
        <span>Share</span>
      </Button>
    </div>
  )
}

// Table of contents component (if the content has headings)
function TableOfContents({ content }: { content: string }) {
  const headings = content.match(/<h2[^>]*>(.*?)<\/h2>/g) || []
  
  if (headings.length === 0) return null

  return (
    <Card className="mb-8 bg-white/80 backdrop-blur-sm border-orange-100">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
        <nav className="space-y-2">
          {headings.map((heading, index) => {
            const text = heading.replace(/<[^>]*>/g, '')
            const slug = text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
            
            return (
              <a
                key={index}
                href={`#${slug}`}
                className="block text-sm text-gray-600 hover:text-orange-600 transition-colors duration-200 py-1"
              >
                {text}
              </a>
            )
          })}
        </nav>
      </CardContent>
    </Card>
  )
}

// Tags component
function ArticleTags({ tags }: { tags?: string[] }) {
  if (!tags || tags.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <span className="text-sm font-medium text-gray-600 mr-2">Tags:</span>
      {tags.map(tag => (
        <Badge 
          key={tag} 
          variant="secondary" 
          className="text-xs hover:bg-orange-100 hover:text-orange-700 cursor-pointer transition-colors duration-200"
        >
          {tag}
        </Badge>
      ))}
    </div>
  )
}

// Author card component
function AuthorCard({ author }: { author?: string }) {
  if (!author) return null

  return (
    <Card className="my-8 bg-gradient-to-r from-orange-50 to-white border-orange-200">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            {author.charAt(0)}
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">{author}</h4>
            <p className="text-gray-600 text-sm">
              Founder of Divya Bihar Mission, dedicated to transforming rural education through dharmic values and modern pedagogy.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Main component
export function BlogPost({ slug }: BlogPostProps) {
  const post = blogPosts.find(p => p.slug === slug)
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50/30 to-white">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-2xl">!</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Post Not Found</h1>
            <p className="text-gray-600 mb-6">
              Sorry, the blog post you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/blog">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <article className="min-h-screen bg-gradient-to-b from-orange-50/30 to-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-orange-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-all duration-200 hover:translate-x-1"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="font-medium">Back to Blog</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                {post.category}
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {post.excerpt}
            </p>
          </div>
          
          <ArticleMetadata post={post} />
          
          {/* Featured Image */}
          {post.image && (
            <div className="mb-12 relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          )}
        </header>

        {/* Article Content */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents - Hidden on mobile */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents content={post.content} />
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="bg-white/80 backdrop-blur-sm border-orange-100 shadow-xl">
              <CardContent className="p-8 md:p-12">
                {post.content ? (
                  <ContentRenderer content={post.content} />
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-600 text-lg">
                      Content coming soon...
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Separator className="my-8" />
            
            {/* Tags */}
            <ArticleTags tags={post.tags} />
            
            {/* Article Actions */}
            <ArticleActions post={post} />
            
            {/* Author Card */}
            <AuthorCard author={post.author} />
          </div>
        </div>
      </div>
      
      {/* Related Posts */}
      <RelatedPosts currentId={post.id} />
    </article>
  )
}