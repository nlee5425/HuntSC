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
  const handleChangeInput = (event) =>{
    const {id , value} = event.target;
    if(id === "name"){
      setName(value);
    }

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
      <label>
        Name:
        <br />
        <input id = "name" type="text" name="name" onChange={(e) => handleChangeInput(e)}/>
      </label>
      <br />
      <label>
        Organization:
        <br />
        <input id = "org" type="text" name="organization" onChange={(e) => handleChangeInput(e)}/>
      </label>
      <br />
      <label>
        Start time:
        <br />
        <input id = "start" type="text" name="start" onChange={(e) => handleChangeInput(e)}/>
      </label>
      <br />
      <label>
        End time:
        <br />
        <input id = "end"type="text" name="end" onChange={(e) => handleChangeInput(e)}/>
      </label>
      <br />
      <label>
        Location:
        <br />
        <input  id = "loc" type="text" name="location" onChange={(e) => handleChangeInput(e)} />
      </label>
      <br />
      <label>
        Description:
        <br />
        <input id = "des" type="text" name="description" onChange={(e) => handleChangeInput(e)}/>
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>

    <div className = "FormButton">
      {/* <Link to="/"  className = "FormButton">View Events</Link> */}
      </div>
    </div>
    </div>
  );
};

export default NameForm;