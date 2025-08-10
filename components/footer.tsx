import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-mucru-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/images/mucru-logo.png" alt="Mucru" width={40} height={40} className="rounded-full" />
              <span className="text-2xl font-serif">Mucru</span>
            </div>
            <p className="text-slate-200 leading-relaxed">
              Handcrafted premium jewelry made with passion in Azerbaijan. Where tradition meets contemporary elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-200 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-slate-200">Baku, Azerbaijan</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-slate-200">info@mucru.az</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-slate-200">+994 XX XXX XX XX</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/mucru.aze/"
                target="_blank"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="text-center mb-4">
            <p className="text-slate-200">© {new Date().getFullYear()} Mucru. All rights reserved.</p>
          </div>
          <div className="text-center">
            <p className="made-in-azerbaijan text-sm font-serif">Made in Azerbaijan with love</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
