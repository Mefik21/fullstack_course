import { combineReducers } from 'redux';
import authReducer from './authReducer';
import surveysReducers from './surveysReducers';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    surveys: surveysReducers
});
