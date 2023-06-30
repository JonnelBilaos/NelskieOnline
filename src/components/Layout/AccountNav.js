import React from 'react'

export default function AccountNav() {
    const navColor = {
        backgroundColor: "rgb(0, 255, 0)",
    }
     const navTxtColor = {
        color: "black",
        fontWeight: "bold",
        fontSize: '150%'
    }
    const navTitle = {
        color: "black",
        fontSize: "250%",
        align: "center",
        fontFamily: "Vina Sans"
    }

  return (
    
    <div className='fix fixed-top'>
        <nav className="navbar navbar-expand-lg navbar-dark" style={navColor}>
        <div className="container-fluid">
        <p className="navbar-brand " style={navTitle}>
            Welcome Name
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
        <button className="btn btn-outline-dark " style={navTxtColor}>Cart</button>
    </div>
    <div>
        <button className="btn btn-outline-dark " style={navTxtColor}>Games</button>
    </div>
  </div>
</nav>
    </div>
  )
}
