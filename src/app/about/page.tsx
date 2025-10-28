'use client'

import { motion } from 'framer-motion'
import { Leaf, Target, Eye, Users, Award, TrendingUp, Globe, Zap } from 'lucide-react'

const stats = [
  { label: 'Projects Completed', value: '500+' },
  { label: 'Happy Customers', value: '300+' },
  { label: 'Years Experience', value: '15+' },
  { label: 'CO2 Reduced (tons)', value: '10,000+' },
]

const team = [
  {
    name: 'Dr. Sarah Green',
    role: 'CEO & Founder',
    bio: 'Environmental engineer with 20+ years experience in renewable energy solutions.',
    image: '/api/placeholder/300/300'
  },
  {
    name: 'Michael Chen',
    role: 'Technical Director',
    bio: 'Expert in biogas system design and implementation with 15+ years in the field.',
    image: '/api/placeholder/300/300'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Operations Manager',
    bio: 'Specializes in project management and customer relations for sustainable energy projects.',
    image: '/api/placeholder/300/300'
  },
  {
    name: 'David Kim',
    role: 'Lead Engineer',
    bio: 'Mechanical engineer focused on biogas plant optimization and maintenance systems.',
    image: '/api/placeholder/300/300'
  }
]

const achievements = [
  {
    icon: Award,
    title: 'Green Energy Award 2023',
    description: 'Recognized for outstanding contribution to sustainable energy solutions'
  },
  {
    icon: Globe,
    title: 'Carbon Neutral Certified',
    description: 'Achieved carbon neutral operations across all our facilities'
  },
  {
    icon: TrendingUp,
    title: 'Industry Leader',
    description: 'Top-rated biogas solutions provider for 5 consecutive years'
  },
  {
    icon: Zap,
    title: 'Innovation Excellence',
    description: 'Pioneered advanced biogas technology for small-scale applications'
  }
]

export default function AboutPage() {
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
              About Intrinsic Biogas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-blue-100"
            >
              We're passionate about transforming waste into clean, sustainable energy. 
              Our mission is to make biogas technology accessible to everyone.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To accelerate the adoption of biogas technology by providing innovative, 
                reliable, and cost-effective solutions that transform organic waste into 
                clean energy while reducing environmental impact.
              </p>
              <p className="text-gray-600">
                We believe that sustainable energy should be accessible to everyone, 
                from small farms to large businesses. Our comprehensive approach ensures 
                that every project is successful, from initial consultation to ongoing support.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To create a world where every community has access to clean, renewable energy 
                generated from their own organic waste, contributing to a sustainable future 
                for generations to come.
              </p>
              <p className="text-gray-600">
                We envision a future where biogas technology is the standard for waste management 
                and energy production, creating a circular economy that benefits both people 
                and the planet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Impact
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Numbers that speak to our commitment and success
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Team Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Experienced professionals dedicated to sustainable energy solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto h-32 w-32 rounded-full bg-gray-200 mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-primary-600 font-medium">{member.role}</p>
                <p className="text-sm text-gray-600 mt-2">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Awards & Recognition
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Industry recognition for our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm text-center"
              >
                <div className="mx-auto h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <achievement.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 via-blue-500 to-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Work With Us?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Join our growing community of satisfied customers and start your sustainable energy journey today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/quote"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Get Started
              </a>
              <a
                href="/contact"
                className="text-sm font-semibold leading-6 text-white hover:text-primary-200 transition-colors"
              >
                Contact Us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
