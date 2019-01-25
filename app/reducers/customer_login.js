import {
    CUSTOMER_LOGIN,
    CUSTOMER_LOGIN_SUCCESS,
    CUSTOMER_LOGIN_FAILED,
    VERIFY_PHONE,
    VERIFY_PHONE_SUCCESS,
    VERIFY_PHONE_FAILED,
} from '../constants/action_types/customer';

const initialState = {
    loggedCustomer: {},
    customerLoginStatus: false,
    customerLoginError: null,
    verifyPhoneResults: null,
    verifyPhoneError: null,
    verifyPhoneStatus: false,
};

export default function customerLogin(state = initialState, action) {
    switch (action.type) {
        case CUSTOMER_LOGIN:
            return { ...state, customerLoginStatus: null, customerLoginError: null };
        case CUSTOMER_LOGIN_SUCCESS:
            return { ...state, loggedCustomer: action.response.data, customerLoginStatus: action.response.status };
        case CUSTOMER_LOGIN_FAILED:
            return { ...state, customerLoginError: action.error };
        case VERIFY_PHONE:
            return { ...state };
        case VERIFY_PHONE_SUCCESS:
            return { ...state, verifyPhoneResults: action.response, verifyPhoneStatus: action.response.status };
        case VERIFY_PHONE_FAILED:
            return { ...state, verifyPhoneError: action.error };

        default:
            return state;
    }
}
