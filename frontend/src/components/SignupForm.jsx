import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Loader, CheckCircle, AlertCircle } from 'lucide-react'
import axios from 'axios'
import { API_URL } from '../config'
import './SignupForm.css'
const SignupForm = ({ onClose }) => {
const [formData, setFormData] = useState({
fullName: '',
email: '',
whatsappNumber: '',
preferredTopics: ''
})
const [status, setStatus] = useState('idle') // idle, loading, success, error
const [message, setMessage] = useState('')
const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
})
}
const handleSubmit = async (e) => {
e.preventDefault()
setStatus('loading')
setMessage('')
try {
  const response = await axios.post(`${API_URL}/api/signup`, formData)
  
  if (response.data.success) {
    setStatus('success')
    setMessage(response.data.message)
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      whatsappNumber: '',
      preferredTopics: ''
    })

    // Close modal after 3 seconds
    setTimeout(() => {
      onClose()
    }, 3000)
  }
} catch (error) {
  setStatus('error')
  setMessage(
    error.response?.data?.message || 
    'Something went wrong. Please try again.'
  )
}
}
return (
<motion.div
className="modal-overlay"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
onClick={onClose}
>
<motion.div
className="modal-content"
initial={{ scale: 0.9, opacity: 0, y: 20 }}
animate={{ scale: 1, opacity: 1, y: 0 }}
exit={{ scale: 0.9, opacity: 0, y: 20 }}
transition={{ type: 'spring', damping: 25, stiffness: 300 }}
onClick={(e) => e.stopPropagation()}
>
<button className="modal-close" onClick={onClose}>
<X size={24} />
</button>
    <div className="modal-header">
      <h2>Join the Debate</h2>
      <p>Fill in your details to register for a debate with Dev Patel</p>
    </div>

    {status === 'success' ? (
      <motion.div
        className="success-message"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring' }}
      >
        <CheckCircle size={48} />
        <h3>Registration Successful!</h3>
        <p>{message}</p>
      </motion.div>
    ) : (
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            minLength={2}
            maxLength={100}
            placeholder="John Doe"
            disabled={status === 'loading'}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            disabled={status === 'loading'}
          />
        </div>

        <div className="form-group">
          <label htmlFor="whatsappNumber">WhatsApp Number *</label>
          <input
            type="tel"
            id="whatsappNumber"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
            required
            placeholder="+91XXXXXXXXXX"
            disabled={status === 'loading'}
          />
          <span className="form-hint">Include country code (e.g., +91 for India)</span>
        </div>

        <div className="form-group">
          <label htmlFor="preferredTopics">Preferred Topics (Optional)</label>
          <textarea
            id="preferredTopics"
            name="preferredTopics"
            value={formData.preferredTopics}
            onChange={handleChange}
            maxLength={500}
            rows={4}
            placeholder="E.g., Hindu theology, geopolitics, philosophy..."
            disabled={status === 'loading'}
          />
          <span className="form-hint">{formData.preferredTopics.length}/500 characters</span>
        </div>

        {status === 'error' && (
          <motion.div
            className="error-message"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertCircle size={20} />
            <span>{message}</span>
          </motion.div>
        )}

        <button
          type="submit"
          className="submit-button"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <>
              <Loader className="spinner" size={20} />
              Submitting...
            </>
          ) : (
            'Register for Debate'
          )}
        </button>
      </form>
    )}
  </motion.div>
</motion.div>
)
}
export default SignupForm