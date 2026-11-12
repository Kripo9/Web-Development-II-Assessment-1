function MovieCard({ image, title, description }) {
  return (
    <article className="movie-card">
      <img src={image} alt={title} />
      <div className="movie-info">
        <p>{description}</p>
        <button>Watch Now</button>
      </div>
    </article>
  )
}

export default MovieCard