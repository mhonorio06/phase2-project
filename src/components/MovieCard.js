import React from "react";
import { useNavigate } from "react-router-dom";
function MovieCard({image, id}) {
    const navigate = useNavigate();


  

function handleClick() {
    console.log(`Clicked on movie with id: ${id}`)
    navigate(`/movies/${id}`)
}
   
    return (
        <li className="movie" onClick={handleClick}>
            <img src={image} alt="Movie Poster"/>    
        </li>
    )
}

export default MovieCard;