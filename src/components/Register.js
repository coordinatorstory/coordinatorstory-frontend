import React from 'react'

import { register } from '../actions/register'
import { connect } from 'react-redux'

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            email: "",
            password: "",
            first_name: "",
            last_name: "",
        }
    }

    editRegisterForm = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    register = event => {
        event.preventDefault()
        // this.props.register(this.state)
        // if (this.props.status === 201) this.setState({
        //     username: "",
        //     email: "",
        //     password: "",
        //     first_name: "",
        //     last_name: "",
        // })
    }

    render = () => {
        console.log(this.props.status)

        return (
        <div>
            <h1>Let's Create Your Profile!</h1>
            <form>
                
                <input 
                    type='text'
                    placeholder='First Name' 
                    required
                    value={this.state.first_name}
                    onChange={this.editRegisterForm}
                    name='first_name'
                />

                
                <input 
                    type='text'
                    placeholder='Last Name' 
                    required
                    value={this.state.last_name}
                    onChange={this.editRegisterForm}
                    name='last_name'
                />

                <input 
                    type='text'
                    placeholder='Username'
                    minLength='3' 
                    required
                    value={this.state.username}
                    onChange={this.editRegisterForm}
                    name='username'
                />            

                <input 
                    type='email'
                    placeholder='Email' 
                    required
                    value={this.state.email}
                    onChange={this.editRegisterForm}
                    name='email'
                />             
    
                <input 
                    minLength='6'
                    type='password'
                    placeholder='Password' 
                    required
                    value={this.state.password}
                    onChange={this.editRegisterForm}
                    name='password'
                />
                <button onClick={this.register}>Done</button>
            </form>

            <p>{this.props.message}</p>
        </div>)
    }
}


const mapStatetoProps = state => ({
    message: state.register.message,
    token: state.register.token,
    isRegistering: state.register.isRegistering,
    error: state.register.error,
    status: state.register.status
})
  
export default connect(mapStatetoProps, { register })(Register)

