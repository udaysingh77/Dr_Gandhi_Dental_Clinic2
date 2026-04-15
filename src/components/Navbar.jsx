import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Appointment', id: 'appointment' },
    { label: 'Contact', id: 'contact' }
  ]

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-dark font-bold text-lg">Dr. Gandhi</p>
              <p className="text-xs text-gray-600">Dental Clinic</p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-dark hover:text-primary transition-colors font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
            <motion.a
              href={`tel:${import.meta.env.VITE_CLINIC_PHONE.replace(/\s+/g, '')}`}
              whileHover={{ scale: 1.05 }}
              className="bg-primary text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-secondary transition-colors"
            >
              <FiPhone size={18} />
              Call Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark hover:text-primary transition-colors"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t border-gray-200 pb-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-dark hover:bg-light hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href={`tel:${import.meta.env.VITE_CLINIC_PHONE.replace(/\s+/g, '')}`}
              className="block mx-4 mt-3 bg-primary text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-secondary transition-colors"
            >
              Call Now
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
