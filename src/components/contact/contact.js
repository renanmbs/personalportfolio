import React from "react";
import {HiOutlineMail} from "react-icons/hi";
import{AiOutlineMessage, AiOutlineWhatsApp} from "react-icons/ai";
import {FaGithub,FaLinkedinIn} from "react-icons/fa";

import "./contact.css";

export class Contact extends React.Component{
    render(){
        return(
            <div id="Contact">
                <p>If you've come this far...</p>
                <h2>Get In Touch</h2>
                <h5>I am always open to be contacted regarding job openings, web development questions, or if you want to get know more about me. </h5>

                <div id="cont">
                    <a href="mailto:renan.mougenot@gmail.com"><HiOutlineMail className="cicon"/></a>
                    <a href="sms:+18014994558"><AiOutlineMessage className="cicon"/></a>
                    <a href="https://wa.me/18014994558?text=Hello,%20I%20saw%20your%20portfolio."><AiOutlineWhatsApp className="cicon"/></a>
                </div>

                <div id="social">
                    <a href="https://github.com/renanmbs/" target="_blank" rel="noopener noreferrer"><FaGithub className="cicon"/></a>
                    <a href="https://www.linkedin.com/in/renan-silva-7ba0781b8/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="cicon"/></a>
                </div>

                <img src="/prof.jpeg" alt="Profile" />

                <h3>References</h3>
                <div id="ref">

                    <div className="refbox">
                        <ul>
                            <li><a href="mailto:brandbingham@gmail.com">Brandon Bingham</a></li>
                            <li><a href="mailto:dralphs44@gmail.com">Duane Ralphs</a></li>
                            <li><a href="mailto:lucas.almeida9@outlook.com">Lucas Almeida</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}