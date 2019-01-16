import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAILED,
} from '../constants/action_types/users';

const initialState = {
    users: [],
    getUsersError: null,
};

export default function users(state = initialState, action) {
    switch (action.type) {
    case GET_USERS:
        return { ...state, users: [] };
    case GET_USERS_SUCCESS:
        return { ...state, users: action.users };
    case GET_USERS_FAILED:
        return { ...state, users: [], getUsersError: action.error };
    default:
        return state;
    }
}
