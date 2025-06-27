import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Sprout, Users, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Programs() {
  const programs = [
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
      title: "Divya Bihar Global Gurukulam",
      subtitle: "दिव्य बिहार ग्लोबल गुरुकुलम",
      description:
        "K-12 residential school combining NCERT curriculum with Sanskrit, Yoga, and traditional values. Affordable education with hostel facilities for village children.",
      features: ["NCERT Curriculum", "Sanskrit & Yoga", "Residential Facilities", "Cultural Programs"],
      image: "/placeholder.svg?height=300&width=400",
      color: "blue",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
      title: "Shri Classes",
      subtitle: "श्री क्लासेज",
      description:
        "Coaching classes for grades 9-12 focusing on Science, Mathematics, and competitive exam preparation with minimal fees for rural students.",
      features: ["Grades 9-12 Coaching", "Competitive Exams", "Minimal Fees", "Expert Faculty"],
      image: "/placeholder.svg?height=300&width=400",
      color: "green",
    },
    {
      icon: <Sprout className="w-8 h-8 text-emerald-500" />,
      title: "Agro & Gaushala",
      subtitle: "कृषि और गौशाला",
      description:
        "Demonstration farm promoting agroforestry, organic farming, and cow protection. Training farmers in sustainable agricultural practices.",
      features: ["Agroforestry Model", "Organic Farming", "Cow Protection", "Farmer Training"],
      image: "/placeholder.svg?height=300&width=400",
      color: "emerald",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Udyamita Program",
      subtitle: "उद्यमिता कार्यक्रम",
      description:
        "Entrepreneurship training for women and youth, creating village-based job creators through skill development and micro-enterprises.",
      features: ["Women Empowerment", "Skill Development", "Micro-enterprises", "Self-reliance"],
      image: "/placeholder.svg?height=300&width=400",
      color: "orange",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-200 hover:border-blue-300",
      green: "border-green-200 hover:border-green-300",
      emerald: "border-emerald-200 hover:border-emerald-300",
      orange: "border-orange-200 hover:border-orange-300",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium mb-4">
            <span className="mr-2">🎯</span>
            Our Programs
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Development
            <span className="text-green-600 block">Through Multiple Initiatives</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Our holistic approach addresses education, agriculture, entrepreneurship, and cultural preservation to
            create sustainable change in rural Bihar.
          </p>
          <p className="text-sm sm:text-base lg:text-lg font-devanagari text-green-700 mt-2">
            समग्र विकास के लिए व्यापक कार्यक्रम
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-xl transition-all duration-300 ${getColorClasses(program.color)}`}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  {program.icon}
                </div>
              </div>

              <CardHeader className="space-y-2 p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl text-gray-900">{program.title}</CardTitle>
                <p className="text-base sm:text-lg font-devanagari text-gray-600">{program.subtitle}</p>
              </CardHeader>

              <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                <p className="text-sm sm:text-base text-gray-600">{program.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-xs sm:text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <Link href={
                    index === 0 ? "/programs/gurukulam" :
                    index === 1 ? "/programs/shri-classes" :
                    index === 2 ? "/programs/agriculture" :
                    index === 3 ? "/programs/udyamita" :
                    "/programs"
                  }>
                    <Button variant="outline" className="touch-manipulation border-2 border-blue-500">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/donate">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white text-sm touch-manipulation">
                      Support This
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action - responsive */}
        <div className="mt-12 lg:mt-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 sm:p-8 text-center text-white">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 opacity-90">
            Join our mission to transform rural education and empower communities across Bihar.
          </p>
          <p className="font-devanagari text-base sm:text-lg mb-4 sm:mb-6 opacity-90">
            आइए, मिलकर बिहार के गांवों को शिक्षित और सशक्त बनाएं
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/donate" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-gray-100 w-full sm:w-auto touch-manipulation"
              >
                Donate Now
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white hover:bg-white/10 w-full sm:w-auto touch-manipulation text-slate-500"
            >
              Volunteer With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
