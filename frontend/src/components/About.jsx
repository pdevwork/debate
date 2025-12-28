import { motion } from 'framer-motion'
import { GraduationCap, Brain, Globe, Award } from 'lucide-react'
import './About.css'

const About = () => {
  const expertise = [
    { icon: Brain, title: 'Hindu Theology', desc: 'Deep understanding of ancient texts and philosophies' },
    { icon: Globe, title: 'Geopolitics', desc: 'Analysis of global affairs and international relations' },
    { icon: Award, title: 'Philosophy', desc: 'Logic, ethics, and metaphysical reasoning' },
    { icon: GraduationCap, title: 'Social Constructs', desc: 'Behavioral patterns and societal frameworks' }
  ]

  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="about-title">Meet Your Opponent</h2>
          <p className="about-subtitle">Dev Patel — Debater, Thinker, Challenger</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-card main-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-header">
              <div className="avatar-placeholder">DP</div>
              <div>
                <h3>Dev Patel</h3>
                <p className="subtitle">Debater & Content Creator</p>
              </div>
            </div>

            <div className="card-body">
              <div className="info-row">
                <span className="label">Age:</span>
                <span className="value">23 years</span>
              </div>
              <div className="info-row">
                <span className="label">Location:</span>
                <span className="value">Gujarat, India</span>
              </div>
              <div className="info-row">
                <span className="label">Education:</span>
                <span className="value">BCA, Amrita School of Engineering, Coimbatore</span>
              </div>
              <div className="info-row">
                <span className="label">Experience:</span>
                <span className="value">1 year of informal debate experience</span>
              </div>
            </div>
          </motion.div>

          <div className="expertise-grid">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                className="expertise-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5, boxShadow: 'var(--shadow-md)' }}
              >
                <div className="expertise-icon">
                  <item.icon size={24} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="about-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            With expertise spanning religion, politics, philosophy, and social behavior, 
            Dev brings thoughtful arguments and respectful discourse to every debate. 
            Are you ready to challenge him?
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About