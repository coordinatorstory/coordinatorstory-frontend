import * as StoryAction from '../actions/actions' 
const DONOR = 'DONOR';
const COORDINATOR = 'COORDINATOR';
const initialState = {
    stories: [],
    filteredStories: [],
    roles: DONOR,
}

export default (state=initialState, action) => {
    switch(action.type) {
        case StoryAction.GET_STORY: 
        console.log(action)
        return {
            stories: action.stories,
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

        case StoryAction.PUT_STORY: 
        return {
            stories: [
                ...state.stories.slice(0, action.index),
                action.story,
                ...state.stories.slice(action.index)
            ]
        }

        case StoryAction.FILTER_STORY:
        console.log(action.selectedCountry)
        if (action.selectedCountry === 'All') {
            return { ...state, stories: state.stories }
        }
        else {
            console.log(state.stories.filter(story => story.country === action.selectedCountry))
            return { ...state, filteredStories: state.stories.filter(story => story.countries === action.selectedCountry) }
        }

        default:
        return state
    }
}