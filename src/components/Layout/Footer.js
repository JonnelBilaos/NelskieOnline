import React, { Component } from 'react'
import fb from './img/fblogo.png'

export default class Footer extends Component {
  render() {

    const navColor = {
        backgroundColor: "black"
    }
    const psmessage = {
        color: "rgb(0, 255, 0)",
        fontSize: "110%",
        paddingLeft:'20px'
    }
    const message = {
        color: "rgb(0, 255, 0)",
        fontSize: "90%",
        paddingLeft:'20px'
    }
    const logos = {
        display: 'flex',
    }
    const fblogo = {
        width: '4%',
        height: '50%'
    }
    const links = {
        color: "rgb(0, 255, 0)"
    }
    


    return (
   <div>   
    <nav className="navbar bg-body-tertiary navbar-dark" style={navColor}>
    <div className="container-fluid"></div>
    <span class="navbar-text"></span>
    <div>
        <p  className="navbar-brand " style={psmessage}>Happy Gaming!</p>
        <p  className="navbar-brand " style={message}>This site is provided by NELSKIE developer</p>
    </div>
    <div>
        <ul style={logos}>
            <img src={fb} style={fblogo}></img>
            <p style={links}>Nelskie</p>
            <ul style={logos}>
            <img src={fb} style={fblogo}></img>
            <p style={links}>Nelskie</p>
        </ul>
        </ul>
    </div>
    </nav>
      </div> 
    )
  }
}
