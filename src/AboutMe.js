import React from 'react';
import "./AboutMe.css";
import Me1 from "./arts/me-1.jpeg";
import Me2 from "./arts/me-2.jpeg";
import AboutMeTitle from "./arts/AboutME.png";

function AboutMe() {
  return (
    <div className='about__me'>
      <div className='aboutme__left'>
        <img alt="" src={Me1} className="me__1"></img>
        <img alt="" src={Me2} className="me__2"></img>
       </div>
       <div className='aboutme__right'>
        <img alt="" src={AboutMeTitle} className="aboutme__title"></img>
        <p>I have enjoyed creating art works since I was a little girl</p>
        <p>This is a healing process for me to be in my own world and spread my feelings</p>
       </div>
      
    </div>
  )
}

export default AboutMe;