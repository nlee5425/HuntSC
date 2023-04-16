import './App.css';
import List from './venue_list.js';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className = "list">
       <Link to="/"  className = "FormButton">Venues</Link>

    </div>
  );
}

export default App;
