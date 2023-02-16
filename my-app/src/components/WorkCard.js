import "./WorkcardStyle.css";

import react from "react";
import pro1 from "../asset/resort.jpg";
import { Link, NavLink } from "react-router-dom";
import pro2 from "../asset/country.png";

const WorkCard = () =>{
    return<div className="work-container"> 
    <h1 className="project-heading">PROJECTS
        
    </h1>
    <div className="project-container">
        <div className="project-card">
            <img src={pro1} alt="image"/>
        <h2 className="project-title">RESORT</h2>
        <div className="pro-details">
            <p>This is Resort replica project. This project is very beautiful</p>
            <div className="pro-btns">
               
                <Link to= "../http://127.0.0.1:5500/index.html" className="btn">View</Link>
                <NavLink to="url.com" className="btn">Source</NavLink>
            </div>
        </div>
        </div>

        <div className="project-card">
            <img src={pro2} alt="image"/>
        <h2 className="project-title">COUNTRY GUID</h2>
        <div className="pro-details">
            <p> This is country guid app project. This project is very beautiful</p>
            <div className="pro-btns">
               
                <NavLink to= "http://127.0.0.1:5500/index.html" className="btn">View</NavLink>
                <NavLink to="url.com" className="btn">Source</NavLink>
            </div>
        </div>
        </div>
    </div>
    </div>;
};
export default WorkCard;