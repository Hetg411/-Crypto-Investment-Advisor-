import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
export default function NavigationBar(){
    return (<>
      <div className="Navigation">
        <div className="name">
              CryptoWise
        </div>
        <div className="Button">
            <button className="home"><Link className="link" to="/">Home</Link></button>
            <button className="about"><Link className="link" to="/About">About us</Link></button>
            <button className="invest"><Link className="link" to="/Investment">Investment Calculator</Link></button>
        </div>
      </div>
    </>)
}