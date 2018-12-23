import { createSelector } from 'reselect';

const selectUserState = state => state.users;

const getUsersState = () => createSelector(
    selectUserState,
    currentState => currentState.users,
);

const getUsersErrorState = () => createSelector(
    selectUserState,
    currentState => currentState.getUsersError,
);

export {
    getUsersState,
    getUsersErrorState,
};
