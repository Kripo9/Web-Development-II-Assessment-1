import logo from '../assets/logo.svg'
function Header() {
  return (
    <header>
<img src={logo} alt="Erased Tapes logo" />
<nav>
  <a href="#">Our Blog</a>
  <a href="#">Our Artists</a>
  <a href="#">Our Story</a>
</nav>
    </header>
  )
}

export default Header
