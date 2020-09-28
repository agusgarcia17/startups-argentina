import React from 'react'; 
import { Link } from "react-router-dom";
import Search from './../Search'
import './styles.scss'

function Nav() {
  return (
    <nav className="navContainer">
    <Link to="/" className="btn">Inicio</Link>
    <Search/>
    <Link to="/agregar" className="btn">Agregar Startup</Link>
    </nav>
  );
}

export default Nav;
