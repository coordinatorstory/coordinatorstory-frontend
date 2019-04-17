import Axios from 'axios'
export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'

export const register = newUser => dispatch => {
    dispatch({
        type: REGISTER_START
    });
    Axios
    .post('https://ourstory-api.herokuapp.com/api/auth/register', newUser)
    .then(res => {
        dispatch({
            type: REGISTER_SUCCESS,
            message: res.message,
            token: res.token
        })
    })
    .catch(error => {
        dispatch({
            type: REGISTER_FAILURE,
            payload: error
        })
    })
} 