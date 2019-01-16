import {
    CUSTOMER_LOGIN,
    CUSTOMER_LOGIN_SUCCESS,
    CUSTOMER_LOGIN_FAILED,
} from '../constants/action_types/customer';

const initialState = {

};

export default function customer(state = initialState, action) {
    switch(action.type) {
        case CUSTOMER_LOGIN:
            return { ...state, };
        default:
            return state;
    }
}
