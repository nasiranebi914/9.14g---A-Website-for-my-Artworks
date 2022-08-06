import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Button from '@mui/material/Button';
import GalleryII from './GalleryII';
import GalleryIII from './GalleryIII';
import GalleryI from './GalleryI';
import AboutMe from './AboutMe';
import Contact from './Contact';
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
           <Button href="/Contact">Contact</Button>
        
        </div>

        <Switch>
          <Route exact path="/">
            <Redirect to="/HOME" />
          </Route>
          <Route path="/HOME" component={Home}>
            <Home />
          </Route>
          <Route path="/AboutMe" component={AboutMe}>
            <AboutMe />
          </Route>
          <Route path="/GalleryI">
            <GalleryI />
          </Route>
          <Route path="/GalleryII">
            <GalleryII />
          </Route>
          <Route path="/GalleryIII">
            <GalleryIII />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
      <div className='app_menu'>
      </div>
      
      
      
    </div>
  );
}

export default App;
