import facebook from '../assets/facebook-icon.png'
import instagram from '../assets/instagram-icon.svg'
import twitter from '../assets/twitter-icon.svg'

function Footer() {
  return (
    <footer>
      <nav>
        <a href="#">Our Blog</a>
        <a href="#">Our Artists</a>
        <a href="#">Our Story</a>
      </nav>

      <p>© 2023 Erased Disks Ltd.</p>

      <div className="footer-icons">
        <img src={facebook} alt="Facebook" />
        <img src={instagram} alt="Instagram" />
        <img src={twitter} alt="Twitter" />
      </div>
    </footer>
  )
}

export default Footer