import { useState, React } from 'react';
import { Link } from 'react-router-dom';
import { db } from './firebase';
import { collection, addDoc } from "firebase/firestore";
// import { Outlet, Link } from "react-router-dom";
import './App.css';
import './addVenue.css';


function AddVenue() {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    alert('A form was submitted: ' + name);
    event.preventDefault();

    // addDoc(collection(db, "venue"), {
    //   name: name,
    //   organization: organization,
    //   start: start,
    //   end: end,
    //   location: location,
    //   description: description
    // }).then(console.log(name + organization + start + end + location+ description));
  }
  //here I will call the from.js file 
  const handleChangeInput = (event) =>{
    const {id , value} = event.target;

    if(id === "org"){
      setOrganization(value);
    }

    if(id === "start"){
      setStart(value);
    }

    if(id === "end"){
      setEnd(value);
    }

    if(id === "loc"){
      setLocation(value);
    }

    if(id === "des"){
      setDescription(value);
    }

  }

  return (

    // Jadrian: This is the navigation bar 
    <div className = "whole">
      <div className = "navbar">
     <div className = "add-form">
       <Link to="/form"  className = "FormButton">Add Venue</Link>

       </div>
       <div className = "list">
       <Link to="/"  className = "FormButton">Venues</Link>

       </div>
       <div className = "button">
          {/* <button onClick={() => auth.signOut()}>Sign Out</button> */}
          <button>Sign Out</button>

        </div>
     </div>

    <div className = "bigForm">


    <form onSubmit={handleSubmit}>
      <h1>Add a Venue</h1>
      <label>
        Organization Name:
        {/* <input id = "org" type="text" name="organization"  placeholder = "Tell us about your blablabla!" onChange={(e) => handleChangeInput(e)}/> */}
        <input id = "org" type="text" name="organization"  placeholder = "Tell us about your blablabla!"/>
      </label>

      <label>
        Contact Info
        {/* <input id = "info" type="text" name="info" placeholder = "(XXX)XXX-XXXX" onChange={(e) => handleChangeInput(e)}/> */}
        <input id = "info" type="text" name="info" placeholder = "(XXX)XXX-XXXX"/>
      </label>
    
    <label className='fryft2'>
        <div id="question">Within Fryft?</div>
        <div id="fryft3">
          <input id= "fryft" type="checkbox" name="checkbox" value=""></input>
        </div>
    </label>
    <label>
        Venue Price
        <input id= "price" type="number" min="0" step="any" />
    </label>
    <label>
        Venue Capacity
        <input id = "cap" type="text" name="vanue_cap"  placeholder = "What is your venue's capacity?" />
    </label>

    <label>
        Venue Requirements
        <input id = "req" type="text" name="des" placeholder = "Requirements for your venue" onChange={(e) => handleChangeInput(e)}/>
      </label>
      <label>
        Other Info
        <input id = "other" type="text" name="des" placeholder = "Tell us a bit about your event!" onChange={(e) => handleChangeInput(e)}/>
      </label>
      
    <button onClick = {handleSubmit}> Submit </button>

      {/* TODO: onsubmit */}
     
    </form>

    <div className = "FormButton">
      {/* <Link to="/"  className = "FormButton">View Events</Link> */}
      </div>
    </div>
    </div>
  );
};

export default AddVenue;