import React, {useState, useEffect } from 'react';
import { useParams, useNavigate } from'react-router-dom';

function ReviewPage() {

    const [review, setReview] = useState({
        title: "",
        comment: "",
        film: "",
        genre: "",
        image: "",
    })
       const navigate = useNavigate()
       const { id } = useParams();

    useEffect(() => {
        
        fetch(`http://localhost:3000/reviews/${id}`)
        .then(res => res.json())
        .then(data => {
            setReview(data)
            console.log(data)
         })
    },[id])
            
    return (
        <div className="review-story">
            <img src={review.image} className="movie-image" onClick={() => navigate("/reviews")}alt={review.film} />
            <h5>{review.film}</h5>
            <h5>{review.genre}</h5>
            <h5>{review.year}</h5>
            <hr/>
            <main>
             <h1>{review.title}</h1>
            <br/>
            <p id="comment-box">{review.comment}</p>   
            </main>
            
            
        </div>
    )
}

export default ReviewPage;