import React, { useState } from 'react'

const MovieForm = (props) => {
  const { addMovie } = props

  const [title, setTitle] = useState('')
  const [director, setDirector] = useState('')
  const [actors, setActors] = useState('')
  const [plot, setPlot] = useState('')
  const [year, setYear] = useState(0)
  const [imdbRating, setImdbRating] = useState(0)

  const handleAddmovie = () => {
    if (!title || !director || !actors || !plot || !year || !imdbRating) {
      return alert('All fields are required')
    }

    const data = {
      title,
      director,
      actors,
      plot,
      year,
      imdbRating,
    }

    return addMovie(data)
  }

  return (
    <div>
      <title>
        <h1>Movie From</h1>
      </title>

      <label>Title: </label>
      <input
        type='text'
        onChange={(event) => {
          setTitle(event.target.value)
        }}
      />
      <br />

      <label>Director: </label>
      <input
        type='text'
        onChange={(event) => {
          setDirector(event.target.value)
        }}
      />
      <br />
      <label>Actors: </label>
      <input
        type='text'
        onChange={(event) => {
          setActors(event.target.value)
        }}
      />
      <br />

      <label>Plot: </label>
      <input
        type='text'
        onChange={(event) => {
          setPlot(event.target.value)
        }}
      />
      <br />

      <label>Year: </label>
      <input
        type='number'
        onChange={(event) => {
          setYear(event.target.value)
        }}
      />
      <br />
      <label>IMDB Rating: </label>
      <input
        type='number'
        onChange={(event) => {
          setImdbRating(event.target.value)
        }}
      />
      <br />
      <button onClick={handleAddmovie}>Add Movie</button>
    </div>
  )
}

export default MovieForm
