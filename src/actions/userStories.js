// import Axios from "axios";
import axiosWithAuth from '../utils/axiousAuth';

// LIVE DATA

export const FETCH_STORY_START = 'FETCH_STORY_START';
export const FETCH_STORY_SUCCESS = 'FETCH_STORY_SUCCESS';
export const FETCH_STORY_FAILURE = 'FETCH_STORY_FAILURE';

export const getUserStories = () => dispatch => {
    dispatch({
        type: FETCH_STORY_START
    });
    axiosWithAuth()
    .get(`https://ourstory-api.herokuapp.com/api/user/stories`)
    .then(res => {
        dispatch({
            type: FETCH_STORY_SUCCESS,
            payload: res.data
        })
    })
    .catch(error => {
        dispatch({
            type: FETCH_STORY_FAILURE,
            payload: error
        })
    })
}