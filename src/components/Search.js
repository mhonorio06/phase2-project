import React from 'react';

function Search({ search, setSearch}) {

    function handleSearchChange(e) {
        setSearch(e.target.value);
        console.log(setSearch)
    }
    return (
        <div className="searchBar">
            <label htmlFor='search'>Search Database</label>
            <input type="text"
            id="search"
            placeholder='search here...'
            value={search}
            onChange = {(e) => handleSearchChange(e)}
            />
        </div>
    )
}

export default Search;