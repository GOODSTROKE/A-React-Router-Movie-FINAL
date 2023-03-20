import React from 'react'
function MoviePage(props) {
  const { movie } = props
  return (
    <div>
      <div style={{ width: '100%', float: 'left', alignContent: 'left' }}>
        <p>Title: {movie.title}</p>
        <p>Director: {movie.director}</p>
        <p>Actors: {movie.actors}</p>
        <p>Plot: {movie.plot}</p>
        <p>Year: {movie.year}</p>
        <p>IMDB Rating: {movie.imdbRating}</p>
      </div>
    </div>
  )
}

export default MoviePage
