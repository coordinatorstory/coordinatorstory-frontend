import React from 'react'
import { getStory } from '../actions/actions'
import { connect } from 'react-redux'
import { NavLink, Route, Link  } from 'react-router-dom'

const Story = props => {
    const { match : { params :{ id: index} }, stories } = props;
    return stories.filter(story => story.id == index).map(story => (
        <div>
            <h3>{story.title}</h3>
            <p>{story.description}</p>
            <form 
            action="https://www.paypal.com/cgi-bin/webscr" 
            method="post" 
            target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="WGDXBHWLHWZAN" />
                <input type="hidden" name="invoice" value={story.id} />
                <input 
                type="image" 
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" 
                border="0" 
                name="submit" 
                title={"Donate to " + story.title} 
                alt="Donate with PayPal button" />
                <img 
                alt="" 
                border="0" 
                src="https://www.paypal.com/en_US/i/scr/pixel.gif" 
                width="1" 
                height="1" />
            </form>
        </div>)
    )
}
const mapStatetoProps = state => ({
    stories: state.stories
})



export default Story