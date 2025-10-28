import Link from 'next/link'
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

const services = [
  { name: 'Installation', href: '/services#installation' },
  { name: 'Maintenance', href: '/services#maintenance' },
  { name: 'Training', href: '/services#training' },
  { name: 'Consultation', href: '/services#consultation' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-xl font-bold text-white">Intrinsic Biogas</span>
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Leading provider of sustainable biogas solutions for homes, farms, and businesses. 
              Transforming waste into clean energy for a greener future.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-primary-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-primary-500 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-300 hover:text-primary-500 text-sm transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-primary-500 mr-2" />
                <span className="text-gray-300 text-sm">Lilongwe, Malawi</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-primary-500 mr-2" />
                <span className="text-gray-300 text-sm">+265 1 234 567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-primary-500 mr-2" />
                <span className="text-gray-300 text-sm">info@intrinsicbiogas.mw</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <p className="text-center text-xs text-gray-400">
            &copy; 2024 Intrinsic Biogas. All rights reserved. | 
            <Link href="/privacy" className="hover:text-primary-500 transition-colors"> Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-primary-500 transition-colors"> Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
