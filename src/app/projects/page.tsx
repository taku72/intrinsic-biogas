'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Home, 
  Building, 
  GraduationCap, 
  Factory, 
  Calendar, 
  MapPin, 
  Zap, 
  Users,
  ArrowRight,
  ExternalLink
} from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Green Valley Farm Biogas Plant',
    type: 'Agricultural',
    location: 'California, USA',
    date: '2023',
    capacity: '50 m³',
    energyOutput: '25 kWh/day',
    wasteInput: '500 kg/day',
    description: 'Large-scale biogas installation for a 200-acre dairy farm, processing cow manure and agricultural waste.',
    features: [
      'Automated feeding system',
      'Heat recovery system',
      'Biogas purification unit',
      'Remote monitoring system'
    ],
    icon: Building,
    image: '/api/placeholder/400/300'
  },
  {
    id: 2,
    title: 'EcoVillage Residential System',
    type: 'Residential',
    location: 'Oregon, USA',
    date: '2023',
    capacity: '10 m³',
    energyOutput: '5 kWh/day',
    wasteInput: '100 kg/day',
    description: 'Community biogas system serving 20 households, processing kitchen waste and garden trimmings.',
    features: [
      'Community waste collection',
      'Shared energy distribution',
      'Educational center',
      'Maintenance program'
    ],
    icon: Home,
    image: '/api/placeholder/400/300'
  },
  {
    id: 3,
    title: 'University Campus Biogas',
    type: 'Educational',
    location: 'Texas, USA',
    date: '2022',
    capacity: '30 m³',
    energyOutput: '15 kWh/day',
    wasteInput: '300 kg/day',
    description: 'Educational biogas facility for university campus, processing cafeteria waste and landscaping materials.',
    features: [
      'Research integration',
      'Student training program',
      'Data collection system',
      'Public education tours'
    ],
    icon: GraduationCap,
    image: '/api/placeholder/400/300'
  },
  {
    id: 4,
    title: 'Industrial Food Processing Plant',
    type: 'Industrial',
    location: 'Illinois, USA',
    date: '2022',
    capacity: '100 m³',
    energyOutput: '50 kWh/day',
    wasteInput: '1000 kg/day',
    description: 'Large-scale biogas system for food processing facility, handling organic waste and wastewater.',
    features: [
      'Continuous operation',
      'Wastewater treatment',
      'Energy grid connection',
      'Automated control system'
    ],
    icon: Factory,
    image: '/api/placeholder/400/300'
  },
  {
    id: 5,
    title: 'Mountain View School District',
    type: 'Educational',
    location: 'Colorado, USA',
    date: '2023',
    capacity: '20 m³',
    energyOutput: '10 kWh/day',
    wasteInput: '200 kg/day',
    description: 'School district biogas system serving 5 schools, processing cafeteria waste and paper products.',
    features: [
      'Multi-school integration',
      'Educational curriculum',
      'Student involvement',
      'Cost savings program'
    ],
    icon: GraduationCap,
    image: '/api/placeholder/400/300'
  },
  {
    id: 6,
    title: 'Riverside Community Center',
    type: 'Community',
    location: 'Washington, USA',
    date: '2023',
    capacity: '15 m³',
    energyOutput: '8 kWh/day',
    wasteInput: '150 kg/day',
    description: 'Community center biogas system processing local organic waste and providing energy for community facilities.',
    features: [
      'Community engagement',
      'Local waste processing',
      'Energy sharing program',
      'Environmental education'
    ],
    icon: Users,
    image: '/api/placeholder/400/300'
  }
]

const projectStats = [
  { label: 'Projects Completed', value: '500+' },
  { label: 'Total Capacity', value: '2,500 m³' },
  { label: 'Energy Generated', value: '1,250 kWh/day' },
  { label: 'Waste Processed', value: '25,000 kg/day' }
]

const projectTypes = [
  { type: 'All', count: projects.length },
  { type: 'Agricultural', count: projects.filter(p => p.type === 'Agricultural').length },
  { type: 'Residential', count: projects.filter(p => p.type === 'Residential').length },
  { type: 'Educational', count: projects.filter(p => p.type === 'Educational').length },
  { type: 'Industrial', count: projects.filter(p => p.type === 'Industrial').length },
  { type: 'Community', count: projects.filter(p => p.type === 'Community').length }
]

export default function ProjectsPage() {
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
              Our Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-primary-100"
            >
              Explore our successful biogas installations across different sectors. 
              From farms to schools, we've helped communities transform waste into clean energy.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Filter */}
      <section className="py-8 bg-white border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {projectTypes.map((type, index) => (
              <motion.button
                key={type.type}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-primary-100 hover:text-primary-700"
              >
                {type.type} ({type.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <project.icon className="h-16 w-16 text-gray-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {project.type}
                    </span>
                    <span className="text-sm text-gray-500">{project.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Zap className="h-4 w-4 mr-2 text-gray-400" />
                      {project.capacity} capacity
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      {project.energyOutput} energy output
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {project.features.slice(0, 2).map((feature, featureIndex) => (
                        <li key={featureIndex}>• {feature}</li>
                      ))}
                      {project.features.length > 2 && (
                        <li>• +{project.features.length - 2} more features</li>
                      )}
                    </ul>
                  </div>
                  
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-500 transition-colors"
                  >
                    View Details
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Featured Case Study: Green Valley Farm
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our largest agricultural biogas installation demonstrates the potential 
                for large-scale waste-to-energy conversion in the farming sector.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-primary-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Reduced energy costs by 70%</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-primary-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Processes 500 kg of waste daily</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-primary-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Generates 25 kWh of clean energy</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 bg-primary-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Reduces CO2 emissions by 15 tons/year</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                <Building className="h-16 w-16 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Results</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">70%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">25 kWh</div>
                  <div className="text-sm text-gray-600">Daily Energy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">15 tons</div>
                  <div className="text-sm text-gray-600">CO2 Reduced</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">500 kg</div>
                  <div className="text-sm text-gray-600">Waste Processed</div>
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
              Ready to Start Your Project?
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Join our growing list of successful biogas installations. 
              Get expert consultation and a customized solution for your needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/quote"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Start Your Project
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
