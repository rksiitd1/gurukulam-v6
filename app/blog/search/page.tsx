"use client"
import { blogPosts } from "@/lib/blog-posts"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Share2, Search as SearchIcon } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { useEffect, useRef, useState, Suspense } from "react"

export default function SearchPageWrapper() {
  return (
    <Suspense fallback={null}>
      <SearchPage />
    </Suspense>
  );
}

function SearchPage() {
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
      router.replace('/blog?focus=1');
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
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16 mb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-4">
            <SearchIcon className="w-8 h-8 text-orange-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Search Results</h1>
          <form
            onSubmit={e => e.preventDefault()}
            className="max-w-lg mx-auto mb-6"
            autoComplete="off"
          >
            <div className="relative flex">
              <Input
                ref={inputRef}
                type="text"
                placeholder="Search articles..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="flex-1 pr-12 text-lg bg-white/80 border-orange-200 focus:border-orange-400 shadow"
                autoFocus
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-400">
                <SearchIcon className="w-5 h-5" />
              </span>
            </div>
          </form>
          <div className="flex items-center justify-center gap-3 mb-2">
            {query && (
              <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                {filtered.length} result{filtered.length !== 1 && "s"} for "{query}"
              </span>
            )}
          </div>
          <p className="text-lg text-gray-600">
            {query ? (
              <>
                Showing articles matching <span className="font-semibold text-orange-600">"{query}"</span>
              </>
            ) : (
              "Enter a search term to find articles."
            )}
          </p>
        </div>
      </section>

      {/* Results Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="mb-6">
              <SearchIcon className="w-16 h-16 text-orange-200" />
            </div>
            <div className="text-2xl font-semibold text-gray-400 mb-2">No results found</div>
            <div className="text-gray-500">Try a different search term or check your spelling.</div>
          </div>
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
      </div>
    </main>
  );
} 