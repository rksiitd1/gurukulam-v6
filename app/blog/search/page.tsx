"use client"
import { blogPosts } from "@/lib/blog-posts"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Share2 } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { useEffect, useRef, useState } from "react"

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = (searchParams.get("q") || "");
  const [query, setQuery] = useState(initialQuery);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update URL as user types
  useEffect(() => {
    if (query.trim()) {
      const timeout = setTimeout(() => {
        router.replace(`/blog/search?q=${encodeURIComponent(query.trim())}`);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      // If search is cleared, go back to blog page and focus input
      router.replace('/blog');
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [query, router]);

  // Keep input in sync if URL changes (e.g., back/forward navigation)
  useEffect(() => {
    if (searchParams.get("q") !== query) {
      setQuery(searchParams.get("q") || "");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get("q")]);

  const filtered = blogPosts
    .filter(
      post =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => b.id - a.id);

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Search Results</h1>
        <div className="max-w-md mx-auto mb-8">
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search articles..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="text-lg"
            autoFocus
          />
        </div>
        <p className="text-lg text-gray-600">
          {query ? (
            <>
              Showing results for <span className="font-semibold text-orange-600">"{query}"</span>
            </>
          ) : (
            "Enter a search term to find articles."
          )}
        </p>
      </div>
      {filtered.length === 0 ? (
        <div className="text-center text-gray-500 text-xl py-20">No results found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(post => (
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
      )}
    </main>
  );
} 