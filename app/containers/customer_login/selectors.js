import { createSelector } from 'reselect';

const selectCustomerLoginState = state => state.customerLogin;

const getUserLoginState = () => createSelector(
    selectCustomerLoginState,
    currentState => currentState.customerLoginStatus,
);

const getUserLoginErrorState = () => createSelector(
    selectCustomerLoginState,
    currentState => currentState.customerLoginError,
);

export {
    getUserLoginState,
    getUserLoginErrorState,
};
