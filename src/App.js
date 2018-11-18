import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PP from './PP.js';
import Landing from './Landing.js';
import { Nav, Navbar, MenuItem, NavItem, NavDropdown, FormGroup, FormControl, Button } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <nav class="border fixed split-nav">
  <div class="nav-brand">
    <h3><Link to="/">Teoria Grafurilor</Link></h3>
  </div>
  <div class="collapsible">
    <input id="collapsible1" type="checkbox" name="collapsible1"/>
    <button>
    <label for="collapsible1">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </label>
    </button>
    <div class="collapsible-body">
      <ul class="inline">
        <li><Link to="/pb/1">Probleme</Link></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Github</a></li>
      </ul>
    </div>
  </div>
</nav>
          <Route path="/" exact component={Landing} />
          <Route path="/pb/:handle" exact component={PP} /></React.Fragment>
      </Router>
    );
  }
}

export default App;
