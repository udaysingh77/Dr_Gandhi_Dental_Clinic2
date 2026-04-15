import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: 'Is treatment painless?',
      answer: 'Yes, we use advanced anesthesia techniques and modern equipment to ensure painless treatments. Our dentists are trained to handle patients with anxiety and provide a comfortable experience.'
    },
    {
      question: 'Do you offer dental implants?',
      answer: 'Absolutely! We provide high-quality dental implants using the latest technology. Our team will guide you through the entire process with detailed consultations and personalized treatment plans.'
    },
    {
      question: 'How often should I visit a dentist?',
      answer: 'We recommend visiting your dentist at least twice a year for routine checkups and cleanings. However, if you have existing dental conditions, more frequent visits may be necessary.'
    },
    {
      question: 'Do you treat kids?',
      answer: 'Yes, we specialize in pediatric dentistry. We create a friendly and welcoming environment for children with age-appropriate treatments and techniques to make their visits enjoyable.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, credit cards, debit cards, and digital payments. We also offer flexible payment plans for major treatments to ease your financial burden.'
    },
    {
      question: 'Do you offer emergency dental services?',
      answer: 'Yes, we handle dental emergencies. Please call us immediately at +91 9930813579 for emergency appointments. We prioritize urgent cases and accommodate same-day visits when possible.'
    }
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

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
    <section className="py-16 md:py-24 bg-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm md:text-base">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mt-4 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services and treatments
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between hover:bg-light transition-colors"
              >
                <h3 className="text-lg font-semibold text-dark text-left">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: activeIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <FiChevronDown size={24} className="text-primary" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <p className="px-6 md:px-8 py-5 md:py-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">Have more questions?</p>
          <a
            href="tel:+919930813579"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-secondary transition-colors"
          >
            Call Us Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}
