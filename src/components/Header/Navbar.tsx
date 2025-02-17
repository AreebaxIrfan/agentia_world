'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { RiRobot2Line } from 'react-icons/ri'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Features', href: '/NeuralCapabilities' },
    { name: 'Technology', href: '/advancedAi' },
    { name: 'Agents', href: '/AiSolution' },
    { name: 'Pricing', href: '/ChoosePlan' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-black/80 text-white backdrop-blur-md border-b border-purple-900/30 shadow-[0_4px_30px_rgba(128,0,128,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >

            <Link href="/" className="text-2xl font-bold text-white space-x-4  bg-clip-text text-transparent flex flex-row">
              <RiRobot2Line
                size={35}
                className="text-purple-400 rounded-full"
              />
              <p className='pt-1'>   Agentic World</p>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium text-sm tracking-wide"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-purple-500/20"
            >
              Launch Console
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className={`h-6 w-6 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute w-full bg-black/95 backdrop-blur-lg border-b border-purple-900/30`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ x: 5 }}
              className="border-b border-purple-900/20 pb-2"
            >
              <Link
                href={link.href}
                className="block text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md transition-colors duration-300"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium mt-4 shadow-lg shadow-purple-500/20"
          >
            Launch Console
          </motion.button>
        </div>
      </motion.div>
    </nav>
  )
}

export default Navbar