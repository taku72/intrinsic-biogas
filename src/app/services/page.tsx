'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Wrench, 
  Settings, 
  GraduationCap, 
  MessageCircle, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Users,
  Shield,
  Zap
} from 'lucide-react'

const services = [
  {
    id: 'installation',
    icon: Wrench,
    title: 'Biogas Plant Installation',
    description: 'Complete biogas system installation from design to commissioning',
    features: [
      'Site assessment and feasibility study',
      'Custom system design',
      'Professional installation',
      'Quality testing and commissioning',
      'Handover and documentation'
    ],
    duration: '2-4 weeks',
    team: 'Expert installation team',
    price: 'Starting from MWK 5,000,000'
  },
  {
    id: 'maintenance',
    icon: Settings,
    title: 'Maintenance & Support',
    description: 'Comprehensive maintenance services to keep your system running optimally',
    features: [
      'Regular system inspections',
      'Preventive maintenance',
      'Emergency repair services',
      'Performance optimization',
      '24/7 technical support'
    ],
    duration: 'Ongoing',
    team: 'Certified technicians',
    price: 'From MWK 200,000/month'
  },
  {
    id: 'training',
    icon: GraduationCap,
    title: 'Biogas Training',
    description: 'Comprehensive training programs for system operators and managers',
    features: [
      'System operation training',
      'Safety protocols',
      'Troubleshooting techniques',
      'Maintenance procedures',
      'Certification programs'
    ],
    duration: '1-3 days',
    team: 'Expert trainers',
    price: 'From MWK 500,000/person'
  },
  {
    id: 'consultation',
    icon: MessageCircle,
    title: 'Consultation Services',
    description: 'Expert advice and guidance for your biogas project',
    features: [
      'Project feasibility analysis',
      'Technology selection',
      'Financial planning',
      'Regulatory compliance',
      'Implementation strategy'
    ],
    duration: '1-2 weeks',
    team: 'Senior consultants',
    price: 'From MWK 1,000,000'
  }
]

const processSteps = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'We discuss your needs and assess your site requirements'
  },
  {
    step: 2,
    title: 'Site Assessment',
    description: 'Comprehensive evaluation of your location and waste sources'
  },
  {
    step: 3,
    title: 'System Design',
    description: 'Custom biogas system design tailored to your specific needs'
  },
  {
    step: 4,
    title: 'Installation',
    description: 'Professional installation by our certified technicians'
  },
  {
    step: 5,
    title: 'Testing & Commissioning',
    description: 'Thorough testing to ensure optimal system performance'
  },
  {
    step: 6,
    title: 'Training & Support',
    description: 'Complete training and ongoing support for your team'
  }
]

export default function ServicesPage() {
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
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-blue-100"
            >
              Comprehensive biogas solutions from installation to ongoing support. 
              We provide everything you need for a successful biogas project.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                      <service.icon className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6 text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-gray-600">{service.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-gray-600">{service.team}</span>
                      </div>
                      <div className="flex items-center">
                        <Zap className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-gray-600">{service.price}</span>
                      </div>
                    </div>

                    <Link
                      href="/quote"
                      className="inline-flex items-center text-primary-600 hover:text-primary-500 font-medium transition-colors"
                    >
                      Get Quote
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From initial consultation to ongoing support, we guide you through every step
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
              >
                <div className="mx-auto h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-primary-600">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Intrinsic Biogas?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We deliver exceptional value through our expertise and commitment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="mx-auto h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">15+ Years Experience</h3>
              <p className="text-gray-600">
                Over a decade of expertise in biogas technology and renewable energy solutions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="mx-auto h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">
                All our installations come with comprehensive warranties and quality assurance
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="mx-auto h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Dedicated support team available 24/7 to ensure your system runs smoothly
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 via-blue-500 to-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Contact us today to discuss your biogas project requirements and get a customized solution.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/quote"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Request Quote
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold leading-6 text-white hover:text-primary-200 transition-colors"
              >
                Contact Us <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
