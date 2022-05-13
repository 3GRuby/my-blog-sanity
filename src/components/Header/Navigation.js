import React, { Fragment } from "react";
import "../Header/Navbar.css";

function Navigation() {
  return (
    <Fragment>
      <nav className="NavBar">
        <h3 className="NavBar__Logo">Kisi</h3>
        <ol className="NavBar__Items">
          <li className="NavBar__Item">Home</li>
          <li className="NavBar__Item">About</li>
          <li className="NavBar__Item">Contact</li>
        </ol>
      </nav>
    </Fragment>
  );
}

export default Navigation;
