import React, {useEffect, useState} from "react";
import MovieList from "./MovieList";
import Search from './Search';
import NewMovieForm from "./NewMovieForm";

function Movies() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState(" ");
    useEffect(() => {
        fetch("http://localhost:3000/movies")
        .then(res => res.json())
        .then(movies => setMovies(movies))
    },[]);
    
    function handleAddMovie(addMovie) {
        setMovies([...movies, addMovie]);
    }
    return (
        <div>
            <NewMovieForm onAddMovie={handleAddMovie} />
            <Search setSearch={setSearch} />
            <MovieList movies={movies} setMovies={setMovies} search={search}/>

        
        </div>
    )
}

export default Movies;