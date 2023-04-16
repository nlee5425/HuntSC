import { useState, React } from 'react';
import { Link } from 'react-router-dom';
import { db, auth } from './firebase';
import { collection, addDoc } from "firebase/firestore";
// import { Outlet, Link } from "react-router-dom";
import './App.css';
import './addVenue.css';

function AddVenue() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [capacity, setCapacity] = useState("");
  const [deposit, setDeposit] = useState("");
  const [fryft, setFryft] = useState("");
  const [other, setOther] = useState("");
  const [requirements, setRequirements] = useState("");
  const [venue_price, setVenue_Price] = useState("");

  function handleSubmit(event) {
    alert('A form was submitted: ' + name);
    event.preventDefault();

    addDoc(collection(db, "Venue"), {
      name: name,
      contact: contact,
      capacity: capacity,
      deposit: deposit,
      fryft: fryft,
      other: other,
      requirements: requirements,
      venue_price: venue_price
    }).then(console.log(name + contact + capacity + deposit + fryft + other + requirements + venue_price));
  }
  //here I will call the from.js file 
  const handleChangeInput = (event) =>{
    const {id , value} = event.target;
    
    if(id === "org"){
      setName(value);
    }

    if(id === "contact"){
      setContact(value);
    }

    if(id === "capacity"){
      setCapacity(value);
    }

    if(id === "deposit"){
      setDeposit(value);
    }

    if(id === "fryft"){
      setFryft(value);
    }

    if(id === "requirements"){
      setRequirements(value);
    }

    if(id === "other"){
      setOther(value);
    }

    if(id === "venue_price"){
      setVenue_Price(value);
    }
  }


  return (

    // Jadrian: This is the navigation bar 
    <div className="whole">
      <div className="navbar">
        <div className="add-form">
          <Link to="/form" className="FormButton">Add Venue</Link>

        </div>

        <div className="list">
          <Link to="/" className="FormButton">Venues</Link>

        </div>
        <div className="add-form">
          <Link id="signout" className="FormButton" to="/"
            onClick={() => auth.signOut()}>Sign Out
          </Link>
        </div>
      </div>

      <div className="bigForm">
        <form onSubmit={handleSubmit}>
          <h1>Add a Venue</h1>
          <label>
            Organization Name:
            {/* <input id = "org" type="text" name="organization"  placeholder = "Tell us about your blablabla!" onChange={(e) => handleChangeInput(e)}/> */}
            <input id="org" type="text" name="organization" placeholder="Tell us about your blablabla!" />
          </label>

          <label>
            Contact Info
            {/* <input id = "info" type="text" name="info" placeholder = "(XXX)XXX-XXXX" onChange={(e) => handleChangeInput(e)}/> */}
            <input id="info" type="text" name="info" placeholder="(XXX)XXX-XXXX" />
          </label>

          <label className='fryft2'>
            <div id="question">Within Fryft?</div>
            <div id="fryft3">
              <input id="fryft" type="checkbox" name="checkbox" value=""></input>
            </div>
          </label>
          <label>
            Venue Price
            <input id="price" type="number" min="0" step="any" />
          </label>
          <label>
            Venue Capacity
            <input id="cap" type="text" name="vanue_cap" placeholder="What is your venue's capacity?" />
          </label>

          <label>
            Venue Requirements
            <input id="req" type="text" name="des" placeholder="Requirements for your venue" onChange={(e) => handleChangeInput(e)} />
          </label>
          <label>
            Other Info
            <input id="other" type="text" name="des" placeholder="Tell us a bit about your event!" onChange={(e) => handleChangeInput(e)} />
          </label>

          <button onClick={handleSubmit}> Submit </button>

          {/* TODO: onsubmit */}

        </form>

        <div className="FormButton">
          {/* <Link to="/"  className = "FormButton">View Events</Link> */}
        </div>
      </div>
    </div>
  );
};

export default AddVenue;