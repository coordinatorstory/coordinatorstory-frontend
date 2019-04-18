import * as StoryAction from '../actions/actions'
const initialState = {
    stories: [],
    isFetching: false,
    error: '',
    filteredStories: []
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case StoryAction.FETCH_STORY_START: 
        console.log(action)
        return {
            ...state,
            error: '',
            isFetching: true
        }

        case StoryAction.FETCH_STORY_SUCCESS: 
        return {
            stories: action.payload,
            error: '',
            isFetching: false
        }

        case StoryAction.FETCH_STORY_FAILURE: 
        return {
            ...state,
            error: 'Failed to get stories, please try again!',
            isFetching: false
        }

        default:
        return state
    }
}

export default reducer