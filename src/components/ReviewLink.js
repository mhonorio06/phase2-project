import React from 'react';
import { Link } from "react-router-dom";


function ReviewLink({ review, id }) {
    
    return (
        <Link to={`/reviews/${id}`}>  
            {review.title}
            <br/>
        </Link>
    )
}

export default ReviewLink;