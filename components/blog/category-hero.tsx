import { BookOpen, Users, Calendar, Tag } from "lucide-react"

interface CategoryHeroProps {
  category: string
}

export function CategoryHero({ category }: CategoryHeroProps) {
  const categoryInfo = {
    education: {
      title: "Education",
      description:
        "Insights into our innovative teaching methods, curriculum development, and educational philosophy that combines traditional wisdom with modern learning.",
      icon: BookOpen,
      count: 45,
      color: "from-blue-600 to-indigo-600",
    },
    "success-stories": {
      title: "Success Stories",
      description:
        "Inspiring journeys of our students, alumni, and community members who have transformed their lives through education and determination.",
      icon: Users,
      count: 32,
      color: "from-green-600 to-emerald-600",
    },
    agriculture: {
      title: "Agriculture",
      description:
        "Sustainable farming practices, organic agriculture techniques, and stories of farmers who are revolutionizing rural agriculture.",
      icon: Calendar,
      count: 28,
      color: "from-orange-600 to-red-600",
    },
  }

  const info = categoryInfo[category as keyof typeof categoryInfo] || {
    title: category.charAt(0).toUpperCase() + category.slice(1),
    description: "Explore articles and stories in this category.",
    icon: Tag,
    count: 0,
    color: "from-gray-600 to-gray-700",
  }

  const IconComponent = info.icon

  return (
    <section className={`bg-gradient-to-br ${info.color} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
            <IconComponent className="w-10 h-10 text-white" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{info.title}</h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">{info.description}</p>

        <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-6 py-3 text-white">
          <span className="font-semibold">{info.count} Articles</span>
          <span>•</span>
          <span>Updated Weekly</span>
        </div>
      </div>
    </section>
  )
}
