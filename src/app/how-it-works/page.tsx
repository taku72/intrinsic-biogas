'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Trash2, 
  Droplets, 
  Zap, 
  Leaf, 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Globe,
  Shield,
  DollarSign
} from 'lucide-react'

const processSteps = [
  {
    step: 1,
    icon: Trash2,
    title: 'Waste Collection',
    description: 'Organic waste is collected from various sources including food scraps, agricultural residues, and animal manure.',
    details: [
      'Kitchen waste and food scraps',
      'Agricultural residues',
      'Animal manure',
      'Garden waste and leaves'
    ]
  },
  {
    step: 2,
    icon: Droplets,
    title: 'Anaerobic Digestion',
    description: 'Waste is placed in an airtight digester where bacteria break down organic matter in the absence of oxygen.',
    details: [
      'Controlled temperature environment',
      'Anaerobic bacteria activity',
      'pH level monitoring',
      'Retention time optimization'
    ]
  },
  {
    step: 3,
    icon: Zap,
    title: 'Biogas Production',
    description: 'The digestion process produces biogas, primarily methane and carbon dioxide, along with digestate.',
    details: [
      'Methane (CH4) - 50-70%',
      'Carbon dioxide (CO2) - 30-50%',
      'Small amounts of other gases',
      'Nutrient-rich digestate'
    ]
  },
  {
    step: 4,
    icon: Leaf,
    title: 'Energy Utilization',
    description: 'Biogas is captured and used for cooking, heating, electricity generation, or vehicle fuel.',
    details: [
      'Direct combustion for cooking',
      'Heating applications',
      'Electricity generation',
      'Vehicle fuel (after purification)'
    ]
  }
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Reduced Energy Costs',
    description: 'Generate your own energy and reduce dependence on expensive fossil fuels',
    impact: 'Save up to 60% on energy bills'
  },
  {
    icon: Globe,
    title: 'Environmental Protection',
    description: 'Significantly reduce greenhouse gas emissions and environmental pollution',
    impact: 'Reduce CO2 emissions by 80%'
  },
  {
    icon: Shield,
    title: 'Waste Management',
    description: 'Transform waste into valuable resources while reducing landfill burden',
    impact: 'Divert 100% of organic waste'
  },
  {
    icon: DollarSign,
    title: 'Economic Benefits',
    description: 'Create additional revenue streams through energy sales and waste reduction',
    impact: 'ROI of 15-25% annually'
  }
]

const environmentalStats = [
  { label: 'CO2 Emissions Reduced', value: '2.5 tons/year', description: 'Per household biogas system' },
  { label: 'Waste Diverted', value: '1,000 kg/year', description: 'From landfills per system' },
  { label: 'Energy Generated', value: '500 kWh/month', description: 'Clean electricity production' },
  { label: 'Water Saved', value: '2,000 liters/year', description: 'Through efficient waste treatment' }
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight sm:text-6xl"
            >
              How Biogas Works
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-primary-100"
            >
              Discover the science behind biogas production and how it transforms 
              organic waste into clean, renewable energy.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Biogas Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From waste to energy in four simple steps
            </p>
          </div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary-100">
                    <step.icon className="h-12 w-12 text-primary-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-primary-600 mr-3">0{step.step}</span>
                    <h3 className="text-2xl font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-4">{step.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Environmental Benefits
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Biogas technology delivers significant environmental and economic advantages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
              >
                <div className="mx-auto h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <benefit.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{benefit.description}</p>
                <div className="text-primary-600 font-semibold text-sm">{benefit.impact}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact Stats */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Environmental Impact
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quantifying the positive environmental impact of biogas systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {environmentalStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Digester Types</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Fixed dome digesters</li>
                    <li>• Floating drum digesters</li>
                    <li>• Balloon digesters</li>
                    <li>• Continuous stirred tank reactors</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Operating Conditions</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Temperature: 35-40°C (mesophilic)</li>
                    <li>• pH: 6.5-7.5</li>
                    <li>• Retention time: 15-30 days</li>
                    <li>• Loading rate: 1-4 kg VS/m³/day</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">System Components</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Core Components</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Digester tank</li>
                    <li>• Gas storage system</li>
                    <li>• Gas purification unit</li>
                    <li>• Control and monitoring system</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2">Optional Components</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Heat exchanger</li>
                    <li>• Gas compressor</li>
                    <li>• Electricity generator</li>
                    <li>• Digestate treatment system</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Biogas Journey?
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Learn more about how biogas can benefit your home, farm, or business. 
              Get expert consultation and a customized solution.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/quote"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold leading-6 text-white hover:text-primary-200 transition-colors"
              >
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
