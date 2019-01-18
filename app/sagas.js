import { fork, all } from 'redux-saga/effects';
import customerLoginSagas from './containers/customer_login/sagas';

export default function* rootSaga() {
    return yield all([
        fork(customerLoginSagas),
    ]);
}
