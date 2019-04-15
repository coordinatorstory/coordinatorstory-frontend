import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route  } from 'react-router-dom';

import Stories from './components/Stories'

import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <Route path='/' component={Stories} />
        </div>
      </Router>
    );
  }
}

export default App;
