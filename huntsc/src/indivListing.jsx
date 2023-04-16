import React from "react";
import './indivListing.css';
import './App.css';


function Events(props) {
    // console.log(props.start)
    return (
        <div className = "OneListing">
            <div className = "header">
                <h1>Venue Name: {props.name}</h1>
                <h3>Fryft: {props.fryft} </h3>
            </div>

            <div className = "VenueInfo"> 
                <h3 className="right">Contact: {props.contact}</h3>  
                <h3 className="right">Other: {props.other} </h3>
                <h3 className="right">Requirements: {props.requirements} </h3>
                <h3 className="right">Security Deposit: {props.security-deposit} </h3>
                <h3 className="right">Price: {props.venue_price} </h3>
                <h3 className="right">Capacity: {props.capacity} </h3>
            </div>

            <li className = "button">
                <Link to= "/Form-Requester">Request</Link>
            </li>
        </div>
    );
}

export default Events;