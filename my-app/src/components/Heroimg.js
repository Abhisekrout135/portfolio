import "./Heroimage.css";
import React from "react";
import IntroImg from "../asset/intro-bg.jpg";
import { Link } from "react-router-dom";
const Heroimg  = () =>{
    return (<div className="hero">
        <div className="mask">
        <img className="into-img" src={IntroImg} alt="Introimg"/></div>
    <div className="content"><p>HI, I AM ABHISEK ROUT. & I M A FULL STACK </p>
    <h1>WEB DEVLOPER.</h1>
    <div><Link to="/project"className="btn">project</Link>
    <Link to="/contact"className="btn btn-light">Contact</Link>
    </div>
    </div>
    </div>);
};
export default Heroimg; 