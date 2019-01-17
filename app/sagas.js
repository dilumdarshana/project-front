import { fork, all } from 'redux-saga/effects';
import usersSagas from './containers/users/sagas';
import customerLoginSagas from './containers/customer_login/sagas';

export default function* rootSaga() {
    return yield all([
        fork(usersSagas),
        fork(customerLoginSagas),
    ]);
}
