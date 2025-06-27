import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function BlogSidebar() {
  return (
    <div className="space-y-8">
      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-orange-600 to-red-600 p-6 rounded-xl text-white">
        <h3 className="text-lg font-semibold mb-2">Stay Connected with Our Mission</h3>
        <p className="text-orange-100 text-sm mb-4">
          Get the latest stories and updates from Divya Bihar Mission delivered to your inbox.
        </p>
        <div className="space-y-3">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white/10 border-white/20 text-white placeholder:text-orange-200"
          />
          <Button className="w-full bg-white text-orange-600 hover:bg-orange-50">Subscribe Now</Button>
        </div>
      </div>
    </div>
  )
}
