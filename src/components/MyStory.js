import React from 'react'
import { connect } from 'react-redux'
import { getUserStories, postUserStories, deleteUserStories } from '../actions/userStories'
import { NavLink } from 'react-router-dom'

class MyStory extends React.Component {
    constructor() {
        super()
        this.state = {
            Stories: [],
            selectedCountry: 'Bolivia',
            description: '',
            title: '',
            countries: ["Bolivia", "Brazil", "Cambodia", "Colombia", "Ecuador", "El Salvador", "Ghana", "Guatemala", "Haiti", "Honduras", "Kiribati", "Madagascar", "Mongolia", "Nicaragua", "Paraguay", "Peru", "Philippines", "Sierra Leone", "Zimbabwe"],
        }
    }
    
    componentDidMount() {
        this.props.getUserStories()
    }
    editStory = event => {
        this.setState({
            [event.target.name]:event.target.value
        })
        console.dir(this.state)
    }

    createStory = event => {
        event.preventDefault()
        this.props.postUserStories({
            title: this.state.title,
            description: this.state.description,
            country: this.state.selectedCountry
        })

    }
    render = props => {
        return (
            <div>
                <form className="stories-filter signin-view">
                    <label>Create New Story</label>
                    
                    
                    <input 
                        type='text'
                        placeholder='Title'
                        minLength='3' 
                        required
                        value={this.state.title}
                        onChange={this.editStory}
                        name='title'
                    />           


                    <select 
                        onChange={this.editStory}
                        value={this.state.selectedCountry}
                        placeholder="Select a Country"
                        name='selectedCountry'
                    >
                        {this.state.countries.map(country => <option key={country}>{country}</option>)}
                    </select>


                    <textarea
                    
                        type='text'
                        placeholder='description'
                        minLength='3' 
                        required
                        value={this.state.description}
                        onChange={this.editStory}
                        name='description'
                    >

                    </textarea>

                    <button onClick={this.createStory}>Create Story</button>
                </form>
                <ul className='stories-list'>
                {
                    this.props.myStories.map((story, index) => (
                        <li className='story-preview' key={story.id}>
                            <h3>{story.title}</h3>
                            <p>{story.description}</p>
                            <NavLink to={`/stories/${story.id}`}>Continue Reading</NavLink>
                            <NavLink>Edit</NavLink>
                            <button onClick={() => this.props.deleteUserStories(index, story.id)}>Remove</button>
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }
} 


const mapStatetoProps = state => {
    console.log(state)
    return {
        myStories: state.userStory.myStories,
    }
} 
  
export default connect(mapStatetoProps, { getUserStories, postUserStories, deleteUserStories })(MyStory)
  

