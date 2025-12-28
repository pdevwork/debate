import { motion } from 'framer-motion'
import { MessageCircle, Youtube } from 'lucide-react'
import './Hero.css'

const Hero = ({ onSignupClick }) => {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Youtube size={16} />
          <span>Live on YouTube</span>
        </motion.div>

        <h1 className="hero-title">
          The Debate Challenge
          <br />
          <span className="gradient-text">vs Dev Patel</span>
        </h1>

        <p className="hero-description">
          Think you can win an intellectual debate? Challenge Dev Patel live on his YouTube channel.
          Topics range from philosophy and theology to politics and social constructs.
        </p>

        <div className="hero-buttons">
          <motion.button
            className="btn-primary"
            onClick={onSignupClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up for Debate
          </motion.button>

          <motion.a
            href="https://www.youtube.com/@pateldev156"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Youtube size={20} />
            Visit Channel
          </motion.a>
        </div>

        <div className="hero-features">
          <div className="feature-item">
            <MessageCircle size={20} />
            <span>Topics via WhatsApp</span>
          </div>
          <div className="feature-item">
            <Youtube size={20} />
            <span>Streamed Live</span>
          </div>
        </div>
      </motion.div>

      <div className="hero-gradient"></div>
    </section>
  )
}

export default Hero