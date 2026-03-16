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
  const [selectedGenre , setSelectedGenre] = useState ("")

  //qui e se l'utente ha selezionato qualcosa oppure la space bar e vuota
  const filteredMovies = selectedGenre === '' 
    //se l'utente non ha scelto un genre specifico ci da una copia dell'arrey intero
    ? movies 
    //se l'utente sceglie un genere usa movies.filter creando un nuovo arrey con solo quel genre
    : movies.filter(movie => movie.genre === selectedGenre)

  const allGenres = movies.map(movie => movie.genre)
  
  const uniqueGenres = allGenres.filter((genre, index) => {
  return allGenres.indexOf(genre) === index;
  });

  return (
    <>
      <div className="container">
        <h1>CHE TIPO SEI STASERA</h1>

        {/*qui al click dell'utente overo la nostra 
          e-evento gli diciamo di prendere il valore 
          cliccato e salvarlo in setSelectedGenre mentre 
          value ci fara mostare a schermo il risultato 
          di selected genre*/}
        <select className="form-select" onChange={(e)=>setSelectedGenre(e.target.value)} value={selectedGenre}>
          <option value="">GENERI</option>

          {/*qui effettuiamo il ciclo map e per ogni 
            genere unico ci facciamo un option*/}
          {uniqueGenres.map((genre)=>(
            <option key={genre} value={genre}>{genre}
            </option>
          ))}
        </select>

        <ul className="list-group mt-3">
          {/*qui usiamo l'arrey filtrato per far 
            visualizzare soltanto l'opzione scelta 
            dall'utente*/}
        {filteredMovies.map((movie, index) => (
          <li key={index} className="list-group-item">
            {movie.title} - <small>{movie.genre}</small>
          </li>
        ))}
      </ul>

      </div>
    </>
  )
}

export default App
