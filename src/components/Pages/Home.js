import React, { Component } from 'react'
import background from './Background.jpg'
import RE4Logo from './Game Logo/RE4Logo.png'
import SRLogo from './Game Logo/SRLogo.png'
import ACBFLogo from './Game Logo/ACBFLogo.png'
import GTAVLogo from './Game Logo/GTAVLogo.png'
import OL2Logo from './Game Logo/OL2Logo.png'
import Navbar from '../Layout/Navbar'

 class Home extends Component{
    
  render() {
    //CSS of Tools
    const navColor = {
      backgroundColor: "black",
      paddingTop: "2%"
  }
   const navTxtColor = {
      color: "black",
      fontSize: '150%'
  }
  const navTitle = {
    paddingTop: '2%',
      color: "rgb(0, 255, 0)",
      fontSize: "30%",
      align: "center",
      fontFamily: "Arial",
      fontWeight:'bold'
  }
  const searchBox = {
    size: '100%'
  }
  const searchButton = {
    color: "black",
    backgroundColor: 'rgb(0, 255, 0)',
    fontWeight: 'bold'
  }


    //CSS of List of Games
    const getLaout = {
        backgroundImage: `url(${background})` ,
        height:'100vh',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width:'100%',
        
    }
    const gameLabel = {
        fontFamily:'Arial',
        fontSize: '30%',
        color: 'black',
        backgroundColor: 'rgb(0, 255, 0)',
        fontWeight: "bold",
        padding: "10px",
        outline: "2px solid black",
        outlineOffset: "-4px"
    }
    const gameLogo = {
      border: '2px solid rgb(0, 255, 0)',
    }
    const button ={
      backgroundColor: "black",
      color: "rgb(0, 255, 0)"
    }




    return (
      <div><Navbar />
      
      <div className='body bg-body-tertiary' style={getLaout}>
        
      <p className="navbar-brand bg-body-tertiary"  style={navTitle}>
            Search Game: <input style={searchBox}></input> <button style={searchButton}>Search</button>
        </p>
        <div class="container container-expand-lg text-center">
          <div class="row" >
            <div class="col">
              <img style={gameLogo} src={RE4Logo}></img>
              <p></p>
              <p style={gameLabel}>Resident Evil 4<br></br>
              10 Php<br></br>
              <button style={button}>Buy Now</button>     <button style={button}>Add to Cart</button>
              </p>
            </div>

            <div class="col">
              <img style={gameLogo} src={SRLogo}></img>
              <p></p>
              <p style={gameLabel}>Skyrim V<br></br>
              10 Php<br></br>
              <button style={button}>Buy Now</button>     <button style={button}>Add to Cart</button>
              </p>
            </div>

            <div class="col">
              <img style={gameLogo} src={ACBFLogo}></img>
              <p></p>
              <p style={gameLabel}>Assassins Creed Black Flag<br></br>
              10 Php<br></br>
              <button style={button}>Buy Now</button>     <button style={button}>Add to Cart</button>
              </p>
            </div>

            <div class="col">
            <img style={gameLogo} src={GTAVLogo}></img>
              <p></p>
              <p style={gameLabel}>Grand Theft Auto V<br></br>
              10 Php<br></br>
              <button style={button}>Buy Now</button>     <button style={button}>Add to Cart</button>
              </p>
            </div>

            <div class="col">
            <img style={gameLogo} src={OL2Logo}></img>
              <p></p>
              <p style={gameLabel}>Outlast 2<br></br>
              10 Php<br></br>
              <button style={button}>Buy Now</button>     <button style={button}>Add to Cart</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
export default Home;