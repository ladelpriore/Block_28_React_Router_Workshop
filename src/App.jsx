/*
Step 1, Initialize the Project
  Remove boilerplate jsx from the application, leaving an return statement and React framgment
  Replace the empty React Fragment with the provided code for the div container, h1, and routes. 
  The browser correctly displays the h1 
Step 2, Router Configuration
  Remove the h1 tag
  Import the Routes and Route components from React Router
  Use the Route component and render two route components with the path property to /blue and and to /red 
  Test verified that user can open browser to the application and navigate to /blue or /red through the URL paths
Step 3, Navbar and the Link Component
  Update the import statement to add the Link component to the 'react-router-dom' import statement object
  In the navbar div, create Link tags for /blue and /red, a "to" component, and inner text
  Test confirms user can navigate to barebones navigation bar for blue and for red
  In the src folder, create a components folder with files Red.jsx and Blue.jsx
  Import the Red and Blue components from the Blue.jsx and App.jsx files
  Replace the div elements with the Route components
  Test confirms that the Blue and Red components render when navigating between the /blue and /red URL paths in the browser
  Import the Home component from the home.jsx file and create a new Route with the path of / to render the Home component
*/

import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Red from './components/Red';
import Blue from './components/Blue';
import Home from './components/Home';
import './App.css';


function App() {
  const [count, setCount] = useState(0);

  return (
      <div id="container">
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="blue">Blue</Link>
          <Link to="red">Red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
    </div>
  )
}

export default App;
