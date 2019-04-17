// import * as Action from '../actions/register' 
import { REGISTER_START, REGISTER_FAILURE, REGISTER_SUCCESS} from '../actions/register'
const initialState = {
    message: "",
    token: "",
    isRegistering: false,
    error: '',
    status: null,
}


const register = (state=initialState, action) => {
    switch(action.type) {
        case REGISTER_START: 
        console.log(action)
        return {
            message: 'Creating Your Profile ...',
            token: '',
            error: '',
            isRegistering: true
        }

        case REGISTER_SUCCESS: 
        return {
            message: action.message,
            token: action.token,
            error: '',
            isRegistering: false
        }

        case REGISTER_FAILURE: 
        return {
            message: action.error ? action.error : 'Something went wrong, please try again!' ,
            token: '',
            error: action.error,
            status: action.status,
            isRegistering: false
        }

        default:
        return state
    }
}

export default register