'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Wrench, GraduationCap, Package, Star, Quote } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'Installation',
    description: 'Professional biogas plant installation with expert guidance and support.',
    href: '/services#installation'
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: 'Regular maintenance and support to keep your biogas system running efficiently.',
    href: '/services#maintenance'
  },
  {
    icon: GraduationCap,
    title: 'Training',
    description: 'Comprehensive training programs for biogas system operation and management.',
    href: '/services#training'
  },
  {
    icon: Package,
    title: 'Products',
    description: 'High-quality biogas equipment and accessories for all your needs.',
    href: '/services#products'
  }
]

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Farm Owner',
    content: 'Intrinsic Biogas transformed our farm waste into clean energy. Our biogas plant has been running perfectly for 2 years now.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner',
    content: 'The installation process was smooth and professional. We\'ve reduced our energy costs by 60% since switching to biogas.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'School Administrator',
    content: 'Our school\'s biogas system is not only cost-effective but also provides great educational value for our students.',
    rating: 5
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold tracking-tight sm:text-6xl"
            >
              Transform Waste Into
              <span className="block text-primary-200">Clean Energy</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-blue-100"
            >
              Leading biogas solutions for homes, farms, and businesses. 
              Reduce costs, protect the environment, and create sustainable energy from organic waste.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                href="/quote"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-white hover:text-primary-200 transition-colors"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Biogas Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What is Biogas?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Biogas is a renewable energy source produced from the breakdown of organic matter 
              in the absence of oxygen. It's a clean, sustainable alternative to fossil fuels 
              that helps reduce greenhouse gas emissions while providing reliable energy.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Renewable</h3>
              <p className="mt-2 text-sm text-gray-600">Sustainable energy from organic waste</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Clean</h3>
              <p className="mt-2 text-sm text-gray-600">Reduces greenhouse gas emissions</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Cost-Effective</h3>
              <p className="mt-2 text-sm text-gray-600">Lower energy costs and waste disposal</p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                <Leaf className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Reliable</h3>
              <p className="mt-2 text-sm text-gray-600">Consistent energy production</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive biogas solutions tailored to your needs
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 group-hover:bg-primary-200 transition-colors">
                  <service.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                <Link
                  href={service.href}
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-500 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-primary-500" />
                  <div className="ml-4 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
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
              Ready to Go Green?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Join hundreds of satisfied customers who have made the switch to sustainable energy. 
              Get your free quote today and start your biogas journey.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/quote"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Request a Quote
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
