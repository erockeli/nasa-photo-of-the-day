import React from "react";
import styled from 'styled-components';


const NasaCardContainer = styled.div`
   max-width: 100%;
   background: #b5e9e7;
   margin: 0 auto;
`;

const Pic = styled.img`

height: 500px;
width:500px;
`;

const Par = styled.p
`
color:red;
font-size: 30px;



`;


const Nasacard = props => {


    return(
        <NasaCardContainer className="The-One">
            <h1>{props.title}</h1>
            <Par>{props.explanation}</Par>
            <div><span>Date: {props.date}</span></div>
            <Pic src= {props.hdurl} alt="Nasa Photo of the Day"/>
            <button><a href = "https://www.nasa.gov/" target="_blank" rel="noopener noreferrer">Read More</a></button>

        </NasaCardContainer>
    
             
             )
    


}

export default Nasacard;