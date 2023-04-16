import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';
import { Link } from "react-router-dom";
import './navbar.css';
import './venue_list.css';
import { auth } from './firebase';
import Requestindiv from './requestlisting';





function Request({user}) {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const requestsCol = collection(db, "Requests");
    const q = query(requestsCol, where("email", "==" , user.email));
    getDocs(requestsCol).then(snapshot => {
      const docsArray = snapshot.docs.map(d => { return d.data() })
      console.log(docsArray);
      setRequests(docsArray);
    });
  }, [])


  return (
    <div className="whole">
      <div className="navbar">
        { <div className = "user-message">
          <small> Heyyyy, {user.displayName} </small> 
        </div> }
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
        <div classNmae = "add-form">
          <Link to = "/request_listing" className = "FormButton">View Requests</Link>
        </div>
      </div>
      <div className = "title-message">
        <p className = "title">Your Requests</p>
      </div>
      <div className = "whole-list">
        <div>
        {requests.map((e, index) => { 
            return <Requestindiv key={index} date={e.date} description={e.description} info={e.info} organization = {e.organization}/>
        })}
        </div>
      </div>
    </div>
  );
}

export default Request;
