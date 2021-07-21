import React from "react";

function About(props = 'https://via.placeholder.com/215'){
    return(
        <aside>
            <img src = {props.image} alt = "blog logo"></img>
            <p>{props.about}</p>
        </aside>
    )
}

export default About; 