import React from 'react'

import { getStory, fetchStory } from '../actions/actions'
import { connect } from 'react-redux'

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            email: "",
            password: "",
            firstName: "",
            lastName: "",
        }
    }

    editRegisterForm = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    register = event => {

    }

    render = () => {
        return (
        <div>
            <h1>Let's Create Your Profile!</h1>
            <form>
                
                <input 
                    type='text'
                    placeholder='First Name' 
                    required
                    value={this.state.firstName}
                    onChange={this.editRegisterForm}
                    name='firstName'
                />

                
                <input 
                    type='text'
                    placeholder='Last Name' 
                    required
                    value={this.state.lastName}
                    onChange={this.editRegisterForm}
                    name='lastName'
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
        </div>)
    }
}


const mapStatetoProps = state => ({
    stories: state.stories,
})
  
export default connect(mapStatetoProps, { getStory, fetchStory })(Register)

