import { combineReducers } from 'redux'
import story from './reducer'
import register from './registerReducer'
import login from './loginReducer'

export default combineReducers({
    story,
    register,
    login
})