import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, Users, CheckCircle, IndianRupee, Clock } from "lucide-react"

export function GurukulamAdmission() {
  const admissionSchedule = [
    {
      phase: "Application Period",
      dates: "January 1 - March 31",
      description: "Online and offline application submission",
      status: "Open",
    },
    {
      phase: "Document Verification",
      dates: "April 1 - April 15",
      description: "Verification of submitted documents",
      status: "Upcoming",
    },
    {
      phase: "Student Interview",
      dates: "April 16 - April 30",
      description: "Personal interaction with students and parents",
      status: "Upcoming",
    },
    {
      phase: "Admission Results",
      dates: "May 1 - May 7",
      description: "Announcement of admission decisions",
      status: "Upcoming",
    },
    {
      phase: "Fee Payment & Enrollment",
      dates: "May 8 - May 31",
      description: "Complete admission formalities",
      status: "Upcoming",
    },
  ]

  const scholarships = [
    {
      type: "Merit Scholarship",
      criteria: "Top 10% in entrance assessment",
      benefit: "50% fee waiver",
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
    },
    {
      type: "Need-based Scholarship",
      criteria: "Family income below ₹1 lakh/year",
      benefit: "75% fee waiver",
      icon: <IndianRupee className="w-6 h-6 text-blue-500" />,
    },
    {
      type: "Sibling Discount",
      criteria: "Multiple children from same family",
      benefit: "25% discount for 2nd child",
      icon: <Users className="w-6 h-6 text-orange-500" />,
    },
    {
      type: "Early Bird Discount",
      criteria: "Application before February 15",
      benefit: "10% discount on annual fees",
      icon: <Clock className="w-6 h-6 text-purple-500" />,
    },
  ]

  const requiredDocuments = [
    "Birth certificate (original + photocopy)",
    "Previous school records/transfer certificate",
    "Passport size photographs (6 copies)",
    "Income certificate from competent authority",
    "Caste certificate (if applicable)",
    "Medical fitness certificate",
    "Character certificate from previous school",
    "Address proof (Aadhaar/Voter ID/Ration Card)",
    "Bank account details for fee payment",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <FileText className="w-4 h-4 mr-2" />
            Admission Information
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Join Our
            <span className="text-blue-600 block">Gurukulam Family</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Begin your child's journey of holistic education with us. Our admission process is designed to identify
            students who will thrive in our unique learning environment.
          </p>
          <p className="text-lg font-devanagari text-blue-700 mt-2">हमारे गुरुकुलम परिवार में शामिल हों</p>
        </div>

        {/* Admission Schedule */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Admission Schedule 2024-25</h3>

          <div className="space-y-4">
            {admissionSchedule.map((phase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{phase.phase}</h4>
                        <p className="text-sm text-gray-600">{phase.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{phase.dates}</p>
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                          phase.status === "Open" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {phase.status}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Scholarships */}
        <div className="mb-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Scholarships & Financial Aid</h3>
            <p className="text-gray-600 font-devanagari">छात्रवृत्ति और वित्तीय सहायता</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scholarships.map((scholarship, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{scholarship.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{scholarship.type}</h4>
                  <p className="text-sm text-gray-600 mb-3">{scholarship.criteria}</p>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {scholarship.benefit}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Required Documents</h3>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FileText className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{document}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Application CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
          <p className="text-lg opacity-90 mb-6">
            Take the first step towards your child's bright future. Apply now for admission to Divya Bihar Global Gurukulam.
          </p>
          <p className="font-devanagari text-lg opacity-90 mb-8">आवेदन करने के लिए तैयार हैं?</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <FileText className="w-5 h-5 mr-2" />
              Apply Online
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Campus Visit
            </Button>
          </div>

          <div className="mt-6 text-sm opacity-80">
            <p>Application Deadline: March 31, 2024</p>
            <p>For queries: divyabiharmission@gmail.com | +91 92625 36295 </p>
          </div>
        </div>
      </div>
    </section>
  )
}
