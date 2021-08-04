import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
      return (
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="reservations">Reserve a Truck</Link></li>
            <li><Link to="data">See Our Data</Link></li>
          </ul>
        </nav>
      );
    }
}