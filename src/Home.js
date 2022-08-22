import React from 'react'
import home_page from "./arts/home_page.jpeg"
import home_title from "./arts/home_title.jpeg";
import "./Home.css";

function Home() {
  return (
    <div className='app__content'>
      <img alt="home_page_img" src={home_page} className="cover_img"></img>
      <img alt="" src={home_title} className="title_img"></img>

      
    </div>
  )
}

export default Home;