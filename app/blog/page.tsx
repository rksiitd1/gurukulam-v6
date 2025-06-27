import { BlogHero } from "@/components/blog/blog-hero"
import { FeaturedPosts } from "@/components/blog/featured-posts"
import { BlogGrid } from "@/components/blog/blog-grid"
import { Newsletter } from "@/components/blog/newsletter"

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <FeaturedPosts />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <BlogGrid />
      </div>

      <Newsletter />
    </main>
  )
}
