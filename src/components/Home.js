import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
function Home() {

    const { platforms } = useOutletContext();
    

  
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
                
                <h2 style={{"textAlign":"center"}}>Welcome to my Movie Review App</h2>
                <ul className="image-background">    
                    <Outlet/>    
                    {streams}
                </ul>
                </>
    )
}

export default Home;
