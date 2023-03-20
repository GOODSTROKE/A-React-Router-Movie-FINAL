import React from 'react'

function Navbar(props) {
  const { handleMovieListPage, handleAddMoviePage, handleAddMovieContact  } = props

  return (
    <div>
      <ul style={{ padding: '0 40%', color: 'white', fontSize: '20px' }}>
        <li style={{ marginRight: '20px' }}>
          <p
            style={{ cursor: 'pointer' }}
            onClick={() => handleMovieListPage()}
          >
            List Movies |
          </p>
        </li>

        <li>
          <p style={{ cursor: 'pointer' }} onClick={() => handleAddMoviePage()}>
            Add Movie |
          </p>
        </li>
        <li>
          <p style={{ cursor: 'pointer' }} onClick={() => handleAddMoviePage()}>
          About
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
