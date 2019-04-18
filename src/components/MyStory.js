import React from 'react'
import { connect } from 'react-redux'
import { getUserStories } from '../actions/userStories'

class MyStory extends React.Component {
    constructor() {
        super()
        this.state = {
            Stories: []
        }
    }
    
    componentDidMount() {
        this.props.getUserStories()
    }

    render = props => {
        console.dir(this.props)
        return (
            <div>Hi</div>
        )
    }
} 


const mapStatetoProps = state => {
    console.log(state)
    return {
        stories: state.userStory.stories,
    }
} 
  
export default connect(mapStatetoProps, { getUserStories })(MyStory)
  

