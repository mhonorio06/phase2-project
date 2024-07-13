import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function Home() {
    const [platform, setPlatform] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/platforms")
        .then(res => res.json())
        .then(service => setPlatform(service))
    }, []);
    const streams = platform.map( p => {
        return (
        <ul className="platforms" key={p.id}>
            <h6>{p.name}</h6>
            <img src={p.image} alt={p.name} />
        </ul>
        )
    })
    return (
            <div className="logo">
                <hr/>
                <Link to={"/movies/new"}>
                <button>click the button to add a new movie!</button>
                </Link>
                

                
                <>
                    <ul className="images">{streams}</ul>
                </>
            </div>
    )
}

export default Home;
