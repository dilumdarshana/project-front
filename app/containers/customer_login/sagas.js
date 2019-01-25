import { takeEvery, put, call } from 'redux-saga/effects';
import {
    CUSTOMER_LOGIN,
    VERIFY_PHONE,
} from '../../constants/action_types/customer';
import {
    customerLoginSuccess,
    customerLoginFailed,
    verifyPhoneSuccess,
    verifyPhoneFailed,
} from './actions';
import httpRequests from '../../helpers/httpRequests';

export function* customerLogin(data) {
    try {
        const result = yield call(httpRequests.customerLogin, { phone: data.phone });

        yield put(customerLoginSuccess(result.data));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error', error);
        yield put(customerLoginFailed(error));
    }
}

export function* verifyPhone(data) {
    try {
        const result = yield call(httpRequests.verifyPhone, data.data);

        yield put(verifyPhoneSuccess(result.data));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error', error);
        yield put(verifyPhoneFailed(error));
    }
}

export default function* usersSagas() {
    yield* [
        takeEvery(CUSTOMER_LOGIN, customerLogin),
        takeEvery(VERIFY_PHONE, verifyPhone),
    ];
}
