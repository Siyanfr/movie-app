import {createContext, useState, useContext, useEffect} from 'react';


const MovieContext = createContext();

export const useMovieContext = () => useContext()

export const MovieProvider = ({children}) =>{
    const [favorites, setFavorites] = useState([]);
    
    useEffect(() => {
        const storedFavs = localStorage.getItem('favorites')  
    }, []);
    
    return <MovieContext.Provider>
        {children}
    </MovieContext.Provider>
}

