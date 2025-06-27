"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Clock, Users, CheckCircle, Phone, Mail, MapPin, Download } from "lucide-react"

const admissionSteps = [
  {
    step: 1,
    title: "Application Form",
    description: "Fill out the online application form with student and parent details",
    duration: "10 minutes",
    status: "active",
  },
  {
    step: 2,
    title: "Document Submission",
    description: "Submit required documents including previous academic records",
    duration: "1 day",
    status: "pending",
  },
  {
    step: 3,
    title: "Entrance Assessment",
    description: "Student assessment to understand current academic level",
    duration: "2 hours",
    status: "pending",
  },
  {
    step: 4,
    title: "Parent Interview",
    description: "Discussion with parents about expectations and student needs",
    duration: "30 minutes",
    status: "pending",
  },
  {
    step: 5,
    title: "Admission Decision",
    description: "Final admission decision and fee structure discussion",
    duration: "2-3 days",
    status: "pending",
  },
]

const requirements = [
  "Previous year's academic transcripts",
  "Birth certificate or age proof",
  "Transfer certificate (if applicable)",
  "Passport size photographs (4 copies)",
  "Medical fitness certificate",
  "Character certificate from previous school",
]

const batches = [
  {
    name: "Morning Batch",
    time: "8:00 AM - 12:00 PM",
    classes: "6th to 10th",
    seats: "15 per class",
    status: "Open",
  },
  {
    name: "Evening Batch",
    time: "2:00 PM - 6:00 PM",
    classes: "6th to 12th",
    seats: "15 per class",
    status: "Open",
  },
  {
    name: "Weekend Batch",
    time: "9:00 AM - 5:00 PM",
    classes: "All classes",
    seats: "20 per class",
    status: "Limited",
  },
]

export function ShriClassesAdmission() {
  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">Admissions Open</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Join Shri Classes Today</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Start your child's journey towards academic excellence with our proven teaching methods and personalized
            attention.
          </p>
        </div>

        {/* Admission Process */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Admission Process</h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {admissionSteps.map((step, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-all duration-300 border-0 ${
                    step.status === "active" ? "bg-purple-50 border-l-4 border-l-purple-500" : "bg-white/90"
                  } backdrop-blur-sm`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                            step.status === "active" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h4>
                          <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {step.duration}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Available Batches */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Available Batches</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {batches.map((batch, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-0 bg-white/90 backdrop-blur-sm"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-semibold text-gray-900">{batch.name}</CardTitle>
                    <Badge variant={batch.status === "Open" ? "default" : "secondary"}>{batch.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {batch.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {batch.classes}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {batch.seats}
                  </div>
                  <Button className="w-full mt-4" variant={batch.status === "Limited" ? "outline" : "default"}>
                    {batch.status === "Limited" ? "Limited Seats" : "Apply Now"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Required Documents</h3>
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t">
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Document Checklist
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Application Form */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Quick Application Form</h3>
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6 sm:p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="studentName">Student Name *</Label>
                      <Input id="studentName" placeholder="Enter student's full name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="class">Class Applying For *</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6">Class 6th</SelectItem>
                          <SelectItem value="7">Class 7th</SelectItem>
                          <SelectItem value="8">Class 8th</SelectItem>
                          <SelectItem value="9">Class 9th</SelectItem>
                          <SelectItem value="10">Class 10th</SelectItem>
                          <SelectItem value="11">Class 11th</SelectItem>
                          <SelectItem value="12">Class 12th</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                      <Input id="parentName" placeholder="Enter parent's name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" placeholder="Enter phone number" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter email address" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="batch">Preferred Batch *</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select preferred batch" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning Batch (8:00 AM - 12:00 PM)</SelectItem>
                        <SelectItem value="evening">Evening Batch (2:00 PM - 6:00 PM)</SelectItem>
                        <SelectItem value="weekend">Weekend Batch (9:00 AM - 5:00 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" placeholder="Enter complete address" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea id="message" placeholder="Any specific requirements or questions?" className="mt-1" />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the terms and conditions and privacy policy
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Need Help with Admission?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 mb-2 opacity-90" />
                  <div className="font-semibold">Call Us</div>
                  <div className="opacity-90">+91 98765 43210</div>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 mb-2 opacity-90" />
                  <div className="font-semibold">Email Us</div>
                  <div className="opacity-90">admissions@shriclasses.org</div>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 mb-2 opacity-90" />
                  <div className="font-semibold">Visit Us</div>
                  <div className="opacity-90">Mon-Sat, 9 AM - 6 PM</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                  Schedule Campus Visit
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600"
                >
                  Download Brochure
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
