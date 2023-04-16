import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { Outlet, Link } from "react-router-dom";


function List() {
    const [venues, setVenues] = useState([]);

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
      <div className = "whole-list">

        <h1 className = "title">Events</h1>
        <div>
        {venues.map((e, index) => { 
            return <h1 key={index} title={e.name} start={e.start.toString()} end={e.end.toString()} description={e.description} organization={e.organization} location={e.location}/>
        })}
        </div>
      </div>

    </div>
  );
}

export default List;