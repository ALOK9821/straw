// import "./App.css";
import React from "react";
import { useState } from "react";
import Heading from "./Components/Heading/heading.js";
import Navbar from "./Components/Navbar/navbar.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./Styles/sass files/navbar.scss";
function App() {
  return (
    <>
      {/* <h1>folder structure updated for now</h1> */}
      <Router>
        <Route exact path="/">
          <Navbar />
        </Route>
      </Router>
    </>
  );
}

export default App;
