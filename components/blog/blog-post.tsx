"use client"

import Link from "next/link"
import { Calendar, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { blogPosts } from "@/lib/blog-posts"
import { RelatedPosts } from "./related-posts"
import { useEffect, useState, useRef } from "react"

interface BlogPostProps {
  slug: string
}

// Enhanced content renderer with refined typography
function ContentRenderer({ content }: { content: string }) {
  // Add id attributes to h2 headings for anchor navigation
  const cleanContent = content
    .replace(/<h2>(.*?)<\/h2>/g, (match, p1) => {
      const slug = p1.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return `<h2 id="${slug}" class=\"text-3xl font-semibold text-gray-900 mt-16 mb-6 tracking-tight leading-snug font-serif relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-gradient-to-r after:from-orange-500 after:to-red-500 after:rounded-full pb-3 scroll-mt-24\">${p1}</h2>`;
    })
    .replace(/<h3>/g, '<h3 class="text-xl font-medium text-gray-800 mt-12 mb-4 tracking-wide font-serif">')
    .replace(/<p>/g, '<p class="text-gray-700 leading-relaxed mb-6 text-lg font-normal tracking-wide">')
    .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-orange-500 bg-gradient-to-r from-orange-50/70 to-transparent py-6 px-8 my-8 text-lg font-medium italic text-gray-700 rounded-r-lg relative before:content-[\'"\'] before:text-6xl before:text-orange-300 before:absolute before:-top-2 before:left-4 before:font-serif">')
    .replace(/<ul>/g, '<ul class="space-y-3 text-gray-700 mb-8 text-lg font-normal">')
    .replace(/<li>/g, '<li class="relative pl-6 leading-relaxed before:content-[\'•\'] before:absolute before:left-0 before:text-orange-500 before:font-bold before:text-xl">')

  return (
    <div 
      className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-a:font-medium prose-strong:text-gray-900 prose-strong:font-semibold"
      dangerouslySetInnerHTML={{ __html: cleanContent }}
    />
  )
}

// Refined article metadata with perfect proportions
function ArticleMetadata({ post }: { post: any }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
    }
  }

  return (
    <div className="flex items-center justify-between mb-12">
      <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-orange-100/60 shadow-sm">
        <Calendar className="w-4 h-4 text-orange-500" />
        <span className="font-medium text-gray-700 text-sm tracking-wide">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
      
      <Button 
        variant="outline" 
        size="sm"
        onClick={handleShare}
        className="flex items-center space-x-2 bg-white/80 backdrop-blur-md hover:bg-orange-50 hover:border-orange-300 border-orange-100/60 shadow-sm rounded-full px-5 py-2.5 transition-all duration-300 hover:scale-105 text-sm font-medium"
      >
        <Share2 className="w-4 h-4" />
        <span className="tracking-wide">Share</span>
      </Button>
    </div>
  )
}

