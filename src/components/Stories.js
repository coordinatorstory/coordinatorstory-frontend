import React from 'react'
import { getStory } from '../actions/actions'
import { connect } from 'react-redux'
class Stories extends React.Component {
    // constructor() {
    //     super()
    // }

    componentDidMount = () => {
        this.props.getStory(
            [{
                title: "My niece needs your help",
                country: "USA",
                description: "My niece is in the hospital, please help her with his medical fee",
                date: Date()
            }]
        )

        
        console.log(this.props)
    }

    render = props => (
        <div>Stories
            {
                this.props.stories.map(story => (
                    <div>{story.title}</div>
                ))
            }
        </div>
    )
}

const mapStatetoProps = state => ({
    stories: state.stories
})

export default connect(mapStatetoProps, { getStory })(Stories)