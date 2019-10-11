import React,{useState, useEffect} from "react";
import Nasacard from './Nasacard';
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
        <div className="The-One">
            <div className="Sun">

            <Nasacard
            title={item.title}
            explanation={item.explanation}
            date={item.date}
            hdurl={item.hdurl}
            />

            </div>

        </div>
                 )
      
}
