import { Link } from 'react-router-dom';
import React from "react";
import "./nav.css";

export class Nav extends React.Component{

    render(){
        return(
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><button className="res" ><a href="/Docs/Silva_Renan.pdf"  target="_blank" rel="noopener noreferrer">Resume</a></button></li>
                </ul>
          </nav>
        )
    }
}