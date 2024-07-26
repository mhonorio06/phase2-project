import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from'react-router-dom';
function ReviewPage() {

        
        const { id } = useParams();
        const navigate = useNavigate();
        const [review, setReview] = useState({
            title: "",
            comment: "",
            image: "",
            film: "",
            genre: "",
            year: ""
        })
        
        useEffect(() => {
        
            fetch(`http://localhost:3000/reviews/${id}`)
            .then(res => res.json())
            .then(data => {
                setReview(data);
                console.log(data)
             })
        },[id]);
       
        function handleClick(){
            navigate("/")
        }
  
            
    return (
        <div className="review-story">
            <img src={review.image} alt={review.film} 
            onClick={handleClick}/>
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