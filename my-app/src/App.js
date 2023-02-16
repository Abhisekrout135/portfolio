import React from "react";
import "./index.css";
import Home from "./router/Home";
import About from "./router/About";
import Contact from "./router/Contact";
import Project from "./router/Project";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
<>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Project" element={<Project/>}/>
  <Route path="/Contact" element={<Contact/>}/>
  <Route path="/About" element={< About/>}/>
</Routes>
</>
  
  );
  
}

export default App;
