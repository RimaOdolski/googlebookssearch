import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
        Google Books
        </a>
        <Link to='/Search' style={{textDecoration: 'none'}} className="nav-link">Search</Link>
        <Link to='/Saved' style={{textDecoration: 'none'}} className="nav-link">Saved</Link>
    </nav>
    );
}

export default Nav;