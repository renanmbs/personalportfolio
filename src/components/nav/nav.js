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
                    <li><button className="res"><a href="/public/Docs/Mougenot_Renan.pdf">Resume</a></button></li>
                </ul>
          </nav>
        )
    }
}