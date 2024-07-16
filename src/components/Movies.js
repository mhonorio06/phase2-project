import React from "react";
import MovieCard from "./MovieCard";
// import Search from './Search';
import { MyConsumer } from './MyContext';

function Movies() {
    // const [genre, setGenre] = useState("");
    // const [platform, setPlatform] = useState("")
    // const [search, setSearch] = useState("")

   return (
        <MyConsumer>
            { context => {
                const movieInfo = context.movies
                //.filter( movie => {
                // if( genre === "") {
                // return true;
                // } 
                // return movie.genre === genre

                // }).filter(movie => { 
                // if(platform === "") {
                // return true;
                // }
                // return movie.platform === platform
                // }).filter(movie => {
                // return search.toLowerCase() === "" ? movie : movie.title.toLowerCase().includes(search)
                // })
                .map(movie => 
                
                <MovieCard key={movie.id} 
                            movie={movie}
                    />   
                )
                          
                return (
                        <div>
                            {/* <Search setSearch={setSearch} setPlatform={setPlatform} setGenre={setGenre}/> */}
                            <ul className="movies">{movieInfo}</ul>
                        </div>

                        )
                    }
                }
        
        </MyConsumer>
        )
    }

export default Movies;