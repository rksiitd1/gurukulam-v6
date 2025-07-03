import { Card, CardContent } from "@/components/ui/card"
import { Quote, BookOpen, Users, Lightbulb } from "lucide-react"
import Image from "next/image"

export function Biography() {
  const lifePhases = [
    {
      period: "Early Life (1995-2013)",
      title: "Roots in Rural Bihar",
      description:
        "Born and raised in a middle-class family in Bihar, Mukund witnessed firsthand the challenges faced by rural communities - limited educational opportunities, migration for work, and gradual erosion of cultural values.",
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      highlights: [
        "Experienced rural education challenges",
        "Observed youth migration patterns",
        "Developed deep connection with village life",
      ],
    },
    {
      period: "IIT Delhi Years (2013-2017)",
      title: "Academic Excellence & Social Awakening",
      description:
        "During his B.Tech in Mechanical Engineering at IIT Delhi, Mukund's worldview expanded. He actively participated in teaching underprivileged children in Delhi slums and engaged with social workers dedicated to community service.",
      icon: <Users className="w-6 h-6 text-green-500" />,
      highlights: [
        "B.Tech Mechanical Engineering",
        "Taught children in Delhi slums",
        "Engaged with social activists",
        "Developed passion for education",
      ],
    },
    {
      period: "The Calling (2017-2018)",
      title: "Decision to Return",
      description:
        "After graduation, while his peers pursued corporate careers, Mukund felt a deep calling to return to Bihar. The contrast between urban opportunities and rural struggles ignited his determination to bridge this gap through education.",
      icon: <Lightbulb className="w-6 h-6 text-orange-500" />,
      highlights: [
        "Chose service over corporate career",
        "Recognized education as key to change",
        "Committed to rural development",
      ],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
            <Quote className="w-4 h-4 mr-2" />
            Life Story
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            The Journey from
            <span className="text-orange-600 block">Dreams to Dharma</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the man behind the mission - how personal experiences shaped a vision for transforming rural
            Bihar through education and cultural values.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Story */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Philosophy</h3>

              <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
                "I realized that true success isn't measured by the height of corporate ladders we climb, but by the
                depth of positive impact we create in our communities. Bihar gave me everything - my values, my
                identity, my purpose. It was time to give back."
              </blockquote>

              <div className="bg-white rounded-lg p-6 border border-orange-200">
                <p className="font-devanagari text-xl text-orange-800 mb-2">
                  "जहाँ से आए हैं, वहीं वापस जाकर सेवा करना ही सच्ची सफलता है"
                </p>
                <p className="text-orange-700 text-sm">"True success lies in returning to serve where we came from"</p>
              </div>
            </div>

            {/* Core Beliefs */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Core Beliefs</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Education as Liberation</h4>
                    <p className="text-gray-600 text-sm">
                      Quality education is the most powerful tool for breaking cycles of poverty and empowering
                      communities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cultural Rootedness</h4>
                    <p className="text-gray-600 text-sm">
                      Modern progress must be built on the foundation of our cultural values and traditional wisdom.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Holistic Development</h4>
                    <p className="text-gray-600 text-sm">
                      True education encompasses intellectual, moral, physical, and spiritual growth of individuals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Community First</h4>
                    <p className="text-gray-600 text-sm">
                      Individual success is meaningful only when it contributes to the collective welfare of society.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Life Phases */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Life Phases</h3>

            <div className="space-y-6">
              {lifePhases.map((phase, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                          {phase.icon}
                        </div>
                      </div>

                      <div className="flex-1 space-y-3">
                        <div>
                          <div className="text-sm font-medium text-orange-600">{phase.period}</div>
                          <h4 className="text-lg font-semibold text-gray-900">{phase.title}</h4>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>

                        <div className="space-y-2">
                          {phase.highlights.map((highlight, highlightIndex) => (
                            <div key={highlightIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              <span className="text-xs text-gray-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Anecdote */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Turning Point</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                "During my final year at IIT Delhi, I was teaching a young boy named Ravi in a Delhi slum. Despite his
                intelligence and eagerness to learn, he had to drop out to support his family. That night, I couldn't
                sleep. I realized that for every Ravi in Delhi, there were hundreds in Bihar who never even got the
                chance he had. That's when I knew my path was clear."
              </p>
              <div className="bg-white rounded-lg p-4 border border-blue-200">
                <p className="text-blue-800 font-devanagari text-lg">"हर बच्चे का सपना पूरा करना ही हमारा धर्म है"</p>
                <p className="text-blue-700 text-sm mt-1">"Fulfilling every child's dream is our dharma"</p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Mukund with students during early teaching days"
                width={500}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg">
                <span className="text-xl">💡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
