import React from "react";
import {BiLogoJavascript, BiLogoReact, BiLogoHtml5, BiLogoCss3, BiLogoGithub, BiSolidFileJson} from "react-icons/bi";
import {TbApi} from "react-icons/tb";
import {MdOpenInNew} from "react-icons/md";

import "./projects.css";
import { MoreProj } from "./moreproj";

export class Projects extends React.Component{

    constructor(props){
        super(props);
        this.state = { show: 1 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {

        if(this.state.show === 1){
            this.setState({show: 2});
        }

        else{
            this.setState({show: 1});
        }
    }


    render(){
        return(
            <div id="proj">
                <h2>Projects</h2>

                <div id="lineup">

                    <div className="card">
                        <img src="/Docs/projects/webb.jpg" alt="Weber State Men's Soccer App"/>

                        <div className="inf">
                            <h3>WSU Men's Soccer React App</h3>
                            <div className="open">
                                <a href="https://wsublack.netlify.app/" target="_blank" rel="noopener noreferrer"><MdOpenInNew/></a>
                                <a href="https://github.com/renanmbs/weberB" target="_blank" rel="noopener noreferrer"><BiLogoGithub/></a>
                            </div>
                            <p>An expandable React app used for Weber State's Men's Soccer team, keeping track of player stats, game results, and roster.</p>
                            <div className="tech">
                                <h4>Technology Stack:</h4>
                                <BiLogoReact className="icon"/>
                                <BiLogoHtml5 className="icon"/>
                                <BiLogoCss3 className="icon"/>
                                <BiLogoJavascript className="icon"/>
                                <BiSolidFileJson className="icon"/>
                            </div>
                        </div>
                       
                    </div>
                    
                    <div className="card">
                        <img src="/Docs/projects/coach.jpg" alt="Coach Database" />
                        <div className="inf">
                            <h3>Coach Database</h3>
                            <div className="open">
                                <a href="https://renanmbs.github.io/coach/" target="_blank" rel="noopener noreferrer"><MdOpenInNew/></a>
                                <a href="https://github.com/renanmbs/coach" target="_blank" rel="noopener noreferrer"><BiLogoGithub/></a>
                            </div>
                            <p>Voice recognizable webpage using Javascript to access my developed soccer drills, tactics and much more. It listen to commands and opens the appropriate page.</p>
                            <div className="tech">
                                <h4>Technology Stack:</h4>
                                <BiLogoHtml5 className="icon"/>
                                <BiLogoCss3 className="icon"/>
                                <BiLogoJavascript className="icon"/>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <img src="Docs/projects/geography.jpg" alt="Geography Website" />
                        <div className="inf">
                            <h3>Geography Quiz Website</h3>
                            <div className="open">
                                <a href="https://renanmbs.github.io/geography/" target="_blank" rel="noopener noreferrer"><MdOpenInNew/></a>
                                <a href="https://github.com/renanmbs/geography" target="_blank" rel="noopener noreferrer"><BiLogoGithub/></a>
                            </div>
                            <p>Following my passiong for geography, I developed a website using API consuming to learn more about countries' flags,
                                and their capitals. Having the option to have fun and doing a flag quiz or capital quiz.</p>
                            <div className="tech">
                                <h4>Technology Stack:</h4>
                                <BiLogoHtml5 className="icon"/>
                                <BiLogoCss3 className="icon"/>
                                <BiLogoJavascript className="icon"/>
                                <TbApi className="icon"/>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <img src="Docs/projects/back.jpg" alt="Background Changer"/>
                        <div className="inf">
                            <h3>Background Changer</h3>
                            <div className="open">
                                <a href="https://renanmbs.github.io/background/" target="_blank" rel="noopener noreferrer"><MdOpenInNew/></a>
                                <a href="https://github.com/renanmbs/background" target="_blank" rel="noopener noreferrer"><BiLogoGithub/></a>
                            </div>
                            <p>UI/UX website, that allows to change the background color and the text color using HEX color codes or by choosing it from a color input. 
                            </p>
                            <div className="tech">
                                <h4>Technology Stack:</h4>
                                <BiLogoHtml5 className="icon"/>
                                <BiLogoCss3 className="icon"/>
                                <BiLogoJavascript className="icon"/>
                            </div>
                        </div>
                        
                    </div>

                    {
                        this.state.show === 1 ? null : <MoreProj />
                    }
                    
                    <button onClick={this.handleClick} className="see">
                        {
                            this.state.show === 1 ? "See More" : "See Less"
                        }
                    </button>

                    

                </div>

    
            </div>
        )
    }
}