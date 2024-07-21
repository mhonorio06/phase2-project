import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import NavBar from "./NavBar";
import ReviewLink from "./ReviewLink";

function Reviews() {
    const [movies, setMovies] = useState([])
    const [reviews, setReviews] = useState([])

        useEffect(() => {
        fetch("http://localhost:3000/movies")
       .then(res => res.json())
       .then(data => {
           setMovies(data)
            })
       },[])
       
       useEffect(() => {
        fetch("http://localhost:3000/reviews")
       .then(res => res.json())
       .then(data => {
           setReviews(data)
            })
       },[])
       
       const reviewList = reviews.map(review => {
            return (
                <ReviewLink key={review.id} id={review.id} review={review}/>
                )
            })
       

    const movieList = movies.map(movie => {
        return (
        <MovieCard key={movie.id} 
                   id={movie.id}
                   movie={movie} />
        )
    })
    return (
            <div> 
                <header>
                    {<NavBar/>}
                </header>
                <ul className="movies">
                    {movieList}
                    <hr/>
                    <h2>Movie Reviews</h2>
                <ul className="links">
                    {reviewList}
                    <br></br>
                </ul>
                </ul>
                
            </div>
                
    )
}
export default Reviews;