import album1 from '../assets/all-encores.jpg'
import album2 from '../assets/articulation.jpg'
import album3 from '../assets/blurred.jpg'
import album4 from '../assets/eulogy-for-evolution.jpg'
import album5 from '../assets/the-cell.jpg'
function Gallery() {
  return (
    <div className="gallery">
<img src={album1} alt="All Encores" />
<img src={album2} alt="articulation" />
<img src={album3} alt="blurred" />
<img src={album4} alt="eulogy-for-evolution" />
<img src={album5} alt="the-cell" />
    </div>
  )
}

export default Gallery