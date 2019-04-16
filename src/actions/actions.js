import { dispatch } from "../../../../AppData/Local/Microsoft/TypeScript/3.4/node_modules/rxjs/internal/observable/pairs";

export const GET_STORY = 'GET_STORY';
export const POST_STORY = 'POST_STORY';
export const DELETE_STORY = 'DELETE_STORY';
export const PUT_STORY = 'PUT_STORY';
export const FILTER_STORY = 'FILTER_STORY'

export const getStory = stories  => {
    return {
        type: GET_STORY,
        stories
    }
}

export const addStory = story => {
    return {
        type: POST_STORY,
        story
    }
}

export const deleteStory = index => {
    return {
        type: DELETE_STORY,
        index
    }
}

export const putStory = (index, story) => {
    return {
        type: PUT_STORY,
        index,
        story
    }
}

export const filterStory = country => {
    return {
        type: FILTER_STORY,
        country
    }
}