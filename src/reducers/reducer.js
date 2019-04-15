import * as StoryAction from '../actions/actions' 
const DONOR = 'DONOR';
const COORDINATOR = 'COORDINATOR';
const initialState = {
    stories: [],
    roles: COORDINATOR
}

export default (state=initialState, action) => {
    switch(action.type) {
        case StoryAction.GET_STORY: 
        return {
            stories: action.stories
        }

        case StoryAction.POST_STORY: 
        return {
            stories: [...state.stories, action.story]
        }

        case StoryAction.DELETE_STORY: 
        return {
            stories: [
                ...state.stories.slice(0, action.index),
                ...state.stories.slice(action.index)
            ]
        }

        case StoryAction.UPDATE_STORY: 
        return {
            stories: [
                ...state.stories.slice(0, action.index),
                action.story,
                ...state.stories.slice(action.index)
            ]
        }

        default:
        return state
    }
}