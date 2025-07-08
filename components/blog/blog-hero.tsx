"use client"

import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export function BlogHero() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (search.trim()) {
      const timeout = setTimeout(() => {
        router.push(`/blog/search?q=${encodeURIComponent(search.trim())}`);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      // If search is cleared, go back to blog page
      router.push('/blog');
    }
  }, [search, router]);

  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Divya Bihar Mission
            <span className="block text-orange-600">Updates &amp; Stories</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Inspiring stories, educational insights, and updates from our mission
          </p>
          <p className="text-lg text-gray-500 font-devanagari mb-8">शिक्षा और संस्कार की कहानियां</p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative flex">
              <Input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="flex-1 pr-12"
              />
              <Button
                type="button"
                className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-2"
                variant="secondary"
                aria-label="Search"
                tabIndex={-1}
                disabled
                style={{ pointerEvents: 'none', opacity: 0.5 }}
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border Design */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Thin 2px line */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>

        {/* Decorative geometric pattern */}
        <div className="relative h-8 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center space-x-12">
              {/* Lotus-inspired design */}
              <div className="relative">
                <div className="w-6 h-6 bg-orange-400 rounded-full opacity-20"></div>
                <div className="absolute top-1 left-1 w-4 h-4 bg-orange-500 rounded-full opacity-30"></div>
                <div className="absolute top-2 left-2 w-2 h-2 bg-orange-600 rounded-full opacity-60"></div>
              </div>

              {/* Diamond pattern */}
              <div className="relative">
                <div className="w-4 h-4 bg-red-400 transform rotate-45 opacity-40"></div>
                <div className="absolute top-1 left-1 w-2 h-2 bg-red-500 transform rotate-45 opacity-60"></div>
              </div>

              {/* Traditional pattern */}
              <div className="flex items-center space-x-1">
                <div className="w-1 h-4 bg-orange-400 opacity-50"></div>
                <div className="w-1 h-6 bg-orange-500 opacity-60"></div>
                <div className="w-1 h-4 bg-orange-400 opacity-50"></div>
              </div>

              {/* Hexagonal pattern */}
              <div className="relative">
                <svg width="20" height="20" viewBox="0 0 20 20" className="text-red-400 opacity-40">
                  <polygon points="10,2 18,7 18,13 10,18 2,13 2,7" fill="currentColor" />
                </svg>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 20 20"
                  className="absolute top-1 left-1 text-red-500 opacity-60"
                >
                  <polygon points="10,2 18,7 18,13 10,18 2,13 2,7" fill="currentColor" />
                </svg>
              </div>

              {/* Mandala-inspired circles */}
              <div className="relative">
                <div className="w-5 h-5 border-2 border-orange-400 rounded-full opacity-30"></div>
                <div className="absolute top-1.5 left-1.5 w-2 h-2 bg-orange-500 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>

          {/* Subtle wave pattern */}
          <div className="absolute bottom-0 left-0 right-0 h-1">
            <svg width="100%" height="4" viewBox="0 0 1200 4" className="text-orange-200 opacity-60">
              <path d="M0,2 Q300,0 600,2 T1200,2" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
