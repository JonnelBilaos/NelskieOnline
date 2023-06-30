import React from 'react'
import { Link, useNavigate} from 'react-router-dom';
import {useRef, useState, useEffect} from 'react';


export default function Navbar() {
    


    const navColor = {
        backgroundColor: "rgb(0, 255, 0)",
    }
     const navTxtColor = {
        color: "black",
        fontWeight: "bold",
    }
    const navTitle = {
        color: "black",
        fontSize: "200%",
        align: "center",
        fontFamily: "Vina Sans"
    }

    

  return (
    
    <div className='fix'>
        <nav className="navbar navbar-expand-lg navbar-dark" style={navColor}>
        <div className="container-fluid">
        <p className="navbar-brand " style={navTitle}>
            Nelskie Game Generator
        </p>
        <button className="navbar-toggler" type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNavDropdown" 
            aria-controls="navbarNavDropdown" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
      <span className="navbar-toggler-icon"></span>
      
    </button>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    <div>
        <Link type="submit" className="btn btn-outline-dark " to= "/login" style={navTxtColor}>
            Log In
        </Link>
    </div>
    <div>
        <Link className="btn btn-outline-dark " to="/signup" style={navTxtColor}>
            Sign Up
         </Link>
    </div>
    
    
  </div>
</nav>
    </div>
  )
}
