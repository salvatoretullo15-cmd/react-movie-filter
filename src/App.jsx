import { useState } from 'react'
const movies =
 [
   { title: 'Inception', genre: 'Fantascienza' },
   { title: 'Il Padrino', genre: 'Thriller' },
   { title: 'Titanic', genre: 'Romantico' },
   { title: 'Batman', genre: 'Azione' },
   { title: 'Interstellar', genre: 'Fantascienza' },
   { title: 'Pulp Fiction', genre: 'Thriller' },
 ]

function App(){
  
  const [filteredGenre , setFilteredGenre] = useState ("")

  return (
    <>
      <div className="container">
        <h1>CHE TIPO SEI STASERA</h1>
        <select className="form-select" onChange={(e)=>setFilteredGenre(e.target.value)} value={filteredGenre}>
          <option value="">GENERI</option>
          {movies.map((movie,genre)=>(
            <option key={genre} value={movie.genre}>
              {movie.genre}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default App
