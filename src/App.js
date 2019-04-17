import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Redirect  } from 'react-router-dom';

import Stories from './components/Stories'
import Story from './components/Story'
import Register from './components/Register'

import './App.css';

import { getStory, filterStory } from './actions/actions'
import { connect } from 'react-redux'

import coordinatorWrapper from './utils/coordinatorWrapper'
import { all } from 'q';

class App extends Component {
  constructor() {
    super()
    this.state = {
      filteredStories: [],
      signedIn: false,
      selectedCountry: "All Countries",
      countries: ["All Countries", "Bolivia", "Brazil", "Cambodia", "Colombia", "Ecuador", "El Salvador", "Ghana", "Guatemala", "Haiti", "Honduras", "Kiribati", "Madagascar", "Mongolia", "Nicaragua", "Paraguay", "Peru", "Philippines", "Sierra Leone", "Zimbabwe"],
    }
  }
  componentDidMount = () => {
    this.props.getStory(
      [
        {
            id: 1,
            title: "Lorem ipsum dolor 1",
            country: "Brazil",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            date: Date()
        },
        {
            id: 2,
            title: "Lorem ipsum dolor 2",
            country: "Cambodia",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            date: Date()
        },
        {
            id: 3,
            title: "Lorem ipsum dolor 3",
            country: "Colombia",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            date: Date()
        },  
      ],
    )
    // console.log(this.props.stories)
    // this.setState({filteredStories: this.props.stories})
  }

  filterStoriesByCountry = event => {
    const country = event.target.value
    this.props.filterStory(country);
    this.setState({
      selectedCountry: country,
    })
  }

  render() {
    // console.log(this.props)
    return (
      <Router>
        <div className="App">
          <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/login'>Log In</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
          </nav>

          <Route 
          exact path='/' 
          render={() => this.state.signedIn ? 
          <div>"hello"</div> : 
          <Redirect to='/stories' />} />
          <Route 
          exact path='/stories' 
          render={
            props => <Stories 
            {...props} 
            {...this.props} 
            {...this.state}
            filterStoriesByCountry={this.filterStoriesByCountry} />} 
          />
          <Route path='/stories/:id' render={props => <Story {...props} {...this.props}/>}/>
          {/* <Route path='/login' */}
          <Route path='/signup' redner={ props => this.state.signedIn ?
          <Redirect to='/' /> :
          <Register {...props} {...this.state} />
          }/>
          {/* <Route path={`/stories`} render={props => coordinatorWrapper(props)(Stories)} /> */}
        </div>
      </Router>
    );
  }
}

const mapStatetoProps = state => ({
  stories: state.stories,
})

export default connect(mapStatetoProps, { getStory, filterStory })(App)

// export default App;
