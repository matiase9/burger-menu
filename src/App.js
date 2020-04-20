import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Background from './components/Background/Background';
import SideMenu from './components/SideMenu/SideMenu';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [sideMenuOpen, setMenuState] = useState(false);
    
  const menuToggleClickHandler = () => {
    setMenuState(!sideMenuOpen)
  };
  
  const backStateClickHandler = () => {
    setMenuState(false)
  }

  return (
    <div className="App">
      <Router>
        <Menu clickHandler={menuToggleClickHandler}/>
        {sideMenuOpen ? <Background click={backStateClickHandler}/> : ''}
        <SideMenu show={sideMenuOpen} remove={backStateClickHandler}/>

        <div className="container">
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
      
    </div>
  );
}

const Home = () => {
  return (
    <div className="Home">
      <p>Home</p>
    </div>
  );
};

const About = () => (
  <div className="About">
    <p>About</p>
  </div>
);
export default App;
