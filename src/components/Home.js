import React, { useState, useEffect} from "react";
import NavBar from "./NavBar";
function Home() {
    const [platforms, setPlatforms] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/platforms")
       .then(res => res.json())
       .then(data => {
           setPlatforms(data)
       })
       },[])

  
    const streams = platforms.map( p => {
    return (
        <ul className="platforms" key={p.id}>
            <h6>{p.name}</h6>
            <img src={p.image} alt={p.name} />
        </ul>
        )
    })
    return (      
                <>
                <header>
                    <NavBar/>
                </header>
                <h2 style={{"text-align":"center"}}>Welcome to my Movie Review App</h2>
                <ul className="image-background">        
                    {streams}
                </ul>
                </>
    )
}

export default Home;
