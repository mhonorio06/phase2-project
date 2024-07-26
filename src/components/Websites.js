import React from 'react';

function Websites({ movie}) {

    const { platform: {name, image }} = movie
    return (
        <ul className="platforms">
            <img src={image} alt={name}/>
        </ul>

    )
}

export default Websites;