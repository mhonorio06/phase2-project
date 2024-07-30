import React from "react";
import MovieCard from "./MovieCard";
import ReviewLink from "./ReviewLink";
import { useOutletContext } from "react-router-dom";
function Reviews() {
    
    const { movies, reviews } = useOutletContext();
    
    
    
       const reviewList = reviews.map(review => {
            return (
                <ReviewLink key={review.id} id={review.id} 
                            review={review}/>
                )
            })
       

    const movieList = movies.map(movie => {
        return (
        <MovieCard key={movie.id} 
                   id={movie.id}
                   movie={movie}
                   />
        )
    })
    
    return (
            <> 
                <ul className="movies">
                    {movieList}
                    <hr/>
                    <h2>Movie Reviews</h2>
                <ul className="links">
                    {reviewList}
                    <br></br>
                </ul>
                </ul>
                
            </>
                
    )
}
export default Reviews;