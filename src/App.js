import React from 'react';
import './App.css';
import { Home } from './pages/home/Home';
import { AddTicketForm } from './components/addTickets/AddTicketForm';
import { EditTicketForm } from './components/editTickets/EditTicketForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<AddTicketForm/>}/>
          <Route path="/edit" element={<EditTicketForm/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
