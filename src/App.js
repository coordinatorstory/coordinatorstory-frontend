import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Redirect  } from 'react-router-dom';

import Stories from './components/Stories'
import Story from './components/Story'

import './App.css';

import { getStory } from './actions/actions'
import { connect } from 'react-redux'

import coordinatorWrapper from './utils/coordinatorWrapper'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
  }
  componentDidMount = () => {
    this.props.getStory(
      [
        {
            id: 1,
            title: "Lorem ipsum dolor 1",
            country: "Somalia",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            date: Date()
        },
        {
            id: 2,
            title: "Lorem ipsum dolor 2",
            country: "Somalia",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            date: Date()
        },
        {
            id: 3,
            title: "Lorem ipsum dolor 3",
            country: "Somalia",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            date: Date()
        },  
      ],
    )
    console.log(this.props)

  }
  render() {
    console.log(this.props)
    // const story = <Story {...props} { ...this.props}/>
    return (
      <Router>
        <div className="App">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/login'>Log In</NavLink>
          <NavLink to='/signup'>Sign Up</NavLink>

          <Route exact path='/' render={() => <Redirect to='/stories' />} />
          <Route exact path='/stories' component={Stories} />
          <Route path={`/stories/:id`} render={props => <Story {...props} {...this.props}/>}/>
          {/* <Route path={`/stories`} render={props => coordinatorWrapper(props)(Stories)} /> */}
        </div>
      </Router>
    );
  }
}

const mapStatetoProps = state => ({
  stories: state.stories
})

export default connect(mapStatetoProps, { getStory })(App)

// export default App;
