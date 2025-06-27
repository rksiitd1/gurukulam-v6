import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Trophy, Star } from "lucide-react"
import Image from "next/image"

export function StudentShowcase() {
  const achievements = [
    {
      id: 1,
      title: "Academic Excellence Awards 2024",
      description:
        "Top performing students across all grades receiving recognition for outstanding academic performance",
      image: "/placeholder.svg?height=400&width=600",
      students: [
        { name: "Priya Kumari", grade: "Class 12", achievement: "98% in Science Stream" },
        { name: "Raj Kumar", grade: "Class 10", achievement: "95% with Perfect Math Score" },
        { name: "Anita Singh", grade: "Class 8", achievement: "District Topper in Sanskrit" },
      ],
      category: "Academic",
      date: "March 2024",
    },
    {
      id: 2,
      title: "Science Olympiad Winners",
      description: "Our students bringing laurels by winning state and national level science competitions",
      image: "/placeholder.svg?height=400&width=600",
      students: [
        { name: "Amit Kumar", grade: "Class 11", achievement: "State Level Physics Olympiad Winner" },
        { name: "Sunita Devi", grade: "Class 9", achievement: "National Science Talent Search Qualifier" },
        { name: "Ravi Singh", grade: "Class 12", achievement: "Chemistry Olympiad State Rank 3" },
      ],
      category: "Competition",
      date: "February 2024",
    },
    {
      id: 3,
      title: "Cultural Program Champions",
      description: "Students showcasing their talents in traditional arts, music, and dance competitions",
      image: "/placeholder.svg?height=400&width=600",
      students: [
        { name: "Kavita Sharma", grade: "Class 10", achievement: "Classical Dance State Champion" },
        { name: "Deepak Kumar", grade: "Class 11", achievement: "Folk Music Competition Winner" },
        { name: "Meera Gupta", grade: "Class 9", achievement: "Sanskrit Recitation Gold Medal" },
      ],
      category: "Cultural",
      date: "January 2024",
    },
    {
      id: 4,
      title: "Sports Achievement Gallery",
      description: "Athletic excellence and sportsmanship displayed by our students in various sporting events",
      image: "/placeholder.svg?height=400&width=600",
      students: [
        { name: "Rohit Singh", grade: "Class 12", achievement: "District Cricket Team Captain" },
        { name: "Pooja Kumari", grade: "Class 11", achievement: "State Level Badminton Semifinalist" },
        { name: "Vikash Kumar", grade: "Class 10", achievement: "Inter-School Athletics Gold Medal" },
      ],
      category: "Sports",
      date: "December 2023",
    },
  ]

  const graduationStories = [
    {
      name: "Rajesh Kumar",
      year: "2023",
      achievement: "Admitted to NIT Patna - Computer Science",
      image: "/placeholder.svg?height=200&width=200",
      story:
        "From a small village with no electricity to one of India's premier engineering colleges - Rajesh's journey exemplifies the transformative power of quality education.",
      currentStatus: "B.Tech 2nd Year, NIT Patna",
    },
    {
      name: "Priya Sharma",
      year: "2022",
      achievement: "Medical College Admission - MBBS",
      image: "/placeholder.svg?height=200&width=200",
      story:
        "First girl from her village to pursue medicine, Priya is now studying MBBS and dreams of serving rural communities as a doctor.",
      currentStatus: "MBBS 3rd Year, AIIMS Patna",
    },
    {
      name: "Amit Singh",
      year: "2023",
      achievement: "Started Successful Agri-Business",
      image: "/placeholder.svg?height=200&width=200",
      story:
        "Combining traditional farming with modern techniques, Amit has created a thriving organic farming business employing 20+ villagers.",
      currentStatus: "Entrepreneur, Organic Farming",
    },
  ]

  const getCategoryIcon = (category: string) => {
    const icons = {
      Academic: <BookOpen className="w-5 h-5" />,
      Competition: <Trophy className="w-5 h-5" />,
      Cultural: <Star className="w-5 h-5" />,
      Sports: <Award className="w-5 h-5" />,
    }
    return icons[category as keyof typeof icons] || icons.Academic
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Academic: "bg-blue-100 text-blue-800",
      Competition: "bg-green-100 text-green-800",
      Cultural: "bg-orange-100 text-orange-800",
      Sports: "bg-purple-100 text-purple-800",
    }
    return colors[category as keyof typeof colors] || colors.Academic
  }

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4 mr-2" />
            Student Showcase
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Celebrating
            <span className="text-green-600 block">Student Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our students are our greatest achievement. From academic excellence to cultural prowess, from sporting
            achievements to entrepreneurial success - witness the remarkable journey of our young changemakers.
          </p>
          <p className="text-lg font-devanagari text-green-700 mt-2">छात्र सफलता का जश्न</p>
        </div>

        {/* Achievement Categories */}
        <div className="space-y-12 mb-20">
          {achievements.map((achievement, index) => (
            <Card key={achievement.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={achievement.image || "/placeholder.svg"}
                      alt={achievement.title}
                      width={600}
                      height={400}
                      className="w-full h-80 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(achievement.category)} bg-white/90`}
                      >
                        <span className="inline-flex items-center space-x-1">
                          {getCategoryIcon(achievement.category)}
                          <span>{achievement.category}</span>
                        </span>
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 text-white text-sm bg-black/50 px-3 py-1 rounded">
                      {achievement.date}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Featured Students:</h4>
                        {achievement.students.map((student, studentIndex) => (
                          <div key={studentIndex} className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <h5 className="font-semibold text-gray-900">{student.name}</h5>
                                <p className="text-sm text-gray-600">{student.grade}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-sm font-medium text-green-600">{student.achievement}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Graduation Success Stories */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Graduation Success Stories</h3>
            <p className="text-lg text-gray-600 font-devanagari">स्नातक सफलता की कहानियां</p>
            <p className="text-gray-600 mt-2">
              Where our graduates are today - making a difference in their chosen fields
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {graduationStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      width={120}
                      height={120}
                      className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full shadow-lg">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{story.name}</h4>
                      <p className="text-sm text-gray-600">Class of {story.year}</p>
                    </div>

                    <div className="bg-green-50 rounded-lg p-3">
                      <p className="text-sm font-medium text-green-800">{story.achievement}</p>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed italic">"{story.story}"</p>

                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-xs font-medium text-blue-600">{story.currentStatus}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
