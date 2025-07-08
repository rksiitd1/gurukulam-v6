"use client"
import { blogPosts } from "@/lib/blog-posts"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Share2, Search as SearchIcon, Frown } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"

function highlight(text: string, query: string) {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return text.split(regex).map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-yellow-200 text-orange-700 rounded px-1 py-0.5">{part}</mark>
    ) : (
      part
    )
  );
}

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
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Search Results</h1>
        <div className="max-w-md mx-auto mb-8">
          <Card className="rounded-xl shadow-lg bg-white/90 border border-orange-100">
            <div className="flex items-center px-4 py-3">
              <SearchIcon className="w-5 h-5 text-orange-500 mr-2" />
              <Input
                ref={inputRef}
                type="text"
                placeholder="Search articles..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="text-lg border-0 shadow-none focus:ring-0 bg-transparent"
                autoFocus
              />
            </div>
          </Card>
        </div>
        <p className="text-lg text-gray-600 mb-2">
          {query ? (
            <>
              <span className="font-semibold text-orange-600">{filtered.length}</span> result{filtered.length !== 1 && "s"} for <span className="font-semibold text-orange-600">"{query}"</span>
            </>
          ) : (
            "Enter a search term to find articles."
          )}
        </p>
      </div>
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-gray-500 text-xl py-20">
          <Frown className="w-12 h-12 mb-4 text-orange-300" />
          No results found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post, idx) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card
                className="group hover:shadow-2xl transition-all duration-300 overflow-hidden h-full rounded-xl bg-gradient-to-br from-orange-50 via-white to-yellow-50 border border-orange-100 animate-fade-in"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div className="relative rounded-t-xl">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
                  />
                </div>
                <CardContent className="p-5 flex flex-col justify-between h-full">
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap gap-2 mb-1">
                      {post.category && <Badge className="bg-orange-100 text-orange-700 border border-orange-200">{post.category}</Badge>}
                      {post.author && <Badge className="bg-blue-100 text-blue-700 border border-blue-200">{post.author}</Badge>}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {highlight(post.title, query)}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">{highlight(post.excerpt, query)}</p>
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
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s both;
        }
      `}</style>
    </main>
  );
} 