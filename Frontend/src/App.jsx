import './App.css'
import MovieCard from './components/MovieCard'; 

function App() {
  return (
  <>
    <MovieCard movie={{title:"Inception", release_date: "2010-07-16"}} />
  </>
  );
}

export default App
