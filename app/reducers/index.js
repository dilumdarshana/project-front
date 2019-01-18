import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import customerLogin from './customer_login';

export default history => combineReducers({
    router: connectRouter(history),
    customerLogin,
    form: formReducer,
});
