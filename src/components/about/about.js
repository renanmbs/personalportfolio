import React from "react";
import "./about.css";

export class About extends React.Component{
    render(){
        return(
            <div id="About">
                <h2>About Me</h2>

                <div className="con">

                    <div className="inf">

                    
                        <p className="start">I'm a Computer Engineer graduate from <span style={{color:"purple"}}><a href="https://weber.edu/"  target="_blank" rel="noopener noreferrer">Weber State University</a></span>, where my journey into the world of front-end software engineering began to take shape. This passion truly ignited during my internship
                            as a Software Engineer and continued to flourish through my college Senior Project.
                            
                            <br/><br/>

                            I'm a firm believer in the power of optimization through programming. I'm dedicated to enhancing everyday tasks through code.
                        </p>
                        
                        <br/>

                        <p>With a refined skill set that includes CSS, HTML, JavaScript, React, SQL, Python and C++, I use my creativity and programming expertise to tackle problems head-on. My pragmatic approach, combined with a fast-learning mindset, allows me to craft scalable, user-friendly, and functional code from concept to deployment. </p>

                        <br/>

                        <p>Beyond coding, I lead a rich and diverse life. My interests span from spending quality time with my wife and daughter to volunteering as the head coach for the Weber State University 
                            Men's Soccer Team and as an assistant coach for the <span style={{color:"red"}}><a href="https://www.lcaeagle.org/"  target="_blank" rel="noopener noreferrer">Layton Christian Academy</a></span> Men's Soccer Team. I find inspiration in music and enjoy playing soccer myself.
                        </p>
                        
                    </div>

                    <figure>
                        <img src="/IMG_7543.jpg" alt="Renan at Nasa"/>
                        <figcaption>Nasa in Cape Canaveral - FL</figcaption>
                    </figure>

                </div>

                <div id="bul">
                        <p>During my time at Weber State University:</p>
                        <ul>
                            <li>Honor Roll Student</li>
                            <li>Active member of the Men's Soccer Team</li>
                            <li>Member of of the National Society of Leadership and Success (Sigma Alpha Phi)</li>
                            <li>Received academic scholarships for my dedication and achievements</li>
                        </ul>
                    </div>
            
            </div>
        )
    }
}