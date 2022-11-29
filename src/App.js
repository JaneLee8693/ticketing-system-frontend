import React from 'react';
import './App.css';
import { Login } from './pages/Home/Login';
import { Styles } from './layout/Styles';
import { Route, Router } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { AddTicketForm } from './components/addTickets/AddTicketForm';


function App() {
  return (
    <div className="App">
      {/* <Styles/> */}
      <Router>
        <switch>
          {/* <Route exact path='/'>
            <Login/>
          </Route> */}
          <Route exact path='/'>
            <Dashboard/>
          </Route>
          <Route exact path='/add-ticket'>
            <AddTicketForm/>
          </Route>
          {/* <Route exact path='/ticket/:tId'>
            <Ticket/>
          </Route> */}
          {/* <Route exact path='/ticket-list'>
            <TicketList/>
          </Route> */}
          <Route path='*'>
            <h4>404 Page not found</h4>
          </Route>
        </switch>
      </Router>
    </div>
  );
}

export default App;
