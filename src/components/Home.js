import React, {useEffect, useState} from "react";

function Home() {
    const [platform, setPlatform] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/platforms")
        .then(res => res.json())
        .then(service => setPlatform(service))
    }, []);
    console.log(platform)
    const streams = platform.map( p => {
        return (
        <ul className="platforms" key={p.id}>
            <h6>{p.name}</h6>
            <img src={p.image} alt={p.name} />
        </ul>
        )
    })
    return (
            <div>
                <ul className="images">{streams}</ul>
            </div>
    )
}

export default Home;
