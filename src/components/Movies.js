import React, {useEffect, useState} from "react";
import MovieCard from "./MovieCard";
import Search from './Search';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [genre, setGenre] = useState("");
    const [platform, setPlatform] = useState("")
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/movies")
        .then(res => res.json())
        .then(movies => setMovies(movies))
    },[]);
    
    
    const movieInfo = movies.filter( movie => {
        if( genre === "") {
            return true;
        } 
        return movie.genre === genre
    
    }).filter(movie => { 
        if(platform === "") {
            return true;
        }
        return movie.platform === platform
    })
    .filter(movie => {
        return search.toLowerCase() === "" ? movie : movie.title.toLowerCase().includes(search)
     })
    .map(movie => {
        return (
            <MovieCard key={movie.id} 
                       id={movie.id}
                       image={movie.image}
                        />   
        )
    })

    return (
        <div>
            <Search setSearch={setSearch} setPlatform={setPlatform} setGenre={setGenre}/>
            <ul className="movies">{movieInfo}</ul>
            

        
        </div>
    )
}

export default Movies;