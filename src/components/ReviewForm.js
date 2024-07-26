import React, { useEffect, useState } from "react";
import ReviewDetails from "./ReviewDetails";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
function ReviewForm() {

    const { AddReview } = useOutletContext();
    const [reviewData, setReviewData] = useState({
        title: "",
        comment: "",
    })
    const [movie, setMovie] = useState([])
    const navigate = useNavigate();
    const { id } = useParams(); 
    
    useEffect(() => {
            fetch(`http://localhost:3000/movies/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovie(data)
                
            })
        },[id])

    function handleSubmit(e) {
        e.preventDefault()
        const newReview = {
            title: reviewData.title,
            comment: reviewData.comment,
            image: movie.image,
            film: movie.film,
            genre: movie.genre,
            year: movie.year,
        }

       
        
        fetch("http://localhost:3000/reviews", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",

            },
            body: JSON.stringify(newReview)
        })
        .then( res => res.json())
        .then(data => {
            console.log(data)
            AddReview(data);
            navigate('/reviews')
        })
    }

    function handleChange(e) {
        setReviewData({
            ...reviewData, [e.target.name]: e.target.value
        }) 
    }
   
    return (
        <div className="new-movie-form">
            
            <ReviewDetails movie={movie} />

            <h2>New Movie Review</h2>
            <form onSubmit={handleSubmit}>
                <label>Title :</label>
                <input type="text" id="form-title" name="title"
                value={reviewData.title}
                placeholder="title of review..."
                onChange={handleChange}
                />
                <label>Comment :</label>
                <textarea type="text" id="form-comment" name="comment"
                value={reviewData.comment}
                placeholder="review comments..." 
                onChange={handleChange}
                
                />
                <br></br>
                <button id="submit-button" type="submit">Add Review</button>
                
                
            </form>
           
            
        </div>
    )
    }

export default ReviewForm;