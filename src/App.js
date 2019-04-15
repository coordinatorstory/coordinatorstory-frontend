import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route  } from 'react-router-dom';


import './App.css';

const Stories = props => (
  <div>Stories</div>
)

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
