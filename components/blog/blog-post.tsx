import Link from "next/link"
import { Calendar, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface BlogPostProps {
  slug: string
}

export function BlogPost({ slug }: BlogPostProps) {
  // In a real app, you'd fetch the post data based on the slug
  const post = {
    title: "From IIT Delhi to Bihar Villages: A Journey of Purpose",
    content: `
      <p>When I graduated from IIT Delhi with a Computer Science degree, everyone expected me to join a multinational corporation or start a tech company. Instead, I chose a different path – one that led me back to the villages of Bihar, where I was born and raised.</p>
      
      <h2>The Calling</h2>
      <p>During my time at IIT, I witnessed the stark contrast between urban opportunities and rural realities. While my classmates discussed startup ideas and corporate packages, I couldn't stop thinking about the children in my village who had the same potential but lacked access to quality education.</p>
      
      <p>The turning point came during a visit home in my final year. I met Ravi, a bright 12-year-old who could solve complex mathematical problems in his head but had never seen a computer. His curiosity and intelligence reminded me of myself at that age, but unlike me, he didn't have the privilege of quality education.</p>
      
      <h2>The Decision</h2>
      <p>That encounter changed everything. I realized that true success isn't measured by personal achievements alone, but by the positive impact we create in others' lives. I decided to dedicate my life to bridging the educational gap between urban and rural India.</p>
      
      <blockquote>
        <p>"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela</p>
      </blockquote>
      
      <p>This quote resonated deeply with me as I embarked on this journey. I knew that by focusing on education, I could create a ripple effect that would transform entire communities.</p>
      
      <h2>Building Divya Bihar Mission</h2>
      <p>Starting Divya Bihar Mission wasn't easy. I faced skepticism from family, friends, and even potential beneficiaries. Many questioned why someone with an IIT degree would choose to work in rural areas when lucrative opportunities awaited in cities.</p>
      
      <p>But I was determined. I started small – with just five students in a rented room in Raghopur. We had no fancy infrastructure, no high-tech equipment, just a whiteboard, some books, and an unwavering belief in the power of education.</p>
      
      <h2>The Gurukulam Vision</h2>
      <p>
        The journey of Divya Bihar Mission began with a simple yet powerful vision: to provide quality education to
        every child in rural Bihar, irrespective of their socio-economic background. Our founder, Mukund Agrawal, an
        IIT Delhi alumnus, witnessed the stark educational disparities in his home state and was moved to create a
        system that was both modern in its approach and rooted in Indian values.
      </p>
      <p>
        Our founder's vision was not just to build schools, but to create centers of excellence that would serve as
        beacons of hope and transformation for entire communities. The goal was to nurture students who were not
        only academically proficient but also culturally aware, socially responsible, and equipped to lead in a global
        world. This led to the creation of our Gurukulam system – a unique blend of ancient wisdom and contemporary
        learning.
      </p>
      <p>
        In our Gurukulam, students learn Sanskrit alongside Science, practice yoga with mathematics, and understand
        dharmic values through practical applications. This holistic approach ensures that our students become
        well-rounded individuals, ready to face life's challenges with confidence and integrity.
      </p>
      
      <h2>Impact and Growth</h2>
      <p>Today, six years later, Divya Bihar Mission has grown beyond my wildest dreams. We have:</p>
      <ul>
        <li>Educated over 500 students across multiple programs</li>
        <li>Helped 50+ students gain admission to prestigious colleges</li>
        <li>Trained 200+ farmers in sustainable agriculture practices</li>
        <li>Supported 30+ young entrepreneurs through our Udyamita program</li>
      </ul>
      
      <p>But numbers don't tell the complete story. The real impact lies in the transformed lives – students who have become the first in their families to attend college, farmers who have doubled their income through organic practices, and young entrepreneurs who are creating jobs in their communities.</p>
      
      <h2>Challenges and Learnings</h2>
      <p>The journey hasn't been without challenges. We've faced funding constraints, infrastructure limitations, and occasional resistance to change. However, each challenge has taught us valuable lessons and made our mission stronger.</p>
      
      <p>One of the biggest learnings has been the importance of community involvement. Sustainable change can only happen when the community takes ownership of the transformation process. We've learned to work with local leaders, involve parents in decision-making, and respect traditional knowledge while introducing modern concepts.</p>
      
      <h2>Looking Ahead</h2>
      <p>As I reflect on this journey, I'm filled with gratitude and excitement for the future. We're planning to expand our reach to more villages, introduce new programs, and create a model that can be replicated across rural India.</p>
      
      <p>My message to young professionals, especially those from rural backgrounds, is simple: success isn't just about personal achievement. True fulfillment comes from using your skills and knowledge to uplift others. The villages that raised us need our expertise, our passion, and our commitment.</p>
      
      <p>The journey from IIT Delhi to Bihar villages has been the most rewarding experience of my life. Every day, I wake up knowing that my work has the potential to change lives, preserve our cultural heritage, and build a better future for rural India.</p>
      
      <p>This is not just my story – it's a call to action for all of us to contribute to the transformation of rural India, one village at a time.</p>
    `,
    category: "Founder Story",
    author: "Mukund Agrawal",
    date: "2024-01-15",
    readTime: "8 min read",
    views: "2.5K",
    likes: 156,
    image: "/placeholder.svg?height=500&width=800",
    tags: ["Education", "Rural Development", "IIT", "Bihar", "Social Impact"],
  }

  return (
    <article className="min-h-screen bg-gradient-to-b from-orange-50/30 to-white">
      {/* Back Button */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-all duration-200 hover:translate-x-1"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span className="font-medium">Back to Blog</span>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Article Header */}
        <header className="mb-12 text-center">
          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 text-sm font-medium shadow-lg mb-6">
            {post.category}
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
            {post.title}
          </h1>

          <div className="flex justify-center items-center text-gray-600 mb-8">
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 border border-orange-100">
              <Calendar className="w-5 h-5 text-orange-500" />
              <span className="font-medium">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 relative">
          <div className="relative overflow-hidden shadow-2xl">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white/60 backdrop-blur-sm p-8 md:p-12 shadow-xl border border-orange-100">
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-orange-500 prose-blockquote:bg-gradient-to-r prose-blockquote:from-orange-50 prose-blockquote:to-orange-25 prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:shadow-sm prose-ul:text-gray-700 prose-li:text-gray-700 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </article>
  )
}
