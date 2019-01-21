import {
    CUSTOMER_LOGIN,
    CUSTOMER_LOGIN_SUCCESS,
    CUSTOMER_LOGIN_FAILED,
    VERIFY_PHONE,
    VERIFY_PHONE_SUCCESS,
    VERIFY_PHONE_FAILED,
} from '../../constants/action_types/customer';

const customerLogin = phone => ({
    type: CUSTOMER_LOGIN,
    phone,
});

const customerLoginSuccess = response => ({
    type: CUSTOMER_LOGIN_SUCCESS,
    response,
});

const customerLoginFailed = error => ({
    type: CUSTOMER_LOGIN_FAILED,
    error,
});

const verifyPhonee = data => ({
    type: VERIFY_PHONE,
    data,
});

const verifyPhoneSuccess = response => ({
    type: VERIFY_PHONE_SUCCESS,
    response,
});

const verifyPhoneFailed = error => ({
    type: VERIFY_PHONE_FAILED,
    error,
});

export {
    customerLogin,
    customerLoginSuccess,
    customerLoginFailed,
    verifyPhonee,
    verifyPhoneSuccess,
    verifyPhoneFailed,
};
