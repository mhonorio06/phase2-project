import React, { useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";

function MovieDetails() {
    const [ movie, setMovie] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:3000/movies/${id}`)
       .then(res => res.json())
       .then(data => setMovie(data))
    }, [id]);

    function handleClick() {
        navigate("/movies")
    }
    return (
        <div className="movie-details">
            <img src={movie.image} alt={movie.title} onClick={handleClick}/>
            <h2>{movie.title}</h2>
            <h3>{movie.platform}</h3>
            <h3>{movie.genre}</h3>
            <h3>{movie.year}</h3>

            
        </div>
    )
}

export default MovieDetails;