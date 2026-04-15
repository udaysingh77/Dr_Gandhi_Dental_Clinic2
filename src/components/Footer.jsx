import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiMessageCircle } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Appointment', href: '#appointment' },
    { label: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { icon: FiPhone, href: `tel:${import.meta.env.VITE_CLINIC_PHONE.replace(/\s+/g, '')}`, label: 'Call' },
    { icon: FiMail, href: `mailto:${import.meta.env.VITE_CLINIC_EMAIL}`, label: 'Email' },
    { icon: FiMessageCircle, href: `https://wa.me/${import.meta.env.VITE_CLINIC_WHATSAPP}`, label: 'WhatsApp' }
  ]

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <p className="font-bold text-lg">Dr. Gandhi</p>
                <p className="text-xs text-gray-400">Dental Clinic</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing world-class dental care with advanced technology and a warm, welcoming environment.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Dental Implants',
                'Root Canal Treatment',
                'Teeth Whitening',
                'Smile Makeover',
                'Braces & Invisalign',
                'Gum Treatment'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href={`tel:${import.meta.env.VITE_CLINIC_PHONE.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
              >
                <FiPhone size={16} />
                {import.meta.env.VITE_CLINIC_PHONE}
              </a>
              <a
                href={`mailto:${import.meta.env.VITE_CLINIC_EMAIL}`}
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
              >
                <FiMail size={16} />
                {import.meta.env.VITE_CLINIC_EMAIL}
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <FiMapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>{import.meta.env.VITE_CLINIC_CITY}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 md:pt-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              © {currentYear} Dr. Mitesh Gandhi Dental Clinic. All rights reserved.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-all"
                    title={social.label}
                  >
                    <IconComponent size={18} />
                  </a>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
