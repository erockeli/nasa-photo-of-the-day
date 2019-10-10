import React,{useState, useEffect} from "react";
// import Nasacard from './Nasacard';
import axios from "axios";


export default function Nasa() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        axios
        .get (`https://api.nasa.gov/planetary/apod?api_key=QkjfD2TS655eJeJUlQvdAtHmcu4in02rAJTNrZCo`)
        .then(response => {
            console.log(response);
            setItem(response.data);  
        })
        .catch(error => {
            console.log('No data received', error);
        })
    },[]);

    return (
        
            
                 <div>
                 <h1>{item.title}</h1>
                 <p> {item.explanation}</p>
                 <img  src={item.hdurl} alt="Nasa"/> 
                 <p> {item.date}</p>
                 </div> 
                 )
       
    
}
