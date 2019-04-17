import React from 'react'
import Axios from 'axios';
// import './styles/Register.css'
// import { register } from '../actions/register'
// import { connect } from 'react-redux'

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
        Axios.post('https://ourstory-api.herokuapp.com/api/auth/login', this.state)
        .then(res => {
            console.dir(res)
        })
        .catch(error => {
            console.dir(error.response.data.error)
        })
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


// const mapStatetoProps = state => ({
//     message: state.register.message,
//     token: state.register.token,
//     isRegistering: state.register.isRegistering,
//     error: state.register.error,
//     status: state.register.status
// })
  
// export default connect(mapStatetoProps, { register })(Register)

export default SignIn