import { Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="bg-gradient-to-br from-orange-600 to-red-600 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-white" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Connected with Our Mission</h2>
        <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
          Get inspiring stories, program updates, and educational insights delivered to your inbox every week.
        </p>

        <div className="max-w-md mx-auto">
          <div className="flex space-x-3">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-orange-200 focus:bg-white/20"
            />
            <Button className="bg-white text-orange-600 hover:bg-orange-50 px-6">
              <Send className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-orange-200 mt-3">Join our subscribers. No spam, unsubscribe anytime.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-orange-100">
          <div>
            <h3 className="font-semibold text-white mb-2">Weekly Stories</h3>
            <p className="text-sm">Inspiring success stories from our students and community</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Program Updates</h3>
            <p className="text-sm">Latest news about our educational and development programs</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-2">Educational Insights</h3>
            <p className="text-sm">Tips and resources for parents and educators</p>
          </div>
        </div>
      </div>
    </section>
  )
}
