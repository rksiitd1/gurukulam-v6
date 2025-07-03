import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Users, Award, Sprout, GraduationCap } from "lucide-react"

export function Journey() {
  const milestones = [
    {
      year: "2018",
      month: "June",
      title: "Return to Bihar",
      description:
        "Left corporate opportunities to return to Raghopur, Supaul. Started with informal teaching sessions for village children under a banyan tree.",
      icon: <MapPin className="w-6 h-6 text-blue-500" />,
      impact: "Started with 15 children",
      color: "blue",
    },
    {
      year: "2018",
      month: "October",
      title: "Divya Bihar Mission Founded",
      description:
        "Officially registered the organization with a vision to provide holistic education combining modern curriculum with Indian values.",
      icon: <GraduationCap className="w-6 h-6 text-green-500" />,
      impact: "Legal foundation established",
      color: "green",
    },
    {
      year: "2019",
      month: "April",
      title: "First Formal Classroom",
      description:
        "Established the first proper classroom facility with basic infrastructure. Started structured curriculum for grades 1-8.",
      icon: <Users className="w-6 h-6 text-orange-500" />,
      impact: "50 students enrolled",
      color: "orange",
    },
    {
      year: "2019",
      month: "November",
      title: "Shri Classes Launched",
      description:
        "Started coaching classes for grades 9-12, focusing on Science and Mathematics with competitive exam preparation.",
      icon: <Award className="w-6 h-6 text-purple-500" />,
      impact: "25 students in first batch",
      color: "purple",
    },
    {
      year: "2020",
      month: "January",
      title: "Residential Facilities",
      description:
        "Opened hostel facilities for students from distant villages, providing affordable boarding with nutritious meals.",
      icon: <Users className="w-6 h-6 text-red-500" />,
      impact: "30 residential students",
      color: "red",
    },
    {
      year: "2020",
      month: "August",
      title: "Agro Project Initiated",
      description:
        "Started demonstration farm in Pirpainti, Bhagalpur, implementing agroforestry model and organic farming techniques.",
      icon: <Sprout className="w-6 h-6 text-emerald-500" />,
      impact: "20 acres under cultivation",
      color: "emerald",
    },
    {
      year: "2021",
      month: "March",
      title: "Gaushala Established",
      description:
        "Set up cow shelter to preserve indigenous breeds and promote organic farming through natural fertilizers.",
      icon: <Sprout className="w-6 h-6 text-green-600" />,
      impact: "25 indigenous cows",
      color: "green",
    },
    {
      year: "2021",
      month: "September",
      title: "Women's Udyamita Program",
      description:
        "Launched entrepreneurship training for rural women, focusing on handicrafts, food processing, and small businesses.",
      icon: <Users className="w-6 h-6 text-pink-500" />,
      impact: "40 women trained",
      color: "pink",
    },
    {
      year: "2022",
      month: "June",
      title: "First Graduation Batch",
      description:
        "Celebrated the first batch of students completing their 12th grade, with 95% passing rate and several securing college admissions.",
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      impact: "20 graduates, 18 in colleges",
      color: "yellow",
    },
    {
      year: "2023",
      month: "April",
      title: "Expansion to Multiple Villages",
      description:
        "Extended programs to 15 villages across Supaul district, establishing satellite learning centers and mobile teaching units.",
      icon: <MapPin className="w-6 h-6 text-indigo-500" />,
      impact: "500+ students across villages",
      color: "indigo",
    },
    {
      year: "2024",
      month: "January",
      title: "Recognition & Awards",
      description:
        "Received state recognition for innovative rural education model. Featured in national media for grassroots impact.",
      icon: <Award className="w-6 h-6 text-gold-500" />,
      impact: "State-level recognition",
      color: "yellow",
    },
    {
      year: "2024",
      month: "Present",
      title: "Scaling Impact",
      description:
        "Currently serving 500+ students, 200+ families, with plans to establish model schools in 5 districts of Bihar.",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      impact: "Vision for 5 districts",
      color: "blue",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-200 bg-blue-50",
      green: "border-green-200 bg-green-50",
      orange: "border-orange-200 bg-orange-50",
      purple: "border-purple-200 bg-purple-50",
      red: "border-red-200 bg-red-50",
      emerald: "border-emerald-200 bg-emerald-50",
      pink: "border-pink-200 bg-pink-50",
      yellow: "border-yellow-200 bg-yellow-50",
      indigo: "border-indigo-200 bg-indigo-50",
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            Journey Timeline
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Six Years of
            <span className="text-blue-600 block">Transformative Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a single classroom under a banyan tree to a comprehensive rural development mission - witness the
            evolution of a dream into reality.
          </p>
          <p className="text-lg font-devanagari text-blue-700 mt-2">छह साल की परिवर्तनकारी यात्रा</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-orange-500"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white border-4 border-blue-500 rounded-full shadow-lg z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? "md:mr-8 md:ml-0" : "md:ml-8 md:mr-0"} md:w-1/2`}>
                  <Card className={`hover:shadow-xl transition-all duration-300 ${getColorClasses(milestone.color)}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                            {milestone.icon}
                          </div>
                        </div>

                        <div className="flex-1 space-y-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-gray-900">{milestone.year}</span>
                            <span className="text-sm font-medium text-gray-600 bg-white px-2 py-1 rounded">
                              {milestone.month}
                            </span>
                          </div>

                          <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>

                          <p className="text-gray-700 leading-relaxed">{milestone.description}</p>

                          <div className="bg-white rounded-lg p-3 border border-gray-200">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm font-medium text-green-800">Impact: {milestone.impact}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Journey in Numbers</h3>
            <p className="text-gray-600 font-devanagari">संख्याओं में यात्रा</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">6+</div>
              <div className="text-gray-700 font-medium">Years of Service</div>
              <div className="text-sm text-gray-500">Since 2018</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Students Impacted</div>
              <div className="text-sm text-gray-500">Across all programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Villages Reached</div>
              <div className="text-sm text-gray-500">In Supaul district</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-gray-700 font-medium">Families Supported</div>
              <div className="text-sm text-gray-500">Through various initiatives</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
