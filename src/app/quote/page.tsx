'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  Trash2, 
  Scale, 
  MessageCircle, 
  Send,
  CheckCircle,
  AlertCircle,
  Calculator,
  Clock,
  Shield
} from 'lucide-react'

const siteTypes = [
  { value: 'household', label: 'Household' },
  { value: 'farm', label: 'Farm' },
  { value: 'school', label: 'School' },
  { value: 'business', label: 'Business' },
  { value: 'community', label: 'Community Center' },
  { value: 'industrial', label: 'Industrial' },
  { value: 'other', label: 'Other' }
]

const wasteTypes = [
  { value: 'kitchen', label: 'Kitchen Waste' },
  { value: 'agricultural', label: 'Agricultural Residues' },
  { value: 'manure', label: 'Animal Manure' },
  { value: 'garden', label: 'Garden Waste' },
  { value: 'food-processing', label: 'Food Processing Waste' },
  { value: 'mixed', label: 'Mixed Organic Waste' },
  { value: 'other', label: 'Other' }
]

const quoteBenefits = [
  {
    icon: Calculator,
    title: 'Accurate Pricing',
    description: 'Get detailed cost breakdown based on your specific requirements'
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description: 'Receive your quote within 24 hours of submission'
  },
  {
    icon: Shield,
    title: 'No Obligation',
    description: 'Free quote with no commitment required'
  }
]

export default function QuotePage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    siteType: '',
    wasteType: '',
    estimatedWaste: '',
    additionalComments: ''
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
        fullName: '',
        email: '',
        phone: '',
        location: '',
        siteType: '',
        wasteType: '',
        estimatedWaste: '',
        additionalComments: ''
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
              Request a Quote
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-blue-100"
            >
              Get a customized quote for your biogas project. Tell us about your needs 
              and we'll provide you with detailed pricing and recommendations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quote Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quoteBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <benefit.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Information</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <User className="h-5 w-5 mr-2 text-primary-600" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
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
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="+265 1 234 567"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="City, State, Country"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Building className="h-5 w-5 mr-2 text-primary-600" />
                  Project Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="siteType" className="block text-sm font-medium text-gray-700 mb-2">
                      Type of Site *
                    </label>
                    <select
                      id="siteType"
                      name="siteType"
                      required
                      value={formData.siteType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select site type</option>
                      {siteTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="wasteType" className="block text-sm font-medium text-gray-700 mb-2">
                      Type of Waste *
                    </label>
                    <select
                      id="wasteType"
                      name="wasteType"
                      required
                      value={formData.wasteType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select waste type</option>
                      {wasteTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="estimatedWaste" className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Waste Amount (kg/day) *
                  </label>
                  <input
                    type="number"
                    id="estimatedWaste"
                    name="estimatedWaste"
                    required
                    min="1"
                    value={formData.estimatedWaste}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    placeholder="e.g., 50"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Enter the approximate amount of organic waste you generate daily
                  </p>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-primary-600" />
                  Additional Information
                </h3>
                <div>
                  <label htmlFor="additionalComments" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Comments
                  </label>
                  <textarea
                    id="additionalComments"
                    name="additionalComments"
                    rows={4}
                    value={formData.additionalComments}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Tell us more about your project requirements, timeline, budget, or any specific needs..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting Request...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Request Quote
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 bg-green-50 border border-green-200 rounded-md"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <div>
                    <p className="text-green-700 font-medium">Quote request submitted successfully!</p>
                    <p className="text-green-600 text-sm">We'll review your requirements and send you a detailed quote within 24 hours.</p>
                  </div>
                </motion.div>
              )}
              
              {formStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 bg-red-50 border border-red-200 rounded-md"
                >
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  <div>
                    <p className="text-red-700 font-medium">There was an error submitting your request.</p>
                    <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Happens Next?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our process ensures you get accurate pricing and expert recommendations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="mx-auto h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Review & Analysis</h3>
              <p className="text-gray-600">
                Our experts review your requirements and analyze your site conditions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="mx-auto h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Quote</h3>
              <p className="text-gray-600">
                We prepare a detailed quote with system specifications and pricing
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="mx-auto h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow-up</h3>
              <p className="text-gray-600">
                We contact you to discuss the quote and answer any questions
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-blue-100 mb-6">
              If you have urgent questions or need immediate support, don't hesitate to contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+2651234567"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Us: +265 1 234 567
              </a>
              <a
                href="mailto:info@intrinsicbiogas.mw"
                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-400 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
