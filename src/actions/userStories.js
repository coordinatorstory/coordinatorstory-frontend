// import Axios from "axios";
import axiosWithAuth from '../utils/axiousAuth';

// LIVE DATA

export const FETCH_USER_STORY_START = 'FETCH_USER_STORY_START';
export const FETCH_USER_STORY_SUCCESS = 'FETCH_USER_STORY_SUCCESS';
export const FETCH_USER_STORY_FAILURE = 'FETCH_USER_STORY_FAILURE';

export const getUserStories = () => dispatch => {
    dispatch({
        type: FETCH_USER_STORY_START
    });
    axiosWithAuth()
    .get(`https://ourstory-api.herokuapp.com/api/user/stories`)
    .then(res => {
        dispatch({
            type: FETCH_USER_STORY_SUCCESS,
            payload: res.data
        })
    })
    .catch(error => {
        dispatch({
            type: FETCH_USER_STORY_FAILURE,
            payload: error
        })
    })
}


export const POST_USER_STORY_START = 'POST_USER_STORY_START';
export const POST_USER_STORY_SUCCESS = 'POST_USER_STORY_SUCCESS';
export const POST_USER_STORY_FAILURE = 'POST_USER_STORY_FAILURE';

export const postUserStories = newStory => dispatch => {
    dispatch({
        type: POST_USER_STORY_START
    });
    axiosWithAuth()
    .post(`https://ourstory-api.herokuapp.com/api/user/stories`, newStory)
    .then(res => {
        dispatch({
            type: POST_USER_STORY_SUCCESS,
            newStory: res.data
        })
    })
    .catch(error => {
        dispatch({
            type: POST_USER_STORY_FAILURE,
            error: error
        })
    })
}


export const DELETE_USER_STORY_START = 'DELETE_USER_STORY_START';
export const DELETE_USER_STORY_SUCCESS = 'DELETE_USER_STORY_SUCCESS';
export const DELETE_USER_STORY_FAILURE = 'DELETE_USER_STORY_FAILURE';

export const deleteUserStories = (index, storyid) => dispatch => {
    dispatch({
        type: DELETE_USER_STORY_START
    });
    axiosWithAuth()
    .delete(`https://ourstory-api.herokuapp.com/api/user/stories/${storyid}`)
    .then(res => {
        dispatch({
            type: DELETE_USER_STORY_SUCCESS,
            index: index
        })
    })
    .catch(error => {
        dispatch({
            type: DELETE_USER_STORY_FAILURE,
            error: error
        })
    })
}