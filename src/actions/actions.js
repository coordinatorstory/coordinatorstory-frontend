import { dispatch } from "../../../../AppData/Local/Microsoft/TypeScript/3.4/node_modules/rxjs/internal/observable/pairs";

export const GET_STORY = 'GET_STORY';
export const ADD_STORY = 'ADD_STORY';
export const REMOVE_STORY = 'REMOVE_STORY';
export const UPDATE_STORY = 'UPDATE_STORY';

export const getStory = stories  => {
    return {
        type: GET_STORY,
        stories
    }
}

export const addStory = story => {
    return {
        type: ADD_STORY,
        story
    }
}

export const removeStory = index => {
    return {
        type: REMOVE_STORY,
        index
    }
}

export const updateStory = (index, story) => {
    return {
        type: UPDATE_STORY,
        index,
        story
    }
}