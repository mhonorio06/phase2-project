import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
function App() {

    const [movies, setMovies] = useState([])
    const [reviews, setReviews] = useState([])
    const [platforms, setPlatforms] = useState([])
    const [movie, setMovie] = useState([])
    const [review, setReview] = useState([])
    const [title, setTitle] = useState("")
    const [comment, setComment] = useState("")
    

    useEffect(() => {
        fetch("http://localhost:3000/platforms")
       .then(res => res.json())
       .then(data => {
           setPlatforms(data)
       })
       },[])

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

  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <Outlet context={{
        movies: movies, 
        platforms: platforms, 
        reviews:reviews,
        movie: movie,
        review: review,
        title: title,
        comment: comment,
        setTitle: setTitle,
        setComment: setComment,
        setReview: setReview,
        setMovie: setMovie
        }}/>
    </div>
  )
  



 




   
  
}

export default App;