import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

export default function Reviews() {
  const testimonials = [
    {
      name: 'Anjali Sharma',
      text: 'Very homely atmosphere and great environment. Dr. Mitesh is very professional and caring.',
      rating: 5,
      initials: 'AS'
    },
    {
      name: 'Rajesh Patel',
      text: 'Well organized and hygienic treatment with great experience. Highly recommended!',
      rating: 5,
      initials: 'RP'
    },
    {
      name: 'Priya Verma',
      text: 'Doctor understands problems like a family member. Best dental clinic in Kandivali!',
      rating: 5,
      initials: 'PV'
    },
    {
      name: 'Vikram Singh',
      text: 'Amazing experience with painless treatment. The staff is extremely friendly and supportive.',
      rating: 5,
      initials: 'VS'
    },
    {
      name: 'Neha Gupta',
      text: 'Professional service with state-of-the-art equipment. Very satisfied with the results!',
      rating: 5,
      initials: 'NG'
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
    <section id="reviews" className="py-16 md:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm md:text-base">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mt-4 mb-6">
            What Our Patients Say
          </h2>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <FiStar key={i} size={24} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-lg text-gray-600">4.9 Rating on Google Reviews</p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white p-6 lg:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
