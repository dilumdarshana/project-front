import {
    CUSTOMER_LOGIN,
    CUSTOMER_LOGIN_SUCCESS,
    CUSTOMER_LOGIN_FAILED,
} from '../constants/action_types/customer';

const customerLogin = () => ({
    type: CUSTOMER_LOGIN
});

const customerLoginSuccess = () => ({
    type: CUSTOMER_LOGIN_SUCCESS
});

const customerLoginFailed = error => ({
    type: CUSTOMER_LOGIN_FAILED,
    error
});

export {
    customerLogin,
    customerLoginSuccess,
    customerLoginFailed
}
