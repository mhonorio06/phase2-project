import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function AddMovie() {
    const [movies, setMovies] = useState([]);
    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [platform, setPlatform] = useState("")
    const [genre, setGenre] = useState("")
    const [year, setYear] = useState("")

    const navigate = useNavigate()
    function handleMovie(addMovie) {
        setMovies([...movies, addMovie]);
    }

    function handleSubmit(e) {
        e.preventDefault()
        
        const movieInfo = {
            image,
            title,
            platform,
            genre,
            year
        }
        console.log(movieInfo)
        fetch("http://localhost:3000/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(movieInfo),
        })
        .then(res => res.json())
        .then(data => handleMovie(data));
        navigate("/movies")
        console.log(movieInfo)
    }

    function handleTitleChange(e) {
        setTitle(e.target.value)
    }
    function handleImageChange(e) {
        setImage(e.target.value)
    }
    function handlePlatformChange(e) {
        setPlatform(e.target.value)
    }
    function handleGenreChange(e) {
        setGenre(e.target.value)
    }
    function handleYearChange(e) {
        setYear(e.target.value)
    }
    return (
        <div className="new-movie-form">
            <h2>New Movie</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="movie title" value={title} onChange={handleTitleChange} />
                <input type="text" name="image" placeholder="image URL" value={image} onChange={handleImageChange}/>
                <input type="text" name="platform" placeholder="platform" value={platform} onChange={handlePlatformChange}/>
                <input type="text" name="genre" placeholder="genre" value={genre} onChange={handleGenreChange}/>
                <input type="text" name="year" placeholder="year" value={year} onChange={handleYearChange}/>
                <button type="submit">Add Movie</button>
                
            </form>
            <main className="movie-logo">
                <img src="https://th.bing.com/th/id/OIP.FYTnh5Bov-TYfEGZLKSXiQHaFG?w=209&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" alt="logo"/>
            </main>

        </div>
    )
}

export default AddMovie;