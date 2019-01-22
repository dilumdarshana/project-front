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

const getCustomerPhoneVerifyState = () => createSelector(
    selectCustomerLoginState,
    currentState => currentState.verifyPhoneStatus,
);

const getVerifiedCustomerState = () => createSelector(
    selectCustomerLoginState,
    currentState => currentState.verifyPhoneResults,
);

const getVerifyCustomerErrorState = () => createSelector(
    selectCustomerLoginState,
    currentState => currentState.verifyPhoneError,
);

export {
    getLoggedCustomer,
    getUserLoginState,
    getUserLoginErrorState,
    getCustomerPhoneVerifyState,
    getVerifiedCustomerState,
    getVerifyCustomerErrorState,
};
