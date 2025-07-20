import MovieCard from "../components/MovieCard"
function Home (){
    const movies = [
        {id: 1, title:"Joker", release_date: "2019"},
        {id: 2, title:"Inception", release_date: "2010-07-16"},
        {id: 3, title:"Interstellar", release_date: "2014-11-07"},
    ]

    const handleSearch = () => {

    }

    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for a movies..." className="search-input" />
        </form>
        <div className="movies-grid">
            {movies.map((movie) => (
                <MovieCard movie ={movie} key={movie.id}/>
            ))}
        </div>
    </div>
    );
}

export default Home;

