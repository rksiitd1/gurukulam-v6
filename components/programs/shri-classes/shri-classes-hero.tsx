import { Button } from "@/components/ui/button"
import { BookOpen, Users, Award, Clock, Star, Play } from "lucide-react"

export function ShriClassesHero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-blue-600">
                <BookOpen className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wide">Quality Education</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Excellence in
                <span className="text-blue-600 block">Academic Learning</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Comprehensive educational programs designed to nurture young minds with modern teaching methods,
                experienced faculty, and holistic development approach.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Small Batches</div>
                  <div className="text-xs text-gray-600">15-20 students</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="bg-green-100 p-2 rounded-full">
                  <Award className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Expert Faculty</div>
                  <div className="text-xs text-gray-600">10+ years exp.</div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Students Taught</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Subjects Offered</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Enroll Now
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Play className="h-4 w-4 mr-2" />
                Watch Demo Class
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9/5 Rating</span>
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">200+</span> Parent Reviews
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Students in classroom"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Award className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Top Results</div>
                  <div className="text-xs text-gray-600">Board Exams 2023</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Flexible Timing</div>
                  <div className="text-xs text-gray-600">Morning & Evening</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Highlights */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Why Choose Shri Classes?</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Comprehensive Curriculum",
                description: "Complete syllabus coverage with extra practice",
              },
              {
                icon: Users,
                title: "Personal Attention",
                description: "Individual focus on each student's progress",
              },
              {
                icon: Award,
                title: "Proven Results",
                description: "Consistent high performance in board exams",
              },
              {
                icon: Clock,
                title: "Flexible Schedule",
                description: "Multiple batch timings to suit your needs",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
