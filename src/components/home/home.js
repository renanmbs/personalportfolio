import React from "react";
import "./home.css";
import {FaGithub,FaLinkedinIn} from "react-icons/fa";
import {BiLogoJavascript, BiLogoReact, BiLogoHtml5, BiLogoCss3, BiLogoPostgresql, BiLogoPython, BiLogoCPlusPlus} from "react-icons/bi";

export class Home extends React.Component{
    render(){
        return(
            <>
                <div id="Home">  

                    <div id="info">  
                        <p className="hi">Welcome, I am</p>

                        <div className="name">
                            <h1>Renan</h1>
                            <h2>Silva</h2>
                        </div>
                    
                        <p className="desc">Computer Engineer with a strong background in software engineering and computer science.
                        Passionate about exceeding expectations, challenging the status quo, and leveraging technology to improve lives.</p>

                        <hr/>

                        <div id="logos">
                            <BiLogoReact/>
                            <BiLogoJavascript/>
                            <BiLogoHtml5/>
                            <BiLogoCss3/>
                            <BiLogoPostgresql/>
                            <BiLogoPython/>
                            <BiLogoCPlusPlus/>
                        </div>
                        
                    </div>

                    <div id="pic">
                        <img src="/IMG_5596.jpeg" alt="Renan's Profile"></img>
                    </div>

                </div>  

                <div className="social">
                    <a href="https://github.com/renanmbs/" target="_blank" rel="noopener noreferrer"><FaGithub className="icons"/></a>
                    <a href="https://www.linkedin.com/in/renan-silva-7ba0781b8/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="icons"/></a>
                </div>

            </>
        )
    }
}