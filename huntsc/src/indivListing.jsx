import React from "react";
import './indivListing.css';
import './App.css';
import {Link} from "react-router-dom";
import './navbar.css'


function Events(props) {
    // console.log(props.start)
    return (
        <div className = "whole">
            <div className = "navbar">
                <div className = "add-form">
                <Link to="/request_form"  className = "FormButton">Request Venue</Link>

                </div>
                <div className = "list">
                <Link to="/"  className = "FormButton">Venues</Link>

                </div>
            </div>
            <div className = "OneListing">
                
                <div className = "header">
                    <h1>"{ props.name}"</h1>
                    <h3 className = "fryft">Fryft Zone {props.fryft} </h3>
                </div>

                <div className = "VenueInfo"> 
                    <h3>Max Capacity: {props.capacity} </h3>
                    <h3>Contact: {props.contact}</h3>  
                    <h3>Other: {props.other} </h3>
                    <h3>Requirements: {props.requirements} </h3>
                    <h3>Security Deposit: ${props.deposit} </h3>
                    <h3>Price: ${props.venue_price} </h3>
                    
                </div>

                <li className = "button">
                    <Link id="linked" to= "/request_form">Request</Link>
                </li>
            </div>
        </div>
        
    );
}

export default Events;