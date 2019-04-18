import * as StoryAction from '../actions/userStories'
const initialState = {
    myStories: [],
    isFetching: false,
    error: '',

    
    isCreating: false,
    newStory: '',

    filteredStories: []
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case StoryAction.FETCH_USER_STORY_START: 
        console.log(action)
        return {
            ...state,
            error: '',
            isFetching: true
        }

        case StoryAction.FETCH_USER_STORY_SUCCESS: 
        return {
            myStories: action.payload,
            error: '',
            isFetching: false
        }

        case StoryAction.FETCH_USER_STORY_FAILURE: 
        return {
            ...state,
            error: 'Failed to get myStories, please try again!',
            isFetching: false
        }

        
        case StoryAction.POST_USER_STORY_START: 
        return {
            ...state,
            newStory: '',
            error: 'Failed to get myStories, please try again!',
            isCreating: false
        }

        
        case StoryAction.POST_USER_STORY_SUCCESS: 
        return {
            ...state,
            myStories: [...state.myStories, action.newStory],
            newStory: action.newStory,
            error: 'Failed to get myStories, please try again!',
            isCreating: false
        }

        
        case StoryAction.POST_USER_STORY_FAILURE: 
        return {
            ...state,
            newStory: '',
            error: 'Failed to get myStories, please try again!',
            isCreating: false
        }

        default:
        return state
    }
}

export default reducer