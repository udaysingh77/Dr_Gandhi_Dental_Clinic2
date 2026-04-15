import { motion } from 'framer-motion'
import { FiPhone, FiMessageCircle } from 'react-icons/fi'

export default function FloatingButtons() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200 } },
    hover: { scale: 1.1 }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-4"
    >
      {/* Call Button */}
      <motion.a
        href="tel:+919930813579"
        variants={itemVariants}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 md:w-16 md:h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
        title="Call Now"
      >
        <FiPhone size={24} />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919930813579"
        target="_blank"
        rel="noopener noreferrer"
        variants={itemVariants}
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <FiMessageCircle size={24} />
      </motion.a>
    </motion.div>
  )
}
