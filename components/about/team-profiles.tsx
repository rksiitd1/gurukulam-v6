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
      image: "/images/team/mukund.jpg",
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
      name: "Raju Kumar Jha",
      title: "Academic Director",
      titleHindi: "शैक्षणिक निदेशक",
      education: "M.Sc. Patna University",
      experience: "6+ years in education",
      specialization: "Curriculum Development, Teacher Training",
      description:
        "Experienced educator who designs our holistic curriculum blending NCERT standards with cultural education. Leads teacher training and academic quality assurance.",
      image: "/images/team/raju.jpg",
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
      name: "Sanjay Kumar",
      title: "Operations Manager",
      titleHindi: "संचालन प्रबंधक",
      education: "B.A. Madhepura University",
      experience: "3+ years in Education",
      specialization: "Education, Community Relations",
      description:
        "Manages day-to-day operations, financial planning, and community outreach. Ensures smooth functioning of all programs.",
      image: "/images/team/sanjay.jpg",
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
      name: "Vivek Kumar",
      title: "Agriculture Coordinator",
      titleHindi: "कृषि समन्वयक",
      education: "B.Sc. Physics(Hons.), BNMU",
      experience: "15+ years in sustainable farming",
      specialization: "Organic Farming, Agroforestry",
      description:
        "Leads our agricultural initiatives, training farmers in sustainable practices. Expert in organic farming and agroforestry models suitable for Bihar's climate.",
      image: "/images/team/vivek.jpg",
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
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
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
