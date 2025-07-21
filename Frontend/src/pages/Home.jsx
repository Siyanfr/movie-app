import MovieCard from "../components/MovieCard"
import {useState, useEffect} from 'react';
import {searchMovies, popularMovies} from '../services/api'; 
import '../css/Home.css';

function Home (){
    const [searchquery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {}, [])


    const handleSearch = (e) => {
        e.preventDefault();
        alert({searchquery});
        setSearchQuery("");
    };

    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search for a movies..." 
            className="search-input" 
            value = {searchquery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map((movie) => (
                (
                <MovieCard movie ={movie} key={movie.id}/>
                )
            ))}
        </div>
    </div>
    );
}

export default Home;

