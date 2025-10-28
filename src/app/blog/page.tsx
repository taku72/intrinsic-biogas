'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Tag, 
  Search,
  Filter,
  TrendingUp,
  Leaf,
  Zap,
  Globe
} from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Biogas: Trends and Innovations in 2024',
    excerpt: 'Explore the latest developments in biogas technology and how they\'re shaping the renewable energy landscape.',
    content: 'Biogas technology continues to evolve rapidly, with new innovations making it more efficient and accessible than ever before...',
    author: 'Dr. Sarah Green',
    date: '2024-01-15',
    category: 'Technology',
    tags: ['innovation', 'renewable energy', 'technology'],
    readTime: '5 min read',
    image: '/api/placeholder/400/250',
    featured: true
  },
  {
    id: 2,
    title: 'How to Choose the Right Biogas System for Your Farm',
    excerpt: 'A comprehensive guide to selecting the perfect biogas solution for agricultural operations.',
    content: 'Choosing the right biogas system for your farm requires careful consideration of multiple factors...',
    author: 'Michael Chen',
    date: '2024-01-10',
    category: 'Agriculture',
    tags: ['farming', 'agriculture', 'guide'],
    readTime: '7 min read',
    image: '/api/placeholder/400/250',
    featured: false
  },
  {
    id: 3,
    title: 'Environmental Benefits of Biogas: A Complete Analysis',
    excerpt: 'Understanding the environmental impact and benefits of biogas technology.',
    content: 'Biogas technology offers significant environmental benefits that go beyond just renewable energy production...',
    author: 'Emily Rodriguez',
    date: '2024-01-05',
    category: 'Environment',
    tags: ['environment', 'sustainability', 'climate change'],
    readTime: '6 min read',
    image: '/api/placeholder/400/250',
    featured: false
  },
  {
    id: 4,
    title: 'Case Study: Successful Biogas Implementation at Green Valley Farm',
    excerpt: 'A detailed look at how one farm transformed their waste management and energy production.',
    content: 'Green Valley Farm\'s biogas implementation showcases the potential for large-scale agricultural biogas systems...',
    author: 'David Kim',
    date: '2023-12-28',
    category: 'Case Study',
    tags: ['case study', 'success story', 'farm'],
    readTime: '8 min read',
    image: '/api/placeholder/400/250',
    featured: false
  },
  {
    id: 5,
    title: 'Maintenance Tips for Optimal Biogas System Performance',
    excerpt: 'Essential maintenance practices to keep your biogas system running efficiently.',
    content: 'Proper maintenance is crucial for ensuring your biogas system operates at peak efficiency...',
    author: 'Dr. Sarah Green',
    date: '2023-12-20',
    category: 'Maintenance',
    tags: ['maintenance', 'tips', 'efficiency'],
    readTime: '4 min read',
    image: '/api/placeholder/400/250',
    featured: false
  },
  {
    id: 6,
    title: 'Government Incentives and Funding for Biogas Projects',
    excerpt: 'Navigate the complex world of biogas project financing and government support.',
    content: 'Understanding available funding options and government incentives can significantly reduce the cost of biogas projects...',
    author: 'Michael Chen',
    date: '2023-12-15',
    category: 'Finance',
    tags: ['funding', 'incentives', 'finance'],
    readTime: '6 min read',
    image: '/api/placeholder/400/250',
    featured: false
  }
]

const categories = [
  { name: 'All', count: blogPosts.length },
  { name: 'Technology', count: blogPosts.filter(post => post.category === 'Technology').length },
  { name: 'Agriculture', count: blogPosts.filter(post => post.category === 'Agriculture').length },
  { name: 'Environment', count: blogPosts.filter(post => post.category === 'Environment').length },
  { name: 'Case Study', count: blogPosts.filter(post => post.category === 'Case Study').length },
  { name: 'Maintenance', count: blogPosts.filter(post => post.category === 'Maintenance').length },
  { name: 'Finance', count: blogPosts.filter(post => post.category === 'Finance').length }
]

const featuredTopics = [
  {
    icon: TrendingUp,
    title: 'Industry Trends',
    description: 'Stay updated with the latest biogas industry developments'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Learn about environmental benefits and sustainable practices'
  },
  {
    icon: Zap,
    title: 'Technology',
    description: 'Explore cutting-edge biogas technologies and innovations'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Discover biogas solutions from around the world'
  }
]

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

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
              Biogas Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-primary-100"
            >
              Stay informed about the latest developments in biogas technology, 
              sustainability practices, and industry insights.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="px-3 py-1 rounded-full text-sm font-medium transition-colors hover:bg-primary-100 hover:text-primary-700"
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-full bg-gray-200 flex items-center justify-center">
                  <TrendingUp className="h-16 w-16 text-gray-400" />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      Featured
                    </span>
                    <span className="ml-2 text-sm text-gray-500">{featuredPost.category}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {featuredPost.author}
                      <Calendar className="h-4 w-4 ml-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                      <span className="ml-4">{featuredPost.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-500 font-medium transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Latest Articles
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover insights, tips, and case studies from the biogas industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <TrendingUp className="h-12 w-12 text-gray-400" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {post.category}
                    </span>
                    <span className="ml-2 text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-500 transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Explore Topics
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Dive deeper into specific areas of biogas technology and sustainability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="mx-auto h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <topic.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.title}</h3>
                <p className="text-sm text-gray-600">{topic.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Subscribe to our newsletter for the latest biogas insights, industry news, and expert tips.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 max-w-md px-4 py-3 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              />
              <button className="px-6 py-3 bg-white text-primary-600 rounded-md font-semibold hover:bg-gray-50 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-sm text-primary-200">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
