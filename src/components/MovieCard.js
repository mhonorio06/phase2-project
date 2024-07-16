import React from "react";
import { useNavigate } from "react-router-dom";
function MovieCard({image, id}) {


    const navigate = useNavigate();

function handleClick() {
    navigate(`/movies/${id}`)    
}

    return (
        <>
            <li className="movie" >
                <img src={image} onClick={handleClick} alt="Movie Poster" />
            </li>
            
            
        </>
    )
}

export default MovieCard;