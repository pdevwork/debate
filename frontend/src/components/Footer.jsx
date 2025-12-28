import { Heart, Youtube } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Made with <Heart size={16} className="heart-icon" /> for intellectual discourse
        </p>
        <div className="footer-links">
          <a 
            href="https://www.youtube.com/@pateldev156" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            <Youtube size={18} />
            YouTube Channel
          </a>
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} The Debate Challenge. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer