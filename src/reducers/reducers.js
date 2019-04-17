import { combineReducers } from 'redux'
import story from './reducer'
import register from './registerReducer'

export default combineReducers({
    story,
    register
})