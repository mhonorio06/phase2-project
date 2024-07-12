import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const [ movie, setMovie] = useState([])
    const { id } = useParams()
    console.log({id})

    useEffect(() => {
        fetch(`http://localhost:3000/movies/${id}`)
       .then(res => res.json())
       .then(data => setMovie(data))
    }, [id]);
    return (
        <div className="movie-details">
            <img src={movie.image} alt={movie.title} />
            <h2>{movie.title}</h2>
            <h3>{movie.platform}</h3>
            <h3>{movie.genre}</h3>
            <h3>{movie.year}</h3>

            
        </div>
    )
}

export default MovieDetails;