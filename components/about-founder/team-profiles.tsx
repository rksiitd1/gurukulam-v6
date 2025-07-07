import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, GraduationCap, Award, Users } from "lucide-react"
import Image from "next/image"

export function TeamProfiles() {
  const coreTeam = [
    {
      name: "Shri Mukund Agrawal",
      title: "Founder & Director",
      titleHindi: "संस्थापक एवं निदेशक",
      education: "B.Tech Mechanical Engineering, IIT Delhi",
      experience: "6+ years in rural education",
      specialization: "Educational Leadership, Rural Development",
      description:
        "Visionary leader who left corporate opportunities to serve rural Bihar. Known as 'Golu Sir' by students, he combines modern educational methods with traditional Indian values.",
      image: "/placeholder.svg?height=300&width=300",
      contact: {
        email: "mukund@divyabiharmission.in",
        phone: "+91 98765 43210",
      },
      achievements: [
        "Founded Divya Bihar Mission in 2018",
        "Educated 500+ rural students",
        "Established sustainable farming models",
        "State recognition for educational innovation",
      ],
    },
    {
      name: "Smt. Priya Sharma",
      title: "Academic Director",
      titleHindi: "शैक्षणिक निदेशक",
      education: "M.Ed, Delhi University",
      experience: "12+ years in education",
      specialization: "Curriculum Development, Teacher Training",
      description:
        "Experienced educator who designs our holistic curriculum blending NCERT standards with cultural education. Leads teacher training and academic quality assurance.",
      image: "/placeholder.svg?height=300&width=300",
      contact: {
        email: "priya@divyabiharmission.in",
        phone: "+91 98765 43211",
      },
      achievements: [
        "Developed integrated curriculum model",
        "Trained 50+ rural teachers",
        "95% student success rate",
        "Expert in bilingual education",
      ],
    },
    {
      name: "Shri Rajesh Kumar",
      title: "Operations Manager",
      titleHindi: "संचालन प्रबंधक",
      education: "MBA, Patna University",
      experience: "8+ years in NGO management",
      specialization: "Operations, Finance, Community Relations",
      description:
        "Manages day-to-day operations, financial planning, and community outreach. Ensures smooth functioning of all programs and maintains transparency in operations.",
      image: "/placeholder.svg?height=300&width=300",
      contact: {
        email: "rajesh@divyabiharmission.in",
        phone: "+91 98765 43212",
      },
      achievements: [
        "Streamlined operations across 15 villages",
        "Maintained 100% financial transparency",
        "Built strong community partnerships",
        "Expert in rural project management",
      ],
    },
    {
      name: "Dr. Sunita Devi",
      title: "Agriculture Coordinator",
      titleHindi: "कृषि समन्वयक",
      education: "Ph.D. Agriculture, BAU Sabour",
      experience: "15+ years in sustainable farming",
      specialization: "Organic Farming, Agroforestry",
      description:
        "Leads our agricultural initiatives, training farmers in sustainable practices. Expert in organic farming and agroforestry models suitable for Bihar's climate.",
      image: "/placeholder.svg?height=300&width=300",
      contact: {
        email: "sunita@divyabiharmission.in",
        phone: "+91 98765 43213",
      },
      achievements: [
        "Trained 200+ farmers in organic methods",
        "Increased farm productivity by 40%",
        "Established 50-acre demonstration farm",
        "Expert in indigenous seed preservation",
      ],
    },
    {
      name: "Shri Amit Singh",
      title: "Youth Coordinator",
      titleHindi: "युवा समन्वयक",
      education: "M.A. Social Work, Jamia Millia",
      experience: "5+ years in youth development",
      specialization: "Skill Development, Entrepreneurship",
      description:
        "Manages Udyamita program and youth skill development initiatives. Works closely with young people to create employment opportunities in villages.",
      image: "/placeholder.svg?height=300&width=300",
      contact: {
        email: "amit@divyabiharmission.in",
        phone: "+91 98765 43214",
      },
      achievements: [
        "Trained 100+ youth in various skills",
        "Established 25 micro-enterprises",
        "Created 150+ local employment opportunities",
        "Expert in rural entrepreneurship",
      ],
    },
    {
      name: "Smt. Meera Gupta",
      title: "Women Empowerment Lead",
      titleHindi: "महिला सशक्तिकरण प्रमुख",
      education: "M.S.W, Tata Institute of Social Sciences",
      experience: "10+ years in women's development",
      specialization: "Women's Rights, Skill Training",
      description:
        "Leads women empowerment initiatives, self-help group formation, and skill development programs. Focuses on creating economic independence for rural women.",
      image: "/placeholder.svg?height=300&width=300",
      contact: {
        email: "meera@divyabiharmission.in",
        phone: "+91 98765 43215",
      },
      achievements: [
        "Formed 20+ women's self-help groups",
        "Trained 150+ women in income generation",
        "Achieved 80% women's participation",
        "Expert in gender-sensitive programming",
      ],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            Our Team
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet the
            <span className="text-blue-600 block">Dedicated Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate group of educators, social workers, and development professionals committed to transforming
            rural Bihar through education and empowerment.
          </p>
          <p className="text-lg font-devanagari text-blue-700 mt-2">समर्पित टीम से मिलें</p>
        </div>

        {/* Team Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {coreTeam.map((member, index) => (
            <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={150}
                        height={150}
                        className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-full shadow-lg">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                      <p className="text-lg font-semibold text-blue-600">{member.title}</p>
                      <p className="text-md font-devanagari text-gray-600">{member.titleHindi}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <GraduationCap className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{member.education}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Award className="w-4 h-4 text-orange-500" />
                        <span className="text-gray-700">{member.experience}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Users className="w-4 h-4 text-purple-500" />
                        <span className="text-gray-700">{member.specialization}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {member.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span className="text-xs text-gray-700">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-wrap gap-3 pt-2 border-t border-gray-100">
                      <a
                        href={`mailto:${member.contact.email}`}
                        className="flex items-center space-x-2 text-xs text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Mail className="w-3 h-3" />
                        <span>Email</span>
                      </a>
                      <a
                        href={`tel:${member.contact.phone}`}
                        className="flex items-center space-x-2 text-xs text-green-600 hover:text-green-800 transition-colors"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Team Strength</h3>
            <p className="text-gray-600 font-devanagari">टीम की शक्ति</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-700 font-medium">Team Members</div>
              <div className="text-sm text-gray-500">Full-time & Part-time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">Volunteers</div>
              <div className="text-sm text-gray-500">Regular contributors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-700 font-medium">Teachers</div>
              <div className="text-sm text-gray-500">Qualified educators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Commitment</div>
              <div className="text-sm text-gray-500">To our mission</div>
            </div>
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
          <p className="text-lg opacity-90 mb-6">
            We're always looking for passionate individuals who want to make a difference in rural education and
            development.
          </p>
          <p className="font-devanagari text-lg opacity-90 mb-6">हमारे मिशन में शामिल हों</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Career Opportunities
            </button>
            <a href="/volunteer" className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors">
              Volunteer With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
