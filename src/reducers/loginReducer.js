// import * as Action from '../actions/register' 
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/login'
const initialState = {
    message: "",
    token: "",
    isLoggingIn: false,
    error: '',
    status: null,
}


const login = (state=initialState, action) => {
    switch(action.type) {
        case LOGIN_START: 
        console.log(action)
        return {
            message: 'Creating Your Profile ...',
            token: '',
            error: '',
            isLoggingIn: true
        }

        case LOGIN_SUCCESS: 
        return {
            message: action.message,
            token: action.token,
            error: '',
            isLoggingIn: false,
            status: action.status
        }

        case LOGIN_FAILURE: 
        return {
            message: action.error ? action.error : 'Something went wrong, please try again!' ,
            token: '',
            error: action.error,
            status: action.status,
            isLoggingIn: false
        }

        default:
        return state
    }
}

export default login