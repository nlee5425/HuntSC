import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

function list () {
    const [venues, setVenue] = useState([]);

    useEffect(() => {
        const eventcol = collection(db, "event");
        getDocs(eventcol).then(snapshot => {
          const docsArray = snapshot.docs.map(d => {return d.data()})
          console.log(docsArray);
          setEvents(docsArray);
        });
    },[])
    

}