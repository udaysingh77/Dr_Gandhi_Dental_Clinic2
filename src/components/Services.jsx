import { motion } from 'framer-motion'
import {
  FiSmile,
  FiZap,
  FiRadio,
  FiUsers,
  FiCheck,
  FiAward,
  FiEye,
  FiTrendingUp
} from 'react-icons/fi'

export default function Services() {
  const services = [
    {
      icon: FiSmile,
      title: 'Dental Implants',
      description: 'Restore missing teeth with durable, natural-looking implants.'
    },
    {
      icon: FiZap,
      title: 'Root Canal Treatment',
      description: 'Save your tooth with painless root canal procedures.'
    },
    {
      icon: FiRadio,
      title: 'Invisalign & Braces',
      description: 'Straighten your smile with modern orthodontic solutions.'
    },
    {
      icon: FiTrendingUp,
      title: 'Smile Makeover',
      description: 'Transform your smile with comprehensive cosmetic treatments.'
    },
    {
      icon: FiUsers,
      title: 'Pediatric Dentistry',
      description: 'Gentle and friendly dental care for children.'
    },
    {
      icon: FiAward,
      title: 'Teeth Whitening',
      description: 'Achieve a brighter smile with professional whitening.'
    },
    {
      icon: FiEye,
      title: 'Gum Treatment',
      description: 'Advanced treatments for healthy and strong gums.'
    },
    {
      icon: FiCheck,
      title: 'Routine Checkups',
      description: 'Regular dental checkups and preventive care.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section id="services" className="py-16 md:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm md:text-base">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mt-4 mb-6">
            Comprehensive Dental Care
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From routine checkups to advanced cosmetic procedures, we offer a full range of dental services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service, idx) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white p-6 lg:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                  <IconComponent
                    size={28}
                    className="text-primary group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-dark mt-4 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
