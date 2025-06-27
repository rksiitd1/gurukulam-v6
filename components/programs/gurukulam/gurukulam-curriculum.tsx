import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Calculator, Globe, Palette, Music, Dumbbell, Heart, Brain } from "lucide-react"

export function GurukulamCurriculum() {
  const curriculumStructure = [
    {
      level: "Primary (K-5)",
      ageGroup: "5-11 years",
      focus: "Foundation Building",
      subjects: [
        { name: "Hindi & English", icon: <BookOpen className="w-5 h-5 text-blue-500" /> },
        { name: "Mathematics", icon: <Calculator className="w-5 h-5 text-green-500" /> },
        { name: "Environmental Studies", icon: <Globe className="w-5 h-5 text-emerald-500" /> },
        { name: "Sanskrit Basics", icon: <Heart className="w-5 h-5 text-orange-500" /> },
        { name: "Art & Craft", icon: <Palette className="w-5 h-5 text-purple-500" /> },
        { name: "Physical Education", icon: <Dumbbell className="w-5 h-5 text-red-500" /> },
      ],
      specialFeatures: [
        "Play-based learning",
        "Story-telling sessions",
        "Basic Sanskrit shlokas",
        "Moral value education",
        "Creative activities",
        "Outdoor games",
      ],
    },
    {
      level: "Middle (6-8)",
      ageGroup: "11-14 years",
      focus: "Skill Development",
      subjects: [
        { name: "Languages (Hindi, English, Sanskrit)", icon: <BookOpen className="w-5 h-5 text-blue-500" /> },
        { name: "Mathematics", icon: <Calculator className="w-5 h-5 text-green-500" /> },
        { name: "Science", icon: <Brain className="w-5 h-5 text-indigo-500" /> },
        { name: "Social Studies", icon: <Globe className="w-5 h-5 text-emerald-500" /> },
        { name: "Computer Science", icon: <Brain className="w-5 h-5 text-purple-500" /> },
        { name: "Music & Dance", icon: <Music className="w-5 h-5 text-pink-500" /> },
      ],
      specialFeatures: [
        "NCERT curriculum",
        "Sanskrit literature",
        "Science practicals",
        "Computer literacy",
        "Cultural programs",
        "Leadership activities",
      ],
    },
    {
      level: "Secondary (9-10)",
      ageGroup: "14-16 years",
      focus: "Board Preparation",
      subjects: [
        { name: "Hindi & English", icon: <BookOpen className="w-5 h-5 text-blue-500" /> },
        { name: "Mathematics", icon: <Calculator className="w-5 h-5 text-green-500" /> },
        { name: "Science (Physics, Chemistry, Biology)", icon: <Brain className="w-5 h-5 text-indigo-500" /> },
        { name: "Social Science", icon: <Globe className="w-5 h-5 text-emerald-500" /> },
        { name: "Sanskrit", icon: <Heart className="w-5 h-5 text-orange-500" /> },
        { name: "Computer Applications", icon: <Brain className="w-5 h-5 text-purple-500" /> },
      ],
      specialFeatures: [
        "CBSE board preparation",
        "Regular assessments",
        "Competitive exam foundation",
        "Project-based learning",
        "Career counseling",
        "Personality development",
      ],
    },
    {
      level: "Senior Secondary (11-12)",
      ageGroup: "16-18 years",
      focus: "Career Preparation",
      subjects: [
        { name: "Physics, Chemistry, Mathematics", icon: <Calculator className="w-5 h-5 text-green-500" /> },
        { name: "Physics, Chemistry, Biology", icon: <Brain className="w-5 h-5 text-indigo-500" /> },
        { name: "Commerce Stream", icon: <BookOpen className="w-5 h-5 text-blue-500" /> },
        { name: "Arts Stream", icon: <Palette className="w-5 h-5 text-purple-500" /> },
      ],
      specialFeatures: [
        "Stream specialization",
        "JEE/NEET preparation",
        "Career guidance",
        "College admission support",
        "Scholarship assistance",
        "Industry exposure",
      ],
    },
  ]

  const coCurricular = [
    {
      category: "Cultural Activities",
      icon: <Music className="w-6 h-6 text-pink-500" />,
      activities: [
        "Classical Music & Dance",
        "Folk Arts of Bihar",
        "Drama & Theatre",
        "Sanskrit Recitation",
        "Festival Celebrations",
        "Cultural Competitions",
      ],
    },
    {
      category: "Sports & Games",
      icon: <Dumbbell className="w-6 h-6 text-red-500" />,
      activities: [
        "Cricket & Football",
        "Badminton & Table Tennis",
        "Athletics & Running",
        "Traditional Games",
        "Yoga & Meditation",
        "Inter-school Competitions",
      ],
    },
    {
      category: "Life Skills",
      icon: <Heart className="w-6 h-6 text-orange-500" />,
      activities: [
        "Leadership Training",
        "Communication Skills",
        "Time Management",
        "Financial Literacy",
        "Environmental Awareness",
        "Community Service",
      ],
    },
    {
      category: "Technology",
      icon: <Brain className="w-6 h-6 text-purple-500" />,
      activities: [
        "Computer Programming",
        "Digital Literacy",
        "Science Projects",
        "Robotics Club",
        "Online Learning",
        "Tech Competitions",
      ],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Curriculum Structure
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive
            <span className="text-blue-600 block">Educational Framework</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our curriculum seamlessly blends NCERT standards with traditional Indian knowledge systems, ensuring
            students receive both modern education and cultural grounding.
          </p>
          <p className="text-lg font-devanagari text-blue-700 mt-2">गुरुकुलम</p>
        </div>

        {/* Curriculum Levels */}
        <div className="space-y-12 mb-20">
          {curriculumStructure.map((level, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-3 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Level Info */}
                  <div
                    className={`bg-gradient-to-br from-blue-50 to-indigo-50 p-8 ${index % 2 === 1 ? "lg:col-start-3" : ""}`}
                  >
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{level.level}</h3>
                        <p className="text-blue-600 font-medium">{level.ageGroup}</p>
                        <p className="text-sm text-gray-600 mt-1">{level.focus}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Special Features:</h4>
                        <div className="space-y-2">
                          {level.specialFeatures.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subjects Grid */}
                  <div className={`lg:col-span-2 p-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <h4 className="font-semibold text-gray-900 mb-6">Core Subjects:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {level.subjects.map((subject, subjectIndex) => (
                        <div key={subjectIndex} className="bg-gray-50 rounded-lg p-4 flex items-center space-x-3">
                          {subject.icon}
                          <span className="font-medium text-gray-900">{subject.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Co-curricular Activities */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Co-curricular Activities</h3>
            <p className="text-lg text-gray-600 font-devanagari">सह-पाठ्यक्रम गतिविधियां</p>
            <p className="text-gray-600 mt-2">Holistic development through diverse activities beyond academics</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coCurricular.map((category, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{category.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h4>
                  <div className="space-y-2">
                    {category.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="text-sm text-gray-600 py-1 px-2 bg-gray-50 rounded">
                        {activity}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Assessment & Evaluation */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Assessment & Evaluation</h3>
            <p className="text-gray-600 font-devanagari">मूल्यांकन और परीक्षा</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Continuous Assessment</h4>
              <p className="text-sm text-gray-600">Regular tests, assignments, and project evaluations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Character Evaluation</h4>
              <p className="text-sm text-gray-600">Values, behavior, and personality development tracking</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Skill Assessment</h4>
              <p className="text-sm text-gray-600">Practical skills, creativity, and critical thinking evaluation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
