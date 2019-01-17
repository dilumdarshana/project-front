import {
    CUSTOMER_LOGIN,
    CUSTOMER_LOGIN_SUCCESS,
    CUSTOMER_LOGIN_FAILED,
} from '../../constants/action_types/customer';

const customerLogin = phone => ({
    type: CUSTOMER_LOGIN,
    phone
});

const customerLoginSuccess = response => ({
    type: CUSTOMER_LOGIN_SUCCESS,
    response
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
