import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { PieChart, BarChart3, TrendingUp, Download, Eye, Users } from "lucide-react"

export function TransparencyReport() {
  const fundAllocation = [
    { category: "Education Programs", percentage: 45, amount: "₹1.12 Cr", color: "bg-blue-500" },
    { category: "Agriculture Development", percentage: 25, amount: "₹62.5 L", color: "bg-green-500" },
    { category: "Infrastructure", percentage: 15, amount: "₹37.5 L", color: "bg-orange-500" },
    { category: "Udyamita Program", percentage: 10, amount: "₹25 L", color: "bg-purple-500" },
    { category: "Administrative Costs", percentage: 5, amount: "₹12.5 L", color: "bg-gray-500" },
  ]

  const yearlyGrowth = [
    { year: "2019", donations: "₹15 L", beneficiaries: 250 },
    { year: "2020", donations: "₹28 L", beneficiaries: 450 },
    { year: "2021", donations: "₹45 L", beneficiaries: 750 },
    { year: "2022", donations: "₹85 L", beneficiaries: 1200 },
    { year: "2023", donations: "₹1.2 Cr", beneficiaries: 1800 },
    { year: "2024", donations: "₹2.5 Cr", beneficiaries: 2500 },
  ]

  const achievements = [
    { metric: "Transparency Score", value: "98%", description: "Based on independent audit" },
    { metric: "Program Efficiency", value: "95%", description: "Funds directly to programs" },
    { metric: "Donor Retention", value: "87%", description: "Donors who give again" },
    { metric: "Impact Multiplier", value: "4.2x", description: "Return on every rupee donated" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <Eye className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-semibold">100% Transparent</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Financial Transparency Report</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See exactly how your donations are used. We believe in complete transparency and accountability to our
            donors and beneficiaries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Fund Allocation */}
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="w-6 h-6 mr-2 text-blue-600" />
                  Fund Allocation (FY 2023-24)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fundAllocation.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{item.category}</span>
                        <div className="text-right">
                          <span className="text-sm font-bold text-gray-900">{item.percentage}%</span>
                          <div className="text-xs text-gray-500">{item.amount}</div>
                        </div>
                      </div>
                      <Progress value={item.percentage} className="h-2" />
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-green-800">Key Highlight</span>
                  </div>
                  <p className="text-sm text-green-700">
                    95% of all donations go directly to programs, with only 5% used for essential administrative costs.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{achievement.value}</div>
                      <div className="text-sm font-semibold text-gray-900 mb-1">{achievement.metric}</div>
                      <div className="text-xs text-gray-600">{achievement.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Growth & Impact */}
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-6 h-6 mr-2 text-green-600" />
                  Growth & Impact Over Years
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {yearlyGrowth.map((year, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="font-semibold text-gray-900">{year.year}</div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-blue-600">{year.donations}</div>
                        <div className="text-xs text-gray-600 flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {year.beneficiaries} beneficiaries
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">6-Year Journey</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-blue-700">Total Raised:</div>
                      <div className="font-bold text-blue-900">₹4.95 Crores</div>
                    </div>
                    <div>
                      <div className="text-blue-700">Lives Impacted:</div>
                      <div className="font-bold text-blue-900">7,950+ People</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Audit & Compliance */}
            <Card>
              <CardHeader>
                <CardTitle>Audit & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 border rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-sm">Annual Audit Completed</div>
                      <div className="text-xs text-gray-600">By M/s Sharma & Associates, Chartered Accountants</div>
                      <div className="text-xs text-green-600 font-medium">Clean audit report for FY 2023-24</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 border rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-sm">Regulatory Compliance</div>
                      <div className="text-xs text-gray-600">All statutory filings up to date</div>
                      <div className="text-xs text-blue-600 font-medium">FCRA, 12A, 80G renewals current</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 border rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <div className="font-semibold text-sm">Impact Assessment</div>
                      <div className="text-xs text-gray-600">Third-party evaluation completed</div>
                      <div className="text-xs text-purple-600 font-medium">98% beneficiary satisfaction rate</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Button className="w-full" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Annual Report 2023-24
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Audit Report
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Impact Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Finances?</h3>
            <p className="text-gray-600 mb-6 text-lg">
              We're committed to complete transparency. Contact our finance team for any questions about how donations
              are used or to request additional reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Contact Finance Team
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Schedule Finance Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
