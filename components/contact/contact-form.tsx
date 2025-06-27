"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send, Phone, Mail, MessageSquare, User } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
    preferredContact: "email",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const categories = [
    { value: "admissions", label: "Admissions Inquiry" },
    { value: "programs", label: "Program Information" },
    { value: "donations", label: "Donations & Support" },
    { value: "partnerships", label: "Partnerships" },
    { value: "media", label: "Media Inquiry" },
    { value: "general", label: "General Question" },
    { value: "feedback", label: "Feedback" },
    { value: "other", label: "Other" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Validation function
  const isFormValid = () => {
    const { name, email, phone, subject, message, preferredContact } = formData

    if (!name.trim() || !message.trim()) return false

    if (preferredContact === "email") {
      return email.trim() && subject.trim()
    } else {
      return phone.trim()
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid()) return

    setIsSubmitting(true)

    try {
      if (formData.preferredContact === "email") {
        // Create email link
        const subject = encodeURIComponent(formData.subject)
        const body = encodeURIComponent(`Dear Team,\n\n${formData.message}\n\nBest regards,\n${formData.name}`)
        const emailLink = `mailto:vidyalayabhagalpur@gmail.com?subject=${subject}&body=${body}`
        window.open(emailLink, "_blank")
      } else {
        // Create WhatsApp link
        const message = encodeURIComponent(`Hello! I'm ${formData.name}.\n\n${formData.message}`)
        const whatsappLink = `https://wa.me/919262536295?text=${message}`
        window.open(whatsappLink, "_blank")
      }

      setSubmitStatus("success")
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 3000)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            Send Message
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
            <span className="text-green-600 block">With Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question or want to learn more about our programs? Fill out the form below and we'll get back to you
            within 24 hours.
          </p>
          <p className="text-lg font-devanagari text-green-700 mt-2">हमसे संपर्क करें</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Method Selection */}
                <div className="space-y-4">
                  <label className="block text-lg font-bold text-gray-900 mb-4">
                    Choose Your Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label
                      className={`relative flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                        formData.preferredContact === "email"
                          ? "border-green-500 bg-green-50 shadow-lg"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === "email"}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <Mail
                          className={`w-8 h-8 mx-auto mb-2 ${
                            formData.preferredContact === "email" ? "text-green-600" : "text-gray-400"
                          }`}
                        />
                        <span
                          className={`font-semibold ${
                            formData.preferredContact === "email" ? "text-green-700" : "text-gray-600"
                          }`}
                        >
                          Email
                        </span>
                      </div>
                    </label>

                    <label
                      className={`relative flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                        formData.preferredContact === "whatsapp"
                          ? "border-green-500 bg-green-50 shadow-lg"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="preferredContact"
                        value="whatsapp"
                        checked={formData.preferredContact === "whatsapp"}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="text-center">
                        <MessageSquare
                          className={`w-8 h-8 mx-auto mb-2 ${
                            formData.preferredContact === "whatsapp" ? "text-green-600" : "text-gray-400"
                          }`}
                        />
                        <span
                          className={`font-semibold ${
                            formData.preferredContact === "whatsapp" ? "text-green-700" : "text-gray-600"
                          }`}
                        >
                          WhatsApp
                        </span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Dynamic Form Fields */}
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-3">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-gray-900 font-medium"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  {/* Email Fields - Show only when email is selected */}
                  {formData.preferredContact === "email" && (
                    <div className="space-y-6 animate-in slide-in-from-top-2 duration-300">
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-3">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-gray-900 font-medium"
                            placeholder="Enter your email address"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-bold text-gray-900 mb-3">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-gray-900 font-medium"
                          placeholder="Brief subject of your inquiry"
                        />
                      </div>
                    </div>
                  )}

                  {/* WhatsApp Fields - Show only when WhatsApp is selected */}
                  {formData.preferredContact === "whatsapp" && (
                    <div className="animate-in slide-in-from-top-2 duration-300">
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-3">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-gray-900 font-medium"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>
                  )}

                  {/* Message Field - Always required */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 resize-none text-gray-900 font-medium"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting || !isFormValid()}
                  className={`w-full py-4 text-lg font-bold rounded-xl transition-all duration-300 ${
                    isFormValid() && !isSubmitting
                      ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Redirecting...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-3">
                      <Send className="w-5 h-5" />
                      <span>{formData.preferredContact === "email" ? "Send Email" : "Send WhatsApp Message"}</span>
                    </div>
                  )}
                </Button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 rounded-xl p-4">
                    <p className="text-green-800 font-semibold text-center">
                      ✅ Redirecting you to {formData.preferredContact === "email" ? "your email client" : "WhatsApp"}
                      ...
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 rounded-xl p-4">
                    <p className="text-red-800 font-semibold text-center">
                      ❌ Sorry, there was an error. Please try contacting us directly at{" "}
                      {formData.preferredContact === "email" ? "vidyalayabhagalpur@gmail.com" : "+91 92625 36295"}
                    </p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Quick Actions */}
          <div className="space-y-8">
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Quick Contact</h3>

              <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Call Us Now</h4>
                      <p className="text-green-600 font-medium">+91 92625 36295 </p>
                      <p className="text-sm text-gray-600">Mon-Sat, 9 AM - 6 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                      <p className="text-blue-600 font-medium">+91 92625 36295 </p>
                      <p className="text-sm text-gray-600">Quick responses</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email Support</h4>
                      <p className="text-purple-600 font-medium">vidyalayabhagalpur@gmail.com</p>
                      <p className="text-sm text-gray-600">24-hour response</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Response Time Info */}
            <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4">Our Commitment</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Email responses within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">Phone & WhatsApp answered during office hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">No apointment needed for campus visits</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
