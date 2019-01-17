import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import users from './users';
import customerLogin from './customer_login';

export default history => combineReducers({
    router: connectRouter(history),
    users,
    customerLogin,
    form: formReducer,
});
