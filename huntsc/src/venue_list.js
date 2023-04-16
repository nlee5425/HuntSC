import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import {Events} from './indivListing.jsx';



function List() {
    const [venues, setVenues] = useState([]);

  useEffect(() => {
    const eventcol = collection(db, "Venue");
    getDocs(eventcol).then(snapshot => {
      const docsArray = snapshot.docs.map(d => {return d.data()})
      console.log(docsArray);
      setVenues(docsArray);
    });
  },[])
  

  return (
    <div>
      <div className = "whole-list">

        <h1 className = "title">Venues</h1>
        <div>
        {venues.map((e, index) => { 
            return <Events key={index} name={e.name} fryft={e.fryft} capacity={e.capacity} contact={e.contact} requirements={e.requirements} security-deposit={e.security-deposit} venue_price={e.venue_price} other={e.other}/>
        })}
        </div>
      </div>

    </div>
  );
}

export default List;
