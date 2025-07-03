import Link from "next/link"
import { Facebook, Youtube, Mail, Phone, MapPin, Heart } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Gallery", href: "/gallery" },
    { name: "Stories", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const programs = [
    { name: "DBG Gurukulam", href: "/programs/gurukulam" },
    { name: "Shri Classes", href: "/programs/shri-classes" },
    { name: "Agro Projects", href: "/programs/agriculture" },
    { name: "Udyamita Program", href: "/programs/udyamita" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section - full width on mobile */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <Image src="/DBM-logo.png" alt="Divya Bihar Mission Logo" width={50} height={50} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" priority />
              <div>
                <h3 className="text-base sm:text-lg font-bold">Divya Bihar Mission</h3>
                <p className="text-xs sm:text-sm text-gray-400 font-devanagari">दिव्य बिहार मिशन</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering Bihar's rural communities through education with yogic values, sustainable agriculture, and cultural
              preservation since 2018.
            </p>
            <p className="text-gray-400 text-sm font-devanagari">शिक्षा से समाज का कल्याण</p>

            {/* Social Links - larger touch targets */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors p-2 -ml-2 touch-manipulation"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors p-2 touch-manipulation">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors p-2 touch-manipulation">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm py-1 block touch-manipulation"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">Our Programs</h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    href={program.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors text-sm py-1 block touch-manipulation"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <p>Raghopur, Supaul District</p>
                  <p>Bihar, India - 852111</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                <a
                  href="tel:+919262536295"
                  className="text-sm text-gray-300 hover:text-orange-500 transition-colors touch-manipulation"
                >
                  +91 92625 36295
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                <a
                  href="mailto:divyabiharmission@gmail.com"
                  className="text-sm text-gray-300 hover:text-orange-500 transition-colors touch-manipulation"
                >
                  divyabiharmission@gmail.com
                </a>
              </div>
            </div>

            {/* Donation CTA - responsive */}
            <div className="mt-6 p-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Heart className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold">Support Our Mission</span>
              </div>
              <p className="text-xs text-orange-100 mb-3">Your donation helps transform lives in rural Bihar</p>
              <Link
                href="/donate"
                className="inline-block bg-white text-orange-600 px-4 py-2 rounded text-sm font-semibold hover:bg-gray-100 transition-colors w-full text-center touch-manipulation"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section - responsive stacking */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Divya Bihar Mission. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">Registered under 12A & 80G | Tax exemption available</p>
            </div>

            <div className="flex items-center space-x-4 sm:space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-orange-500 transition-colors py-2 touch-manipulation">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-orange-500 transition-colors py-2 touch-manipulation">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Sanskrit Quote - responsive text */}
          <div className="text-center mt-6 sm:mt-8 pt-6 border-t border-gray-800">
            <p className="text-orange-400 font-devanagari text-base sm:text-lg mb-2">
              "ग्रामे-ग्रामे सभाकार्या, ग्रामे-ग्रामे कथा शुभा"
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              Building cultural assemblies in every village - Mahamana Madan Mohan Malaviya
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
