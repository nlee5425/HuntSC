import logo from './logo.svg';
import NameForm from './Form-Requester';
import './App.css';
import List from './venue_list.js';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Venue from './addVenue.js';
import AddVenue from './addVenue';
function App() {
  return (
   
      <Routes>
        <Route path="/" element={<List/>}/>
        <Route path="/form" element = {<AddVenue/>}/>
        <Route path="/request_form" element = {<NameForm/>}/>
      </Routes>
    
  );
}

export default App;
