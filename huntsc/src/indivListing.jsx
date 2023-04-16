import React from "react";
import './App.css';

function Events(props) {
    console.log(props.start)
    return (
        <div className = "OneEvent">
            <h1 className="font-montserrat">{props.title} </h1>
            <h3>Time: {props.start}  - {props.end}</h3>
            <h3>Location: {props.location} </h3>
            <h3>Description: {props.description} </h3>
            <h3>Oranizaion: {props.organization} </h3>
        </div>

    
    );
}




export default Events;