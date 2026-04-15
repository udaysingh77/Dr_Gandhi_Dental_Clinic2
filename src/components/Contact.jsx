import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'

export default function Contact() {
  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'Address',
      content: '22/23 Shop Number, Veena Geet Sangeet, Mahavir Nagar, Kandivali West, Mumbai, Maharashtra 400067',
      action: 'View on Maps'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      content: '+91 9930813579',
      action: 'Call Now',
      href: 'tel:+919930813579'
    },
    {
      icon: FiMail,
      title: 'Email',
      content: 'clinic@example.com',
      action: 'Send Email',
      href: 'mailto:clinic@example.com'
    },
    {
      icon: FiClock,
      title: 'Working Hours',
      content: 'Monday - Sunday: 9 AM - 8 PM',
      action: null
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
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm md:text-base">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mt-4 mb-6">
            Contact Information
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reach out to us for any inquiries or to schedule your appointment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, idx) => {
              const IconComponent = info.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-light p-6 lg:p-8 rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent size={28} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-dark mb-2">{info.title}</h3>
                      <p className="text-gray-600 break-words">{info.content}</p>
                      {info.href && (
                        <a
                          href={info.href}
                          className="inline-block text-primary font-semibold mt-3 hover:text-secondary transition-colors"
                        >
                          {info.action}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-light rounded-2xl overflow-hidden h-96 md:h-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.1234567890!2d72.82385!3d19.17865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c99999999999%3A0x9999999999999999!2sKandivali%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location"
            ></iframe>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-dark mb-4">
            Emergency Services Available
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            For dental emergencies, please call us immediately. We prioritize urgent cases and can accommodate same-day appointments.
          </p>
          <a
            href="tel:+919930813579"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-secondary transition-colors"
          >
            <FiPhone size={20} />
            Emergency Call
          </a>
        </motion.div>
      </div>
    </section>
  )
}
