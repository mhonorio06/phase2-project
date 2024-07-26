import React from "react";
import { useOutletContext } from "react-router-dom";
import Websites from "./Websites";
function Home() {

    const { movies } = useOutletContext();
    

  
    const streams = movies.map( movie => {
    return (
        <Websites key={movie.id}
                  movie={movie}
                  />
                )
            })            

    
    return (      
                <>
                
                <h2 style={{"textAlign":"center"}}>Welcome to my Movie Review App</h2>
                <ul className="image-background">    
                    {streams}
                </ul>
                </>
    )
}

export default Home;
