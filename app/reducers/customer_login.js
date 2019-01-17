import {
    CUSTOMER_LOGIN,
    CUSTOMER_LOGIN_SUCCESS,
    CUSTOMER_LOGIN_FAILED,
} from '../constants/action_types/customer';

const initialState = {
    customerLoginStatus: null,
    customerLoginError: null,
};

export default function customerLogin(state = initialState, action) {
    switch (action.type) {
        case CUSTOMER_LOGIN:
            return { ...state, customerLoginStatus: null, customerLoginError: null };
        case CUSTOMER_LOGIN_SUCCESS:
            return { ...state, customerLoginStatus: action.response };
        case CUSTOMER_LOGIN_FAILED:
            return { ...state, customerLoginError: action.error };
        default:
            return state;
    }
}
