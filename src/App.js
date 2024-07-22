import React from "react";
import "./App.css";
import Sidebar from "./component/sidebar/Sidebar";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Resume from "./component/resume/Resume";
import Portfolio from "./component/portfolio/Portfolio";
import Contact from "./component/contact/Contact";

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="main"/>
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
