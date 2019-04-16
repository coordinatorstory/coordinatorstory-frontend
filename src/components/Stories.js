import React from 'react'

import Story from './Story'
import { getStory } from '../actions/actions'
import { connect } from 'react-redux'
import { NavLink, Route, Link  } from 'react-router-dom'

class Stories extends React.Component {

    constructor() {
        super()
        this.state={
            countries: ["Bolivia", "Brazil", "Cambodia", "Colombia", "Ecuador", "El Salvador", "Ghana", "Guatemala", "Haiti", "Honduras", "Kiribati", "Madagascar", "Mongolia", "Nicaragua", "Paraguay", "Peru", "Philippines", "Sierra Leone", "Zimbabwe"]
        }
    }

    render = () => (
        <div className='stories-container'>
            <select>
                {this.state.countries.map(country => <option>{country}</option>)}
            </select>
            <ul className='stories-list'>
                {
                    this.props.stories.map(story => (
                        <li className='story-preview' key={story.id}>
                            <h3>{story.title}</h3>
                            <p>{story.description}</p>
                            <Link to={`/stories/${story.id}`}>Continue Reading</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

const mapStatetoProps = state => ({
    stories: state.stories
})

export default connect(mapStatetoProps, { getStory })(Stories)