import React, { useState, useEffect} from 'react';

const MyContext = React.createContext()

    const MyProvider = (props) => {
        const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/movies")
        .then(res => res.json())
        .then(data => {
            console.log("movies", data)
            setMovies(data)
    }) 
    },[])
    return (
            <MyContext.Provider value={{
                movies: movies
            }}>
                {props.children}
            </MyContext.Provider>
    )
}

const MyConsumer = MyContext.Consumer
export { MyProvider, MyConsumer }