import { BlogPost } from "@/components/blog/blog-post"
import { RelatedPosts } from "@/components/blog/related-posts"
import { BlogComments } from "@/components/blog/blog-comments"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <main>
      <BlogPost slug={params.slug} />
      <RelatedPosts />
      <BlogComments />
    </main>
  )
}
