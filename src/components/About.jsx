import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'

export default function About() {
  const highlights = [
    'Advanced dental technology & equipment',
    'Painless treatment procedures',
    'Personalized care for all age groups',
    'Hygiene & safety first approach',
    'Experienced and qualified team',
    'Comfortable & welcoming clinic environment'
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold text-sm md:text-base">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-dark mt-4 mb-6">
              Why Choose Dr. Mitesh Gandhi?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At Dr. Mitesh Gandhi Dental Clinic, we are committed to creating healthy and confident smiles using advanced technology and personalized care. We provide painless treatments, modern dental solutions, and a friendly environment for all age groups.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              With years of experience and a team of dedicated professionals, we ensure every patient receives the highest standard of dental care. Your comfort and satisfaction are our top priorities.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <FiCheck className="text-white" size={16} />
                  </div>
                  <span className="text-dark font-medium">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-96 md:h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl"></div>
            <div className="absolute inset-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-center px-6">
                <p className="text-5xl mb-4">👨‍⚕️</p>
                <p className="text-2xl font-bold text-dark mb-2">Dr. Mitesh Gandhi</p>
                <p className="text-gray-600 mb-3">Expert Dentist</p>
                <p className="text-sm text-gray-500 italic">(Here will be your photo)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
