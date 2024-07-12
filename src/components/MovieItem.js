import React, {useState} from "react";

function MovieItem({movie}) {
    
    const [showingInfo, setShowingInfo] = useState(false)
    function handleInfoToggle() {
        setShowingInfo(!showingInfo)
    }

    
    return (
        <li className="movie" onClick={handleInfoToggle}>
            <img src={movie.image} alt={movie.title}/>
            {showingInfo ? (
                <div className="details">
                    <h5>{movie.platform}</h5>
                    <h5>{movie.genre}</h5>
                    <h5>{movie.year}</h5>
                </div> ) : null } 
        </li>
            
        
    )
}

export default MovieItem;