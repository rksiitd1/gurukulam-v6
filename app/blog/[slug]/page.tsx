import { BlogPost } from "@/components/blog/blog-post"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <main>
      <BlogPost slug={params.slug} />
    </main>
  )
}
