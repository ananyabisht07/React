import { combineReducers } from 'redux'
import addReducer from './addReducer'
import deleteReducer from './deleteReducer'

const rootReducer = combineReducers({
    add: addReducer,
    delete: deleteReducer
})

export default rootReducer;