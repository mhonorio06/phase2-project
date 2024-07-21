import React, { useEffect } from "react";
import ReviewDetails from "./ReviewDetails";
import { useNavigate, useParams, Outlet, useOutletContext } from "react-router-dom";
function ReviewForm() {

    const { 
        title,
        comment,
        movie,
        setMovie,
        setReview,
        setTitle,
        setComment        
    } = useOutletContext();

    const navigate = useNavigate();
    const { id } = useParams(); 
    
    useEffect(() => {
            fetch(`http://localhost:3000/movies/${id}`)
            .then(res => res.json())
            .then(data => {
                setMovie(data);
                console.log(data)
            })
        },[id])

    function handleSubmit(e) {
        e.preventDefault()
        const newReview = {
            title: title,
            comment: comment,
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
            setReview(data);
            console.log(data)
            setTitle("")
            setComment("")
            navigate('/')
        })
        
    }
    
    
   function handleTitle(e) {
    setTitle(e.target.value);
   }
   function handleComment(e) {
    setComment(e.target.value);
   }
   
    return (
        <div className="new-movie-form">
            <Outlet/>
            <ReviewDetails movie={movie} />

            <h2>New Movie Review</h2>
            <form onSubmit={handleSubmit}>
                <label>Title :</label>
                <input type="text" name="title" value={title} id="form-title" 
                placeholder="title of review..."
                onChange={handleTitle} 
                />
                <label>Comment :</label>
                <textarea type="text" value={comment} 
                id="form-comment" name="comment" 
                placeholder="review comments..." 
                onChange={handleComment}
                />
                <br></br>
                <button id="submit-button" type="submit">Add Review</button>
                
                
            </form>
           
            
        </div>
    )
    }

export default ReviewForm;