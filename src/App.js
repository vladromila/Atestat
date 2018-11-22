import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PP from './PP.js';
import Landing from './Landing.js';
import List from './List.js';
import { Nav, Navbar, MenuItem, NavItem, NavDropdown, FormGroup, FormControl, Button } from 'react-bootstrap'
import {data} from './data.js';

class App extends Component {
  render() {console.log(data);
    return (
      <Router>
        <React.Fragment>
          <nav className="border fixed split-nav">
  <div className="nav-brand">
    <h3><Link to="/">Teoria Grafurilor</Link></h3>
  </div>
  <div className="collapsible">
    <input id="collapsible1" type="checkbox" name="collapsible1"/>
    <button>
    <label htmlFor="collapsible1">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </label>
    </button>
    <div className="collapsible-body">
      <ul className="inline">
        <li><Link to="/pbs">Probleme</Link></li>
      </ul>
    </div>
  </div>
</nav>
          <Route path="atestat/" exact component={Landing} />
          <Route path="atestat/pbs" exact component={List} />
          <Route path="atestat/pb" exact component={PP} />
          </React.Fragment>
          
      </Router>
    );
  }
}

export default App;
