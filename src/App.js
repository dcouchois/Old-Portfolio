import React, { Component } from 'react';
import { HashRouter, Route, NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import "./App.css";


class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <div className="links">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/Projects">Projects</NavLink>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/Projects" component={Projects} />
        </div>
      </HashRouter>
    );
  }
}


export default App;
