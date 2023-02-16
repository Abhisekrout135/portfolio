import "./AboutcontentStyle.css";

import React from "react";
import { Link } from "react-router-dom";
import Dsc from "../asset/DSC_1787.JPG";


const AboutContent = ()=>{
    return <div className="about">
        <div className="left">
            <h1>WHO AM I?</h1>
            <p>
               I am Abhisek Rout . I am working in TCS, and i am a full-stack web devloper.
               I create a responsive secure website for my clint.
            </p>
            <p>
                I am also part-time investore.
            </p>
            <Link to="/Contact">
            <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
            <div className="img-stack top">
                <img src={Dsc} className="img"alt="true"/>
                </div>
            </div>
        </div>
    </div>
};
export default AboutContent;