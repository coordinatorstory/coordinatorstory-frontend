import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Redirect  } from 'react-router-dom';

import Stories from './components/Stories'
import Story from './components/Story'
import Register from './components/Register'

import './App.css';

import { getStory, fetchStory } from './actions/actions'
import { connect } from 'react-redux'
import SignIn from './components/SignIn';
import PrivateRoute from './components/LogedIn';
import PrivateHome from './components/Coordinator';
import MyStory from './components/MyStory';

class App extends Component {
  constructor() {
    super()
    this.state = {
      filteredStories: [],
      currentUser:'',
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
    // this.props.filterStory(country);
    this.setState({
      selectedCountry: country,
    })
  }

  signIn = username => {
    this.setState({ 
      signedIn: true,
      currentUser: username 
    })
    console.dir(this.state)
  }

  render() {
    // console.log(this.props)
    return (
      <Router>
        <div className="App">
          <nav>
            <NavLink exact to='/stories'>Stories</NavLink>
            {this.state.signedIn ? 
            <span>
              <NavLink to={`/${this.state.currentUser}/stories`}>My Stories</NavLink>
            </span> :
            <span>
              <NavLink to='/login'>Log In</NavLink>
              <NavLink to='/signup'>Sign Up</NavLink>
            </span>
            }
          </nav>

          <Route 
          exact path='/' 
          render={() => <Redirect to='/stories' />} />
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


          {/* <PrivateRoute path='/protected' component={PrivateHome} /> */}
          <Route exact path='/:user/stories' render={ props => <MyStory {...props} {...this.state}/> } />
          
          {/* <Route path='/' /> */}
          <Route path='/login' render={ props => { 
            if (this.state.signedIn) {
              return <Redirect to='/' /> 
            } else {
              return <SignIn {...props} {...this.state} signIn={this.signIn}/>
            }
          }}/>

          <Route path='/signup' render={ props => { 
            if (this.state.signedIn) {
              return <Redirect to='/' />
            } else {
              return <Register {...props} {...this.state} signIn={this.signIn}/>
            }
          }}/>
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
