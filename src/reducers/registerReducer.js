import * as Action from '../actions/register' 

const initialState = {
    message: "",
    token: "",
    isRegistering: false,
    error: '',
}


const register = (state=initialState, action) => {
    switch(action.type) {
        case Action.REGISTER_START: 
        console.log(action)
        return {
            message: 'Creating Your Profile ...',
            token: '',
            error: '',
            isRegistering: true
        }

        case Action.REGISTER_SUCCESS: 
        return {
            message: action.message,
            token: action.token,
            error: '',
            isRegistering: false
        }

        case Action.REGISTER_FAILURE: 
        return {
            message: action.error ? action.error : "Something went wrong, please try again!" ,
            token: '',
            error: action.error,
            isRegistering: false
        }

        default:
        return state
    }
}

export default register