import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import Event from './Event.jsx';
import { Outlet, Link } from "react-router-dom";
import './form.css';


function List() {
    const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventcol = collection(db, "event");
    getDocs(eventcol).then(snapshot => {
      const docsArray = snapshot.docs.map(d => {return d.data()})
      console.log(docsArray);
      setEvents(docsArray);
    });
  },[])
  

  return (
    <div>
        <div className = "navbar">
     <div className = "add-form">
       <Link to="/form"  className = "FormButton">Form</Link>

       </div>
       <div className = "list">
       <Link to="/"  className = "FormButton">Events</Link>

       </div>
     </div>
      <div className = "whole-list">

        <h1 className = "title">Events</h1>
        <div>
        {events.map((e, index) => { 
            return <Event key={index} title={e.name} start={e.start.toString()} end={e.end.toString()} description={e.description} organization={e.organization} location={e.location}/>
        })}
        </div>

        {/* <NavLink to='/form' activeStyle>
            Sign Up
        </NavLink> */}
      <div className = "FormButton">
      <Link to="/form"  className = "FormButton">Add An Event</Link>
      </div>
      </div>

    </div>
  );
}

export default List;