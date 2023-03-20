import React from 'react'
function MovieList(props) {
  const { movies, handleShowSingleMovie } = props
  console.log('movies', movies)
  return (
    <div>
      <table border='1'>
        <tr>
          <th>Title</th>
          <th>Director</th>
          <th>Actors</th>
          <th>Plot</th>
          <th>Year</th>
          <th>IMDB Rating</th>
        </tr>
        {movies.map((m, i) => {
          return (
            <tr onClick={() => handleShowSingleMovie(i)}>
              <td>{m.title}</td>
              <td>{m.director}</td>
              <td>{m.actors}</td>
              <td>{m.plot}</td>
              <td>{m.year}</td>
              <td>{m.imdbRating}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default MovieList
