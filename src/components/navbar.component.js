import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">RM-PhoneBook</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Contact List</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Add Contact Details</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Add New Conatct</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}