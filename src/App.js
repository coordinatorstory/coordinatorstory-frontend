import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Redirect  } from 'react-router-dom';

import Stories from './components/Stories'
import Story from './components/Story'
import Register from './components/Register'

import './App.css';

import { getStory, fetchStory } from './actions/actions'
import { connect } from 'react-redux'
import SignIn from './components/SignIn';


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
    this.props.fetchStory()
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
          <Route path='/signup' render={ props => this.state.signedIn ?
            <Redirect to='/' /> :
            <Register {...props} {...this.state} />
          }/>

          
          
          <Route path='/login' render={ props => this.state.signedIn ?
            <Redirect to='/' /> :
            <SignIn {...props} {...this.state} />
          } />
        </div>
      </Router>
    );
  }
}

const mapStatetoProps = state => {
  console.log(state)
  return {
    stories: state.story.stories,
  }
} 

export default connect(mapStatetoProps, { getStory, fetchStory })(App)

// export default App;
