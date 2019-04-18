import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Redirect  } from 'react-router-dom';

import Stories from './components/Stories'
import Story from './components/Story'
import Register from './components/Register'

import './App.css';

import { getStory, fetchStory } from './actions/actions'
import { connect } from 'react-redux'
import SignIn from './components/SignIn';
import MyStory from './components/MyStory';

class App extends Component {
  constructor() {
    super()
    this.state = {
      filteredStories: [],
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


  render() {
    // console.log(this.props)
    return (
      <Router>
        <div className="App">
          <nav>
            <NavLink exact to='/stories'>Stories</NavLink>
            {this.props.currentUser ? 
            <span>
              <NavLink to={`/mystories`}>My Stories</NavLink>
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
          <Route exact path='/mystories' render={ props =>
          <MyStory {...props} {...this.props}/> 
          
          // {
          //   if (this.props.currentUser) return <MyStory {...props} {...this.props}/>
          //   else return <Redirect to='/' />} 
          } 
          />
          
          {/* <Route path='/' /> */}
          <Route path='/login' render={ props => { 
            if (this.props.currentUser) {
              return <Redirect to='/' /> 
            } else {
              return <SignIn 
              {...props} 
              // {...this.state} 
              />
            }
          }}/>

          <Route path='/signup' render={ props => { 
            if (this.props.newUser) {
              return <Redirect to='/' />
            } else {
              return <Register 
              {...props} 
              // {...this.state} 
              />
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
    currentUser: state.login.currentUser,
    newUser: state.register.currentUser,
    myStories: state.userStory.myStories,

  }
} 

export default connect(mapStatetoProps, { fetchStory })(App)

// export default App;
