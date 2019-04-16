import React from 'react'

import Story from './Story'
import { getStory } from '../actions/actions'
import { connect } from 'react-redux'
import { NavLink, Route, Link  } from 'react-router-dom'

class Stories extends React.Component {
    render = () => (
        <div className='Stories'>   
            {
                this.props.stories.map(story => (
                    <div className='story-preview' key={story.id}>
                        <h3>{story.title}</h3>
                        <p>{story.description}</p>
                        <Link to={`/stories/${story.id}`}>Continue Reading</Link>
                    </div>
                ))
            }
        </div>
    )
}

const mapStatetoProps = state => ({
    stories: state.stories
})

export default connect(mapStatetoProps, { getStory })(Stories)