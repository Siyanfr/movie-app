import MovieCard from "../components/MovieCard"
import {useState} from 'react';
import {searchMovies, popularMovies} from '../services/api'; 
import '../css/Home.css';

function Home (){
    const [searchquery, setSearchQuery] = useState("");
    
    const movies = [
        {id: 1, title:"Joker", release_date: "2019"},
        {id: 2, title:"Inception", release_date: "2010-07-16"},
        {id: 3, title:"Interstellar", release_date: "2014-11-07"},
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`Searching for: ${searchquery}`);
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

