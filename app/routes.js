import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Loadable from 'react-loadable';
import Layout from './layout';
import { history } from './store';

import LoadingComponent from './components/common/loading';
import AuthRoute from './components/authRoute';

const SignIn = Loadable({
    loader: () => import('./containers/customer_login/signin'),
    loading: LoadingComponent,
});

const SignUp = Loadable({
    loader: () => import('./containers/customer_login/signup'),
    loading: LoadingComponent,
});
const Verify = Loadable({
    loader: () => import('./containers/customer_login/verify'),
    loading: LoadingComponent,
});

const CustomerProfile = Loadable({
    loader: () => import('./components/customerProfile'),
    loading: LoadingComponent,
});

const Routes = () => (
    <ConnectedRouter history={history}>
        <Layout>
            <Switch>
                <Route path="/login" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/verify" component={Verify} />

                <AuthRoute roles={['CUSTOMER']}>
                    <Route path="/profile" component={CustomerProfile} />
                </AuthRoute>
            </Switch>
        </Layout>
    </ConnectedRouter>
);

export default Routes;
