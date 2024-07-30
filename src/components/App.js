import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
function App() {

    const [movies, setMovies] = useState([])
    const [reviews, setReviews] = useState([])

    useEffect(() => {
      fetch("http://localhost:3000/reviews")
      .then(response => response.json())
      .then(data => {
          setReviews(data)
          console.log(data)
      })
  },[])

        useEffect(() => {
        fetch("http://localhost:3000/movies")  
       .then(res => res.json())
       .then(data => {
           setMovies(data)
           console.log(data)
        
            })
       },[])

    function addReview(newReview) {
      setReviews([...reviews, newReview])
    }
    
   
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <Outlet context={{
        movies: movies, 
        reviews: reviews,
        addReview: addReview,
      }}/>
    </div>
  )
  



 




   
  
}

export default App;