import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid col-md-4" style={{display:"flex", margin:"auto", justifyContent:"center"}}>
          <Link className="navbar-brand" to="">
            LuxuryLimousine
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
         
        </div>
        <div className="collapse navbar-collapse col-md-8" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="aboutus">
                  About us
                </Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" to="booknow">
                  Book Now
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="vehicle">
                 Vehicle
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="services">
                 Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contactus">
                 Contact Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="booking">
                      Booking
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="admin">
                      Admin Panel
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Back to Home
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
       
          </div>
      </nav>
    </>
  );
}

export default Navbar;
