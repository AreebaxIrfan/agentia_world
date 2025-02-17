import Link from "next/link"
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"

const FooterSection = ({ title, links }: { title: string; links: { name: string; href: string }[] }) => (
  <div className="flex flex-col space-y-3">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/" },
        { name: "Pricing", href: "/" },
        { name: "Documentation", href: "/" },
        { name: "API", href: "/" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/" },
        { name: "Blog", href: "/" },
        { name: "Careers", href: "/" },
        { name: "Contact", href: "/" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy", href: "/" },
        { name: "Terms", href: "/" },
        { name: "Security", href: "/" },
        { name: "Compliance", href: "/" },
      ],
    },
  ]

  return (
    <footer className="bg-zinc-950 text-white py-12 px-4 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Agentia World
            </h2>
            <p className="text-gray-400 mb-4">
              Next-generation AI agents powering the future of enterprise intelligence.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/piaicofficial/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/panaverse/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://github.com/panaversity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>
          {footerSections.map((section, index) => (
            <FooterSection key={index} title={section.title} links={section.links} />
          ))}
        </div>
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>© 2025 Agentia World. Powered by Panaversity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

