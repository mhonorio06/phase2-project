import React from "react";
import MovieItem from "./MovieItem";
function MovieList({movies, setMovies, search}) {

    
    const filteredMovies = movies.filter(movie => {
            return search.toLowerCase() === "" ? movie : movie.title.toLowerCase().includes(search)
            })
    .map(movie => {
        return (
            <MovieItem key={movie.id} 
                       movie={movie}
                       onUpdate={handleMovieUpdate}
                       />
        )
    })
    function handleMovieUpdate(updateMovie) {
        const updatedMovie = movies.map(movie => {
        if(movie.id === updateMovie.id) {
            return updateMovie;
        } else {
        return movie;
            }
        });
    
    setMovies(updatedMovie) 
    console.log(updatedMovie)
    }
    return (
        <ul className="movies">{filteredMovies}</ul>
    )
}

export default MovieList;