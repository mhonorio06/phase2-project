import React, { useState } from "react";

function NewMovieForm({ onAddMovie, props}) {
    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [platform, setPlatform] = useState("")
    const [genre, setGenre] = useState("")
    const [year, setYear] = useState("")

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
        .then(data => onAddMovie(data));
        props.history.push("/home")
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

        </div>
    )
}

export default NewMovieForm;