import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PP from './PP.js';
import Landing from './Landing.js';
import List from './List.js';
import firebase from 'firebase'
class App extends Component {
  componentWillMount()
    {
        var config = {
            apiKey: "AIzaSyBTYNMtBo3qAWaZngld95uW40dlHCCNoZE",
            authDomain: "atestatpareri.firebaseapp.com",
            databaseURL: "https://atestatpareri.firebaseio.com",
            projectId: "atestatpareri",
            storageBucket: "",
            messagingSenderId: "773986191427"
          };
          firebase.initializeApp(config);
          firebase.auth().signInAnonymously();
    }
  render() {
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
          <Route path="/Atestat/" exact component={Landing} />
          <Route path="/Atestat/pbs" exact component={List} />
          <Route path="/Atestat/pb/:handle" exact component={PP} />
          </React.Fragment>
          
      </Router>
    );
  }
}

export default App;
