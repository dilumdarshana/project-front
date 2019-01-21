import { createSelector } from 'reselect';

const selectCustomerLoginState = state => state.customerLogin;

const getLoggedCustomer = () => createSelector(
    selectCustomerLoginState,
    currentState => currentState.loggedCustomer,
);

const getUserLoginState = () => createSelector(
    selectCustomerLoginState,
    currentState => currentState.customerLoginStatus,
);

const getUserLoginErrorState = () => createSelector(
    selectCustomerLoginState,
    currentState => currentState.customerLoginError,
);

export {
    getLoggedCustomer,
    getUserLoginState,
    getUserLoginErrorState,
};
