import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import users from './users';
import customerLogin from './customer_login';

const rootReducer = combineReducers({
    users,
    customerLogin,
    form: formReducer,
});

export default rootReducer;
