import React from 'react';
import './App.css';
import { Home } from './pages/home/Home';

// import { Styles } from './layout/Styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Dashboard } from './pages/Dashboard/Dashboard';
// import { AddTicketForm } from './components/addTickets/AddTicketForm';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
