import React from "react";


const Nasacard = props => {


    return(
        <div className="The-One">
            <h1>{props.title}</h1>
            <p>{props.explanation}</p>
            <div><span>Date: {props.date}</span></div>
            <img src= {props.hdurl} alt="Nasa Photo of the Day"/>
            <button><a href = "https://www.nasa.gov/" target="_blank" rel="noopener noreferrer">Read More</a></button>



        </div>
    
             
             )
    


}

export default Nasacard;