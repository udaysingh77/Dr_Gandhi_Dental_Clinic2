import emailjs from '@emailjs/browser'

// Initialize EmailJS
export const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  if (!publicKey) {
    console.warn('EmailJS Public Key not configured')
    return false
  }
  emailjs.init(publicKey)
  return true
}

// Send appointment email
export const sendAppointmentEmail = async (formData) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

  if (!serviceId || !templateId) {
    throw new Error('EmailJS service or template not configured')
  }

  const templateParams = {
    to_email: import.meta.env.VITE_CLINIC_EMAIL,
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    appointment_date: formData.date,
    message: formData.message || 'No additional message',
    clinic_name: import.meta.env.VITE_CLINIC_NAME
  }

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams
    )
    return response
  } catch (error) {
    console.error('Email sending failed:', error)
    throw error
  }
}
