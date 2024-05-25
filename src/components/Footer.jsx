import { FaGithub } from 'react-icons/fa'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://github.com/vinesk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
        <span>vinesk</span>
      </a>
    </footer>
  )
}

export default Footer
