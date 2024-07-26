import React from "react";
import { useNavigate  } from "react-router-dom";

function ReviewDetails({movie}) {
    const navigate = useNavigate();
    const {image, film, genre, year } = movie;
    
    function handleClick(){
        navigate("/reviews")
    }
    return (
        <div className="movie-details">
            <img src={image} id="movie-img"
            alt={film} onClick={handleClick}/>
            <h5>{film}</h5>
            <h5>{genre}</h5>
            <h5>{year}</h5>
            <hr></hr>
        </div>
    )
}

export default ReviewDetails;