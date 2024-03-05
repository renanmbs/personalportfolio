import {BiLogoJavascript, BiLogoReact, BiLogoHtml5, BiLogoCss3, BiLogoPython, BiLogoCPlusPlus, BiSolidFileJson, BiLogoJava} from "react-icons/bi";
import {TbApi} from "react-icons/tb";
import "./tech.css";

export let Techchoice = (props) =>{
    let content;

     console.log(props);

    if(props.tc === "react, html, css, json"){
        content = [<BiLogoReact className="ticon"/>,<BiLogoHtml5 className="ticon"/>,<BiLogoCss3 className="ticon"/>,<BiSolidFileJson className="ticon"/>];
    }

    else if(props.tc === "react, html, css"){
        content = [<BiLogoReact className="ticon"/>,<BiLogoHtml5 className="ticon"/>,<BiLogoCss3 className="ticon"/>];
    }
    
    else if(props.tc === "javascript, html, css, json, api"){
        content = [<iLogoJavascript className="ticon"/>,<BiLogoHtml5 className="ticon"/>,<BiLogoCss3 className="ticon"/>,<BiSolidFileJson className="ticon"/>, <TbApi className="ticon"/>];
    }

    else if(props.tc === "javascript, html, css"){
        content = [<BiLogoJavascript className="ticon"/>,<BiLogoHtml5 className="ticon"/>,<BiLogoCss3 className="ticon"/>];
    }

    else if(props.tc === "html, css"){
        content = [<BiLogoHtml5 className="ticon"/>,<BiLogoCss3 className="ticon"/>];
    }

    else if(props.tc === "api, json"){
        content = [<TbApi className="ticon"/>,<BiSolidFileJson className="ticon"/>];
    }

    else if(props.tc === "python"){
        content = [<BiLogoPython className="ticon"/>];
    }

    else if(props.tc === "c++"){
        content = [<BiLogoCPlusPlus className="ticon"/>];
    }

    else if(props.tc === "java"){
        content = [<BiLogoJava className="ticon"/>];
    }

    else{
        content = [];
    }

    console.log(content);
    
    return(
        content
    )

}