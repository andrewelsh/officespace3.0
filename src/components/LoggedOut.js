import React, { useEffect } from 'react'
import Footer from './Footer';
import Nav from "react-bootstrap/Nav";



const LoggedOut = () => {

  useEffect(() => {
  
    setTimeout(function () {
      window.location.href = '/';
    }, 1500);
  });
  return (
    <>
    <Nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    
    Office Space
    </Nav>
    <center>
    <br />
    <br />
    <br />
    <div><h3>
    
    Come Back Again Soon 
    </h3>
    <hr />
    <p>
    
    You are now Logged Out
    
    </p>
    </div>
    </center>
    <Footer />
    </>
    )
  }

export default LoggedOut