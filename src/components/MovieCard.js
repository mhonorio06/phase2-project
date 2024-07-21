import React from "react";
import { useNavigate } from "react-router-dom";
function MovieCard({ movie, id }) {
    const navigate = useNavigate()

    function handleClick(){
        navigate(`/reviews/new/${id}`)
    }
    return (
        <div className="movie">
            <ul>
            <img src={movie.image} onClick={handleClick} alt={movie.film}
            />
            </ul>
            
        </div>
    )
}

export default MovieCard;