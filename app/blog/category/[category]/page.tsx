import { CategoryHero } from "@/components/blog/category-hero"
import { CategoryPosts } from "@/components/blog/category-posts"
import { BlogSidebar } from "@/components/blog/blog-sidebar"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <main>
      <CategoryHero category={params.category} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <CategoryPosts category={params.category} />
          </div>
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </main>
  )
}
