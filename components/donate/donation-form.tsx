"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Smartphone, Building2, Shield, Lock, CheckCircle } from "lucide-react"

export function DonationForm() {
  const [donationType, setDonationType] = useState("one-time")
  const [amount, setAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const predefinedAmounts = [500, 1000, 2500, 5000, 10000, 25000]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    // Handle success/redirect to payment gateway
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Your Donation</h2>
          <p className="text-xl text-gray-600">Secure, fast, and transparent donation process</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-600" />
                  Secure Donation Form
                </CardTitle>
                <CardDescription>
                  All transactions are encrypted and secure. Your information is protected.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Donation Type */}
                  <div>
                    <Label className="text-base font-semibold mb-3 block">Donation Type</Label>
                    <RadioGroup value={donationType} onValueChange={setDonationType} className="flex space-x-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="one-time" id="one-time" />
                        <Label htmlFor="one-time">One-time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly">Monthly</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Amount Selection */}
                  <div>
                    <Label className="text-base font-semibold mb-3 block">Donation Amount</Label>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {predefinedAmounts.map((amt) => (
                        <Button
                          key={amt}
                          type="button"
                          variant={amount === amt.toString() ? "default" : "outline"}
                          onClick={() => {
                            setAmount(amt.toString())
                            setCustomAmount("")
                          }}
                          className={amount === amt.toString() ? "bg-orange-600 hover:bg-orange-700" : ""}
                        >
                          ₹{amt.toLocaleString()}
                        </Button>
                      ))}
                    </div>
                    <div>
                      <Label htmlFor="custom-amount" className="text-sm text-gray-600">
                        Custom Amount
                      </Label>
                      <Input
                        id="custom-amount"
                        type="number"
                        placeholder="Enter custom amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value)
                          setAmount("")
                        }}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Program Selection */}
                  <div>
                    <Label htmlFor="program" className="text-base font-semibold">
                      Choose Program (Optional)
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a program or choose General Fund" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Fund - Where needed most</SelectItem>
                        <SelectItem value="education">Education Support</SelectItem>
                        <SelectItem value="agriculture">Agriculture Development</SelectItem>
                        <SelectItem value="infrastructure">Infrastructure</SelectItem>
                        <SelectItem value="udyamita">Udyamita Program</SelectItem>
                        <SelectItem value="community">Community Programs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" required className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="address">Address (for 80G certificate)</Label>
                    <Textarea id="address" className="mt-1" rows={3} />
                  </div>

                  {/* Payment Method */}
                  <div>
                    <Label className="text-base font-semibold mb-3 block">Payment Method</Label>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                        <RadioGroupItem value="card" id="card" />
                        <CreditCard className="w-5 h-5 text-gray-600" />
                        <Label htmlFor="card" className="flex-1">
                          Credit/Debit Card
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                        <RadioGroupItem value="upi" id="upi" />
                        <Smartphone className="w-5 h-5 text-gray-600" />
                        <Label htmlFor="upi" className="flex-1">
                          UPI Payment
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                        <RadioGroupItem value="netbanking" id="netbanking" />
                        <Building2 className="w-5 h-5 text-gray-600" />
                        <Label htmlFor="netbanking" className="flex-1">
                          Net Banking
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Share why you're supporting our mission..."
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="updates" />
                      <Label htmlFor="updates" className="text-sm leading-relaxed">
                        I would like to receive updates about the impact of my donation and other programs
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="anonymous" />
                      <Label htmlFor="anonymous" className="text-sm leading-relaxed">
                        Make this donation anonymous
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm leading-relaxed">
                        I agree to the{" "}
                        <a href="/terms" className="text-orange-600 hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" className="text-orange-600 hover:underline">
                          Privacy Policy
                        </a>{" "}
                        *
                      </Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-lg py-6"
                    disabled={isSubmitting || (!amount && !customAmount)}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Lock className="w-5 h-5 mr-2" />
                        Proceed to Secure Payment
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Donation Summary & Trust Indicators */}
          <div className="space-y-6">
            {/* Donation Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Donation Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Donation Amount:</span>
                    <span className="font-semibold">₹{(amount || customAmount || "0").toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Type:</span>
                    <span className="capitalize">{donationType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Processing Fee:</span>
                    <span className="text-green-600">₹0 (We cover it!)</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>₹{(amount || customAmount || "0").toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                  Why Donate With Us?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-sm">80G Tax Exemption</div>
                      <div className="text-xs text-gray-600">Get tax deduction up to 50% of your donation</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-sm">100% Transparency</div>
                      <div className="text-xs text-gray-600">Track exactly how your money is used</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-sm">Direct Impact</div>
                      <div className="text-xs text-gray-600">95% goes directly to programs</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-sm">Regular Updates</div>
                      <div className="text-xs text-gray-600">Monthly impact reports and stories</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Notice */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800">Secure & Safe</span>
              </div>
              <p className="text-sm text-green-700">
                Your payment is processed through secure, encrypted channels. We never store your payment information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
