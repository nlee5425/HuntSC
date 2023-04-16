import logo from './logo.svg';
import NameForm from './Form-Requester';
import './App.css';
import List from './venue_list.js';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Venue from './addVenue.js';
import AddVenue from './addVenue';
function App() {
  return (
      <AddVenue/>
      // <Routes>
      //   {/* <Route path="/" element={<List/>}/> */}
      //   {/* <Route path="/vend" element = {<Venue/>}/> */}
      // </Routes>
    
  );
}

export default App;
