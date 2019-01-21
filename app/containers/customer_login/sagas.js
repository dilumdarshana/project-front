import { takeEvery, put, call } from 'redux-saga/effects';
import {
    CUSTOMER_LOGIN,
    VERIFY_PHONE,
} from '../../constants/action_types/customer';
import {
    customerLoginSuccess,
    customerLoginFailed,
} from './actions';
import httpRequests from '../../helpers/httpRequests';

export function* customerLogin(data) {
    try {
        const result = yield call(httpRequests.customerLogin, data.phone);
        yield put(customerLoginSuccess(result.data));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error', error);
        yield put(customerLoginFailed(error));
    }
}

export function* verifyPhone(data) {
    try {
        console.log('calling saga')
    } catch(error) {
        console.log('error', error);
    }
}

export default function* usersSagas() {
    yield* [
        takeEvery(CUSTOMER_LOGIN, customerLogin),
        takeEvery(VERIFY_PHONE, verifyPhone),
    ];
}
