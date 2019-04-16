import React from 'react'

import Story from './Story'
import { getStory, filterStory } from '../actions/actions'
import { connect } from 'react-redux'
import { NavLink, Route, Link  } from 'react-router-dom'

class Stories extends React.Component {

    constructor() {
        super()
        this.state = {
            countries: ["All", "Bolivia", "Brazil", "Cambodia", "Colombia", "Ecuador", "El Salvador", "Ghana", "Guatemala", "Haiti", "Honduras", "Kiribati", "Madagascar", "Mongolia", "Nicaragua", "Paraguay", "Peru", "Philippines", "Sierra Leone", "Zimbabwe"],
        }
    }

    filterStoriessByCountry = event => {
        console.log(event.target.value)
        this.props.filterStory(event.target.value)
    }

    render = () => (
        <div className='stories-container'>
            <select onChange={this.filterStoriessByCountry} value={this.state.selectedCountry}>
                {this.state.countries.map(country => <option key={country}>{country}</option>)}
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

export default connect(mapStatetoProps, { getStory, filterStory })(Stories)