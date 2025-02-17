"use client"
import { motion } from "framer-motion"
import { FaEnvelope, FaGlobe, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const contactInfo = [
    { icon: FaEnvelope, text: "contact@agentiaworld.com", link: "mailto:contact@agentiaworld.com" },
    { icon: FaGlobe, text: "www.agentiaworld.com", link: "https://www.agentiaworld.com" },
  ]

  const socialLinks = [
    { icon: FaTwitter, link: "https://twitter.com/" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/company/piaicofficial/posts/?feedView=all" },
    { icon: FaGithub, link: "https://github.com/panaversity" },
  ]

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 py-12 bg-black min-h-screen">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          Get in Touch
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl">Ready to transform your business with AI?</p>
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row items-start justify-center gap-8 w-full max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Contact Information */}
        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/3  p-8 rounded-2xl "
        >
          <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center mb-4">
              <item.icon className="text-purple-400 mr-4 text-xl" />
              <a href={item.link} className="text-gray-300 hover:text-purple-400 transition-colors">
                {item.text}
              </a>
            </div>
          ))}
          <div className="flex mt-6">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <item.icon className="text-2xl" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          variants={itemVariants}
          className="w-full md:w-2/3  p-8 rounded-2xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
             
              <input
              placeholder="First Name"
                type="text"
                id="firstName"
                name="firstName"
                className="w-full bg-zinc-900 text-white border border-purple-500 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-400"
              />
            </div>
            <div>
             
              <input
              placeholder="Last Name"
                type="text"
                id="lastName"
                name="lastName"
                className="w-full bg-zinc-900 text-white border border-purple-500 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>
          <div className="mb-6">
          
            <input
            placeholder="Email Address"
              type="email"
              id="email"
              name="email"
              className="w-full bg-zinc-900 text-white border border-purple-500 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-400"
            />
          </div>
          <div className="mb-6">
          
            <textarea
            placeholder="Your Message"
              id="message"
              name="message"
              rows={4}
              className="w-full bg-zinc-900 text-white border border-purple-500 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-400"
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-700 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded-lg text-xl transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  )
}

export default ContactPage

