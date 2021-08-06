import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Reservations from './pages/Reservations';
import Data from './pages/Data'
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <div id="container">
            <Switch>
              <Route exact path="/reservations/" component={Reservations} />
              <Route exact path="/data/" component={Data} />
              <Route component={Reservations} />
            </Switch>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