// Elegant table of contents with perfect sizing
function TableOfContents({ content }: { content: string }) {
  const headings = content.match(/<h2[^>]*>(.*?)<\/h2>/g) || []
  
  if (headings.length === 0) return null

  return (
    <Card className="mb-8 bg-white/80 backdrop-blur-md border-orange-100/60 shadow-lg rounded-2xl overflow-hidden">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 font-serif tracking-tight">Contents</h3>
        <nav className="space-y-2">
          {headings.map((heading, index) => {
            const text = heading.replace(/<[^>]*>/g, '')
            const slug = text.toLowerCase().replace(/[^a-z0-9]+/g, '-')
            
            return (
              <a
                key={index}
                href={`#${slug}`}
                className="block text-sm text-gray-600 hover:text-orange-600 transition-all duration-300 py-1.5 hover:translate-x-1 font-medium tracking-wide border-l-2 border-transparent hover:border-orange-300 pl-3"
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

// Main component with stunning design
export function BlogPost({ slug }: BlogPostProps) {
  const post = blogPosts.find(p => p.slug === slug)
  const [showStickyTitle, setShowStickyTitle] = useState(false)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!titleRef.current) return;
      const rect = titleRef.current.getBoundingClientRect();
      setShowStickyTitle(rect.bottom < 80); // 80px is a safe nav height
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50/40 via-white to-red-50/40">
        <Card className="max-w-md w-full mx-4 bg-white/90 backdrop-blur-md border-orange-100/60 shadow-lg rounded-2xl">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <span className="text-red-600 text-2xl font-semibold">!</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-3 font-serif tracking-tight">Post Not Found</h1>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Sorry, the blog post you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/blog">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium px-6 py-2.5 rounded-full shadow-md transition-all duration-300 hover:scale-105">
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
    <article className="min-h-screen bg-gradient-to-br from-orange-50/40 via-white to-red-50/40">
      {/* Refined Navigation */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-xl border-b border-orange-100/60 z-50 shadow-sm min-h-16" style={{ minHeight: '4rem' }}>
        <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-row items-center justify-between w-full gap-2">
            {/* Back button: hide on mobile when sticky title is visible */}
            <Link
              href="/blog"
              className={`group inline-flex items-center text-orange-600 hover:text-orange-700 transition-all duration-300 font-semibold tracking-wide text-xs sm:text-sm px-3 py-2 rounded-full bg-white/80 border border-orange-300 shadow-sm hover:bg-orange-50 focus:ring-2 focus:ring-orange-300 focus:outline-none h-9 min-w-[90px] justify-center
                ${showStickyTitle ? 'hidden sm:flex' : ''}`}
              style={{ minHeight: '2.25rem' }}
            >
              <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="inline sm:hidden">Back</span>
              <span className="hidden sm:inline">Back to Blog</span>
            </Link>
            <div className="flex-1 flex justify-center items-center min-w-0">
              <span
                className={`transition-opacity duration-300 whitespace-nowrap overflow-hidden font-semibold text-base sm:text-lg text-gray-900 relative ${showStickyTitle ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                style={{ maxWidth: '80vw', display: 'inline-block', verticalAlign: 'middle' }}
              >
                {post?.title}
                <span
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-full w-8 pointer-events-none"
                  style={{
                    background: 'linear-gradient(to right, transparent, white 80%)',
                    display: 'inline-block',
                  }}
                />
              </span>
            </div>
            {/* Category badge: hide on mobile when sticky title is visible */}
            <div className={`px-3 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-md font-medium tracking-wide text-xs sm:text-sm h-9 flex items-center min-w-[90px] justify-center
              ${showStickyTitle ? 'hidden sm:flex' : ''}`}>
              {post.category}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with refined typography */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-6 sm:mb-12 px-2">
          <h1 ref={titleRef} className="text-3xl xs:text-4xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-4 leading-tight tracking-tight font-serif break-words">
            {post.title}
          </h1>
          <p className="text-base xs:text-lg md:text-lg text-gray-600 mb-3 sm:mb-6 max-w-3xl mx-auto leading-relaxed font-normal tracking-wide">
            {post.excerpt}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 w-full max-w-xl mx-auto">
            <ArticleMetadata post={post} />
          </div>
        </header>

        {/* Featured Image with refined proportions */}
        {post.image && (
          <div className="mb-16 relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        )}
      </div>

      {/* Content Section with refined spacing */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents content={post.content} />
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="bg-white/80 backdrop-blur-md border-orange-100/60 shadow-lg rounded-2xl overflow-hidden">
              <CardContent className="p-8 md:p-10">
                {post.content ? (
                  <ContentRenderer content={post.content} />
                ) : (
                  <div className="text-center py-16">
                    <p className="text-gray-600 text-lg font-medium tracking-wide">
                      Content coming soon...
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Related Posts with refined styling */}
      <div className="bg-gradient-to-r from-orange-50/60 to-red-50/60 py-16">
        <RelatedPosts currentId={post.id} />
      </div>
    </article>
  )
}