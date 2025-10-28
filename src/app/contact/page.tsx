'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    details: ['Lilongwe, Malawi', 'Central Region', 'Malawi']
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+265 1 234 567', '+265 1 234 568']
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@intrinsicbiogas.mw', 'support@intrinsicbiogas.mw']
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', 'Sunday: Closed']
  }
]

const officeLocations = [
  {
    name: 'Headquarters',
    address: 'Lilongwe, Malawi',
    phone: '+265 1 234 567',
    hours: 'Mon-Fri: 8AM-6PM'
  },
  {
    name: 'Regional Office',
    address: 'Blantyre, Malawi',
    phone: '+265 1 234 568',
    hours: 'Mon-Fri: 9AM-5PM'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 2000)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight sm:text-6xl"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-blue-100"
            >
              Get in touch with our expert team. We're here to help you with your biogas project 
              and answer any questions you may have.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="+265 1 234 567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="installation">Installation Services</option>
                      <option value="maintenance">Maintenance Support</option>
                      <option value="training">Training Programs</option>
                      <option value="consultation">Consultation Services</option>
                      <option value="quote">Request Quote</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Tell us about your biogas project requirements..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
                
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center p-4 bg-green-50 border border-green-200 rounded-md"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-green-700">Message sent successfully! We'll get back to you soon.</span>
                  </motion.div>
                )}
                
                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center p-4 bg-red-50 border border-red-200 rounded-md"
                  >
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                    <span className="text-red-700">There was an error sending your message. Please try again.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                        <info.icon className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                      <div className="mt-2 space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* WhatsApp Contact */}
              <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">WhatsApp Support</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  For quick support and immediate assistance, contact us on WhatsApp.
                </p>
                <a
                  href="https://wa.me/2651234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Locations
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Visit us at our offices or contact us for on-site consultations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {officeLocations.map((office, index) => (
              <motion.div
                key={office.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{office.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-400 mr-3" />
                    <span className="text-gray-600">{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-400 mr-3" />
                    <span className="text-gray-600">{office.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-gray-400 mr-3" />
                    <span className="text-gray-600">{office.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Google Maps Embed */}
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368459413!3d40.71312997932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sus!4v1625097607460!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Intrinsic Biogas Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does installation take?</h3>
                <p className="text-gray-600">Most residential installations take 2-4 weeks, while larger commercial projects may take 6-12 weeks depending on complexity.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What maintenance is required?</h3>
                <p className="text-gray-600">Regular maintenance includes monthly inspections, annual system cleaning, and periodic component replacement. We offer maintenance packages.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide training?</h3>
                <p className="text-gray-600">Yes, we provide comprehensive training for system operators and maintenance staff, including certification programs.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What types of waste can be processed?</h3>
                <p className="text-gray-600">We can process kitchen waste, agricultural residues, animal manure, garden waste, and other organic materials.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is financing available?</h3>
                <p className="text-gray-600">Yes, we offer flexible financing options and can help you explore government incentives and grants.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the warranty period?</h3>
                <p className="text-gray-600">Our systems come with a 5-year warranty on major components and 1-year warranty on all parts and labor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
