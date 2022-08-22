import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Button from '@mui/material/Button';
import GalleryII from './GalleryII';
import GalleryIII from './GalleryIII';
import GalleryI from './GalleryI';
import AboutMe from './AboutMe';
import Home from './Home';


function App() {
  return (
    <div className="app">
      <Router>
        <div className='app__menu'>
           <Button href="/HOME">Home</Button>
           <Button href="/AboutMe">About Me</Button>
           <Button href="/GalleryI">Painting</Button>
           <Button href="/GalleryII">Drawing</Button>
           <Button href="/GalleryIII">Digital Art</Button>
        
        </div>

        <Routes>
          <Route exact path="/" element={<Navigate to="/HOME" />} />
          <Route path="/HOME" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/GalleryI" element={<GalleryI />} />
          <Route path="/GalleryII" element={<GalleryII />} />
          <Route path="/GalleryIII" element={<GalleryIII />} />
          </Routes>
      </Router>
      
      
      
    </div>
  );
}

export default App;
