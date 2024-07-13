import React, { useState } from 'react';

function Search({ search, setPlatform, setGenre, setSearch}) {


   
    function handleGenre(event) {
        setGenre(event.target.value)
    
    }
    function handlePlatform(event) {
        setPlatform(event.target.value)
    }
    function handleSearch(e) {
        setSearch(e.target.value);
        console.log(search)
    }
   
    return (
    <div>
        <div>
            <label htmlFor='search'>Search By Title</label>
            <input type="text"
            id="search-title"
            placeholder='search title here...'
            value={search}
            onChange = {(e) => handleSearch(e)}
            />
        </div>
        
            <select name="filter" onChange={handleGenre}>
                
                <option value="All">Filter By Genre</option>
                <option value="Comedy">Comedy</option>
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Horror">Horror</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Sci-Fi">Sci-Fi</option>
            </select>
            
            
       
            
            <select name="filter-platform" onChange={handlePlatform}>
                <option value="All">Filter By Platform</option>
                <option value="Netflix">Netflix</option>
                <option value="HBO-Max">HBO-Max</option>
                <option value="Paramount+">Paramount+</option>
                <option value="Disney+">Disney+</option>
            </select>
            
    </div>
    )
}

export default Search;