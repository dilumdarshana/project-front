import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import Loadable from 'react-loadable';
import Layout from './layout';
import {history} from './store';

import UsersList from './containers/users/users_list';
import SignUp from './containers/customer_login/signup';

import LoadingComponent from './components/common/loading';
import AuthRoute from './components/authRoute';

const SignIn = Loadable({
    loader: () => import('./containers/customer_login/signin'),
    loading: LoadingComponent
});

const Routes = () => (
    <ConnectedRouter history={history}>
        <Layout>
            <Switch>
                <Route path="/login" component={SignIn} />
                <Route path="/signup" component={SignUp} />

                <AuthRoute roles={['CUSTOMER']}>
                    <Route path="/users" component={UsersList} />
                </AuthRoute>
            </Switch>
        </Layout>
    </ConnectedRouter>
);

export default Routes;
