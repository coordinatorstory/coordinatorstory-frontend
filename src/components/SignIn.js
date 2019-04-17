import React from 'react'
import Axios from 'axios';
import './styles/Register.css'
import { login } from '../actions/login'
import { connect } from 'react-redux'

class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    editSignInForm = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    signIn = event => {
        event.preventDefault()
        this.props.login(this.state)
    }
    
    render = props => {
        // console.log(this.props.status)

        return (
        <div className="signin-view">
            <h1>Let's Go To Your Profile</h1>
            <form>

                <input 
                    type='text'
                    placeholder='Username'
                    minLength='3' 
                    required
                    value={this.state.username}
                    onChange={this.editSignInForm}
                    name='username'
                />              
    
                <input 
                    minLength='6'
                    type='password'
                    placeholder='Password' 
                    required
                    value={this.state.password}
                    onChange={this.editSignInForm}
                    name='password'
                />
                <button onClick={this.signIn}>Done</button>
            </form>

            <p>{this.props.message}</p>
        </div>)
    }
}


const mapStatetoProps = state => ({
    message: state.login.message,
    token: state.login.token,
    isLoggingIn: state.login.isLoggingIn,
    error: state.login.error,
    status: state.login.status,
})
  
export default connect(mapStatetoProps, { login })(SignIn)

