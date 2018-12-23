import { fork, all } from 'redux-saga/effects';
import usersSagas from './containers/users/sagas';

export default function* rootSaga() {
    return yield all([
        fork(usersSagas),
    ]);
}
