import { combineReducers } from 'redux';
import authReducer from './authReducer';
import projectReducer from './projectReducer';

const rootReduder = combineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReduder;