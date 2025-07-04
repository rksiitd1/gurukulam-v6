import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Building, ExternalLink, Linkedin, Globe, Heart, Sprout, Users } from "lucide-react"
import Image from "next/image"

export function Mentors() {
  const mentors = [
    {
      name: "Prof. Parag Singla",
      title: "Professor, Department of Computer Science & Engineering, IIT Delhi",
      image: "/images/mentors/parag-singla.jpg",
      links: [
        { type: "personal", url: "https://www.cse.iitd.ac.in/~parags/", label: "Personal page" },
      ],
    },
    {
      name: "Prof. Nomesh Bhojkumar Bolia",
      title: "Professor, Department of Mechanical Engineering, IIT Delhi",
      image: "/images/mentors/nomesh-bolia.jpg",
      links: [
        { type: "profile", url: "https://mech.iitd.ac.in/faculty-profile/173", label: "IIT Delhi profile" },
        { type: "linkedin", url: "https://www.linkedin.com/in/nomesh-bolia-8109966/", label: "LinkedIn" },
      ],
    },
    {
      name: "Kumar Subham",
      title: "Director, Sewa International",
      image: "/images/mentors/kumar-subham.jpg",
      links: [
        { type: "personal", url: "https://www.kumarsubham.in/", label: "Personal site" },
        { type: "linkedin", url: "https://www.linkedin.com/in/kumar-subham/", label: "LinkedIn" },
      ],
    },
    {
      name: "Sahil Aggarwal",
      title: "Co-founder & CEO, Rishihood University",
      image: "/images/mentors/sahil-aggarwal.jpg",
      links: [
        { type: "profile", url: "https://rishihood.edu.in/people/sahil-aggarwal/", label: "Rishihood profile" },
        { type: "linkedin", url: "https://www.linkedin.com/in/sahilagg92/", label: "LinkedIn" },
      ],
    },
    {
      name: "Dr. Rohit Kumar Choudhary",
      title: "Assistant Professor, Department of Environmental Science, University of Delhi",
      image: "/images/mentors/rohit-choudhary.jpg",
      links: [
        { type: "linkedin", url: "https://www.linkedin.com/in/dr-rohit-kumar-choudhary-957990b5/", label: "LinkedIn" },
      ],
    },
    {
      name: "Dr. Tarun Mangla",
      title: "Assistant Professor, Department of Computer Science & Engineering, IIT Delhi",
      image: "/images/mentors/tarun-mangla.jpg",
      links: [
        { type: "linkedin", url: "https://www.linkedin.com/in/tarun-mangla-1a78a237/", label: "LinkedIn" },
      ],
    },
  ]

  const advisoryBoard = [
    {
      name: "Padma Shri Dr. A.P.J. Abdul Kalam Institute",
      type: "Institutional Partner",
      contribution: "Technical education guidance",
    },
    {
      name: "Bihar Rural Development Society",
      type: "Government Partner",
      contribution: "Policy and implementation support",
    },
    {
      name: "Bhartiya Shiksha Board",
      type: "Educational Partner",
      contribution: "Curriculum and cultural education",
    },
    {
      name: "Organic Farming Association of India",
      type: "Technical Partner",
      contribution: "Agricultural training and certification",
    },
  ]

  const getLinkIcon = (type: string) => {
    switch (type) {
      case "linkedin":
        return <Linkedin className="w-3 h-3" />
      case "personal":
        return <Globe className="w-3 h-3" />
      case "profile":
        return <ExternalLink className="w-3 h-3" />
      default:
        return <ExternalLink className="w-3 h-3" />
    }
  }

  return (
    <section id="mentors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4 mr-2" />
            Mentors & Advisors
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Guided by
            <span className="text-purple-600 block">Distinguished Mentors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission is strengthened by the wisdom and guidance of renowned academicians, policy makers, and social
            leaders who believe in our vision of rural transformation.
          </p>
          <p className="text-lg font-devanagari text-purple-700 mt-2">प्रतिष्ठित मार्गदर्शकों का साथ</p>
        </div>

        {/* Mentors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mentors.map((mentor, index) => (
            <Card key={index} className="group relative overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-0 relative z-10">
                {/* Header with Image */}
                <div className="relative p-8 pb-6">
                  <div className="text-center space-y-6">
                    {/* Profile Image with Awesome Effects */}
                    <div className="relative mx-auto">
                      <div className="w-40 h-48 mx-auto relative transform group-hover:scale-105 transition-transform duration-500">
                        {/* Background Frame */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-blue-700 to-indigo-800 transform rotate-2 group-hover:rotate-0 transition-transform duration-500 shadow-xl"></div>
                        
                        {/* Inner Frame */}
                        <div className="absolute inset-1 bg-gradient-to-br from-slate-500 via-blue-600 to-indigo-700 transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
                        
                        {/* Image Container */}
                        <div className="relative w-full h-full p-2">
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                          <Image
                            src={mentor.image}
                            alt={mentor.name}
                            width={160}
                            height={192}
                            className="relative w-full h-full object-cover shadow-2xl border-4 border-white group-hover:border-slate-200 transition-all duration-500 group-hover:scale-105"
                          />
                        </div>
                        
                        {/* Corner Accent */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-slate-600 to-blue-700 transform rotate-12 group-hover:rotate-0 transition-transform duration-500 shadow-lg border-2 border-white"></div>
                        
                        {/* Bottom Shadow Effect */}
                        <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/15 blur-xl transform scale-x-75 group-hover:scale-x-100 transition-transform duration-500"></div>
                      </div>
                    </div>
                    
                    {/* Name and Title */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-slate-800 transition-colors duration-300 leading-tight">
                        {mentor.name}
                      </h3>
                      <div className="w-20 h-0.5 bg-gradient-to-r from-slate-600 to-blue-600 mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                      <p className="text-sm text-gray-600 leading-relaxed font-medium group-hover:text-gray-700 transition-colors duration-300 px-6">
                        {mentor.title}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Links Section */}
                {mentor.links.length > 0 && (
                  <div className="px-8 pb-8">
                    <div className="flex justify-center gap-3">
                      {mentor.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link relative inline-flex items-center justify-center w-10 h-10 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-700 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110 border border-slate-200 hover:border-blue-300"
                          title={link.label}
                        >
                          <div className="group-hover/link:scale-110 transition-transform duration-200">
                            {getLinkIcon(link.type)}
                          </div>
                          {/* Subtle Hover Indicator */}
                          <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200"></div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values Reflection */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-600 font-devanagari">हमारे मूल सिद्धांत</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-center"><Heart className="w-8 h-8 text-red-500" /></div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Seva</h4>
                  <p className="text-lg font-devanagari text-gray-600">सेवा</p>
                </div>
                <p className="text-gray-600 text-sm">Selfless service to uplift rural communities through education and empowerment.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-center"><GraduationCap className="w-8 h-8 text-blue-500" /></div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Sanskar</h4>
                  <p className="text-lg font-devanagari text-gray-600">संस्कार</p>
                </div>
                <p className="text-gray-600 text-sm">Instilling cultural values and moral character alongside modern education.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-center"><Sprout className="w-8 h-8 text-green-500" /></div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Sustainability</h4>
                  <p className="text-lg font-devanagari text-gray-600">स्थिरता</p>
                </div>
                <p className="text-gray-600 text-sm">Promoting eco-friendly farming and self-reliant village economies.</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-center"><Users className="w-8 h-8 text-orange-500" /></div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Community</h4>
                  <p className="text-lg font-devanagari text-gray-600">समुदाय</p>
                </div>
                <p className="text-gray-600 text-sm">Building strong, culturally rooted communities that support each other.</p>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  )
}
