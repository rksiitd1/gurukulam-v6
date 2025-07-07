import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Sprout, Users, ArrowRight, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ProgramsGrid() {
  const programs = [
    {
      id: "gurukulam",
      title: "Divya Bihar Global Gurukulam",
      subtitle: "दिव्य बिहार ग्लोबल गुरुकुलम",
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
      description:
        "Residential K-12 school providing holistic education that combines NCERT curriculum with Sanskrit, Yoga, and traditional Indian values in a nurturing environment.",
      image: "/images/programs/gurukulam.jpg",
      features: [
        "NCERT Curriculum",
        "Residential Facilities",
        "Yoga & Meditation",
        "Cultural Programs",
        "Sports & Games",
        "Character Building",
      ],
      stats: {
        students: "200+",
        grades: "K-12",
        established: "2019",
        location: "Raghopur Campus",
      },
      highlights: [
        "95% Pass Rate in Board Exams",
        "50+ College Admissions",
        "State Level Competition Winners",
        "Character-based Education",
      ],
      color: "blue",
      link: "/programs/gurukulam",
    },
    {
      id: "shri-classes",
      title: "Shri Classes",
      subtitle: "श्री क्लासेज",
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
      description:
        "Specialized coaching for grades 9-12 focusing on Science, Mathematics, and competitive exam preparation with expert faculty and personalized attention.",
      image: "/images/programs/shri-classes.jpg",
      features: [
        "Grades 9-12 Coaching",
        "JEE/NEET Preparation",
        "Expert Faculty",
        "Small Batch Size",
        "Regular Mock Tests",
        "Doubt Clearing Sessions",
      ],
      stats: {
        students: "150+",
        grades: "9-12",
        established: "2019",
        location: "Multiple Centers",
      },
      highlights: [
        "85% Success Rate in Competitive Exams",
        "Top Ranks in JEE/NEET",
        "Scholarship Recipients",
        "Affordable Fee Structure",
      ],
      color: "green",
      link: "/programs/shri-classes",
    },
    {
      id: "agriculture",
      title: "Agriculture & Gaushala",
      subtitle: "कृषि और गौशाला",
      icon: <Sprout className="w-8 h-8 text-emerald-500" />,
      description:
        "Comprehensive agricultural training program promoting organic farming, agroforestry, and sustainable practices with hands-on experience at our demonstration farm.",
      image: "/images/programs/agro-gaushala.jpg",
      features: [
        "Organic Farming Training",
        "Agroforestry Models",
        "Cow Protection & Care",
        "Sustainable Practices",
        "Modern Equipment Training",
        "Market Linkage Support",
      ],
      stats: {
        farmers: "300+",
        acres: "100+",
        established: "2020",
        location: "Pirpainti Farm",
      },
      highlights: [
        "40% Increase in Farm Income",
        "200+ Trained Farmers",
        "25 Indigenous Cows",
        "Organic Certification Support",
      ],
      color: "emerald",
      link: "/programs/agriculture",
    },
    {
      id: "udyamita",
      title: "Udyamita Program",
      subtitle: "उद्यमिता कार्यक्रम",
      icon: <Users className="w-8 h-8 text-orange-500" />,
      description:
        "Entrepreneurship development program empowering women and youth with skills, training, and support to start their own businesses and become job creators.",
      image: "/images/programs/udyamita.jpg",
      features: [
        "Skill Development Training",
        "Business Plan Development",
        "Micro-finance Support",
        "Market Access",
        "Mentorship Program",
        "Women's Self-Help Groups",
      ],
      stats: {
        entrepreneurs: "100+",
        businesses: "50+",
        established: "2021",
        location: "Village Centers",
      },
      highlights: [
        "50+ Micro-enterprises Created",
        "150+ Women Trained",
        "20+ Self-Help Groups",
        "₹50L+ Income Generated",
      ],
      color: "orange",
      link: "/programs/udyamita",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-200 hover:border-blue-300 hover:shadow-blue-100",
      green: "border-green-200 hover:border-green-300 hover:shadow-green-100",
      emerald: "border-emerald-200 hover:border-emerald-300 hover:shadow-emerald-100",
      orange: "border-orange-200 hover:border-orange-300 hover:shadow-orange-100",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Four Pillars of
            <span className="text-blue-600 block">Transformation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each program is carefully designed to address specific needs of rural communities, creating a comprehensive
            ecosystem for holistic development and sustainable growth.
          </p>
          <p className="text-lg font-devanagari text-blue-700 mt-2">परिवर्तन के चार स्तंभ</p>
        </div>

        {/* Programs Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card
              key={program.id}
              className={`overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${getColorClasses(program.color)}`}
            >
              <div className="relative aspect-[4/3] sm:aspect-[3/2] w-full overflow-hidden bg-gray-100">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  width={1536}
                  height={1024}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 bg-gray-100"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  {program.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{program.title}</h3>
                  <p className="text-sm font-devanagari opacity-90">{program.subtitle}</p>
                </div>
              </div>

              <CardContent className="p-8 space-y-6">
                <p className="text-gray-600 leading-relaxed">{program.description}</p>

                {/* Program Stats */}
                <div className="grid grid-cols-2 gap-4 py-4 bg-gray-50 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {program.stats.students || program.stats.farmers || program.stats.entrepreneurs}
                    </div>
                    <div className="text-xs text-gray-600">
                      {program.stats.students ? "Students" : program.stats.farmers ? "Farmers" : "Entrepreneurs"}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {program.stats.grades || program.stats.acres || program.stats.businesses}
                    </div>
                    <div className="text-xs text-gray-600">
                      {program.stats.grades ? "Grades" : program.stats.acres ? "Acres" : "Businesses"}
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Program Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Est. {program.stats.established}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{program.stats.location}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Link href={program.link} className="flex-1">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Program Comparison */}
        <div className="mt-20 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-4 sm:p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Program Comparison</h3>
            <p className="text-gray-600 font-devanagari">कार्यक्रम तुलना</p>
          </div>

          {/* Mobile Card View */}
          <div className="block sm:hidden space-y-4">
            {/* Gurukulam */}
            <div className="bg-white rounded-xl shadow p-4 flex flex-col">
              <span className="font-bold text-blue-600 mb-1">Divya Bihar Gurukulam</span>
              <span className="text-xs text-gray-500 mb-1">Age Group: <span className="font-medium text-gray-900">5-18 years</span></span>
              <span className="text-xs text-gray-500 mb-1">Duration: <span className="font-medium text-gray-900">K-12 (13 years)</span></span>
              <span className="text-xs text-gray-500">Type: <span className="font-medium text-gray-900">Residential</span></span>
            </div>
            {/* Shri Classes */}
            <div className="bg-white rounded-xl shadow p-4 flex flex-col">
              <span className="font-bold text-green-600 mb-1">Shri Classes</span>
              <span className="text-xs text-gray-500 mb-1">Age Group: <span className="font-medium text-gray-900">14-18 years</span></span>
              <span className="text-xs text-gray-500 mb-1">Duration: <span className="font-medium text-gray-900">4 years</span></span>
              <span className="text-xs text-gray-500">Type: <span className="font-medium text-gray-900">Day Classes</span></span>
            </div>
            {/* Agriculture Program */}
            <div className="bg-white rounded-xl shadow p-4 flex flex-col">
              <span className="font-bold text-emerald-600 mb-1">Agriculture Program</span>
              <span className="text-xs text-gray-500 mb-1">Age Group: <span className="font-medium text-gray-900">18+ years</span></span>
              <span className="text-xs text-gray-500 mb-1">Duration: <span className="font-medium text-gray-900">3-6 months</span></span>
              <span className="text-xs text-gray-500">Type: <span className="font-medium text-gray-900">Training</span></span>
            </div>
            {/* Udyamita Program */}
            <div className="bg-white rounded-xl shadow p-4 flex flex-col">
              <span className="font-bold text-orange-600 mb-1">Udyamita Program</span>
              <span className="text-xs text-gray-500 mb-1">Age Group: <span className="font-medium text-gray-900">18+ years</span></span>
              <span className="text-xs text-gray-500 mb-1">Duration: <span className="font-medium text-gray-900">6-12 months</span></span>
              <span className="text-xs text-gray-500">Type: <span className="font-medium text-gray-900">Skill Development</span></span>
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="overflow-x-auto hidden sm:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Program</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Age Group</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Duration</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-blue-600">Divya Bihar Gurukulam</td>
                  <td className="text-center py-3 px-4">5-18 years</td>
                  <td className="text-center py-3 px-4">K-12 (13 years)</td>
                  <td className="text-center py-3 px-4">Residential</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-green-600">Shri Classes</td>
                  <td className="text-center py-3 px-4">14-18 years</td>
                  <td className="text-center py-3 px-4">4 years</td>
                  <td className="text-center py-3 px-4">Day Classes</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-emerald-600">Agriculture Program</td>
                  <td className="text-center py-3 px-4">18+ years</td>
                  <td className="text-center py-3 px-4">3-6 months</td>
                  <td className="text-center py-3 px-4">Training</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-orange-600">Udyamita Program</td>
                  <td className="text-center py-3 px-4">18+ years</td>
                  <td className="text-center py-3 px-4">6-12 months</td>
                  <td className="text-center py-3 px-4">Skill Development</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
