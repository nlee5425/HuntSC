import logo from './logo.svg';
import NameForm from './Form-Requester';
import './App.css';
import List from './venue_list.js';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<List/>}/>
      </Routes>
    
  );
}

export default App;
