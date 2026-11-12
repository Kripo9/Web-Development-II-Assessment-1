import './App.css'
import Header from './Header'
import MovieCard from './MovieCard'

function App() {
  return (
    <div>
      <Header />
      <main className="movies">
  <MovieCard
    image="/assets/who-framed-roger-rabbit.jpg"
    title="Who Framed Roger Rabbit"
    description="In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!"
  />
  

<MovieCard
  image="/assets/hook.jpg"
  title="Hook"
  description="Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic."
/>

<MovieCard
  image="/assets/la-la-land.jpg"
  title="La La Land"
  description="Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!"
/>

<MovieCard
  image="/assets/hidden-figures.jpg"
  title="Hidden Figures"
  description="Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers."
/>

<MovieCard
  image="/assets/palm-springs.jpg"
  title="Palm Springs"
  description="A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways."
/>

<MovieCard
  image="/assets/barbie.jpg"
  title="Barbie"
  description="Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!
"
/>
</main>
    </div>
  )
}

export default App