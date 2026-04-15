import { motion } from 'framer-motion'
import { FiPhone, FiMessageCircle } from 'react-icons/fi'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <section id="hero" className="relative min-h-screen pt-20 pb-10 md:pt-32 md:pb-20 flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50 -z-10"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-10"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block text-primary font-semibold text-sm md:text-base mb-4">
                Welcome to Excellence in Dental Care
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6"
            >
              Creating Healthy, <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Confident Smiles</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed mb-8"
            >
              Advanced dental care with a warm and welcoming environment. Experience painless treatments and modern dental solutions from Dr. Mitesh Gandhi, a trusted dentist serving Mumbai for years.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.a
                href="tel:+919930813579"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-secondary transition-colors shadow-lg hover:shadow-xl"
              >
                <FiPhone size={20} />
                Call Now
              </motion.a>

              <motion.a
                href="https://wa.me/919930813579"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
              >
                <FiMessageCircle size={20} />
                WhatsApp
              </motion.a>

              <motion.button
                onClick={() => document.getElementById('appointment').scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-light transition-colors"
              >
                Book Appointment
              </motion.button>
            </motion.div>

            {/* Rating */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <span className="text-gray-700 font-semibold">4.9 Rating on Google</span>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative h-96 lg:h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl"></div>
            <div className="absolute inset-4 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">😁</div>
                <p className="text-xl font-bold text-dark mb-3">Smile with Confidence</p>
                <p className="text-sm text-gray-500 italic">(Here will be your photo)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
