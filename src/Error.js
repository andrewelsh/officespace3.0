import React, { useEffect } from 'react'
import Footer from './components/Footer';
import Nav from "react-bootstrap/Nav";


const Error = () => {
  
    useEffect(() => {
  
        setTimeout(function () {
          window.location.href = '/';
        }, 1500);
      });
    return (
    <div>
    <Nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    
      Office Space
      </Nav>
    <br />
    <br />
    <br />
    <center>
    <h1>You've made it here somehow?</h1>
    <hr />
    <h4>Sending you somewhere more helpful</h4>
    <hr />

    </center>
<Footer />
    </div>
  )
}

export default Error