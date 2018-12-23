import { takeEvery, put, call } from 'redux-saga/effects';
import {
    GET_USERS,
} from '../../constants/action_types/users';
import {
    getUsersSuccess,
    getUsersFailed,
} from './actions';
import httpRequests from '../../helpers/httpRequests';

export function* getUsers() {
    try {
        const result = yield call(httpRequests.getUsers);
        yield put(getUsersSuccess(result.data.data));
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('error', error);
        yield put(getUsersFailed(error));
    }
}

export default function* usersSagas() {
    yield* [
        takeEvery(GET_USERS, getUsers),
    ];
}
