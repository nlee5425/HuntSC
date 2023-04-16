import { useState, React } from 'react';
//import { db } from './firebase';
//import { collection, addDoc } from "firebase/firestore";
//import { Outlet, Link } from "react-router-dom";
import './App.css';
import './Form-Requester.css';


function NameForm() {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    alert('A form was submitted: ' + name);
    event.preventDefault();

    // addDoc(collection(db, "event"), {
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
    <div className = "whole">
      <div className = "navbar">
     <div className = "add-form">
       {/* <Link to="/form"  className = "FormButton">Form</Link> */}

       </div>
       <div className = "list">
       {/* <Link to="/"  className = "FormButton">Events</Link> */}

       </div>
     </div>

    <div className = "bigForm">


    <form onSubmit={handleSubmit}>
        <h1>Request This Space</h1>
      <label>
        Organization Name:
        <input id = "org" type="text" name="organization"  placeholder = "Tell us about your organization!" onChange={(e) => handleChangeInput(e)}/>
      </label>
      <label>
        Contact Info
        
        <input id = "info" type="text" name="info" placeholder = "(XXX)XXX-XXXX" onChange={(e) => handleChangeInput(e)}/>
      </label>
      <label>
        Date
       
        <input id = "date" type="date" name="date" placeholder = "When is your event? " onChange={(e) => handleChangeInput(e)}/>
      </label>
      <label>
        Description
        <input id = "des" type="text" name="des" palceholder = "Tell us a bit about your evnet!" onChange={(e) => handleChangeInput(e)}/>
      </label>
      
      <button onClick = {handleSubmit}> Submit </button>
     
    </form>

    <div className = "FormButton">
      {/* <Link to="/"  className = "FormButton">View Events</Link> */}
      </div>
    </div>
    </div>
  );
};

export default NameForm;