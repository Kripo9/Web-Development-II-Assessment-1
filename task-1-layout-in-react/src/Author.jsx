import profile from '../assets/profile_picture.jpg'
import facebook from '../assets/facebook-icon.png'
import instagram from '../assets/instagram-icon.svg'
import twitter from '../assets/twitter-icon.svg'
function Author() {
  return (
    <div className="author">
      <div>
        <h2>The Author</h2>
        <p>
          Sapien leo scelerisque per convallis torquent nunc.
          Lobortis eleifend a nam sit turpis nostra.
          Tempus suspendisse libero curae faucibus lobortis
          litora bibendum praesent! Eget quam magna,
          diam commodo interdum sapien magnis.
        </p>
      </div>
      <img src={profile} alt="Author" />
      <div className="social-icons">
  <img src={facebook} alt="Facebook" />
  <img src={instagram} alt="Instagram" />
  <img src={twitter} alt="Twitter" />
     </div>
    </div>
  )
}

export default Author