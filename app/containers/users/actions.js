import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAILED,
} from '../../constants/action_types/users';

const getUsers = () => ({
    type: GET_USERS,
});

const getUsersSuccess = users => ({
    type: GET_USERS_SUCCESS,
    users,
});

const getUsersFailed = error => ({
    type: GET_USERS_FAILED,
    error,
});

export {
    getUsers,
    getUsersSuccess,
    getUsersFailed,
};
