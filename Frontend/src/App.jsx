import './App.css'
import MovieCard from './components/MovieCard'; 

function App() {
  const movieNumber = 2;


  return (
  <>
    {movieNumber ===1 ?(
      <MovieCard movie={{title:"Inception", release_date: "2010-07-16"}} />
    ) : (
      <MovieCard movie={{title:"Interstellar", release_date: "2014-11-07"}} />
    )}
  </>
  );
}

export default App
