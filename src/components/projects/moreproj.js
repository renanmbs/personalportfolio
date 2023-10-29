import React from "react";
import { proj } from "./projObj";
import {BiLogoGithub} from "react-icons/bi";
import {MdOpenInNew} from "react-icons/md";
import { Techchoice } from "./techstack";
import "./moreproj.css";

export class MoreProj extends React.Component{
    render(){
        return(
            <div id="space">
                {proj.map((name, key) => (
                    <div className="box" key={key}>
                        <h3>{name.title}</h3>
                        <p>{name.desc}</p>
                        <div className="links">
                            {name.open === null ? null : <a href={name.open} target="_blank" rel="noopener noreferrer"><MdOpenInNew/></a>}
                            <a href={name.github} target="_blank" rel="noopener noreferrer"><BiLogoGithub/></a>
                        </div>
                        <div className="techstack">
                            <h4>Tech Stack</h4>
                            <Techchoice tc={name.tech} className="ticon"/>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
