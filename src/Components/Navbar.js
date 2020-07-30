import React, { Component } from "react";
import "./Style.css";
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className="container">
            <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/details">
                  Link
                </Link>
              </li> */}
            </ul>
          </div>
            </div>
          
        </nav>
      </div>
    );
  }
}
export default Navbar;
