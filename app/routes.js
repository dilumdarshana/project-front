import React from 'react';
import {BrowserRouter, Switch, Route, browserHistory} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import Loadable from 'react-loadable';
import Layout from './layout';
import {history} from './store';

import UsersList from './containers/users/users_list';
import SignUp from './containers/customer_login/signup';

import LoadingComponent from './components/common/loading';

const SignIn = Loadable({
    loader: () => import('./containers/customer_login/signin'),
    loading: LoadingComponent,
});

const Routes = () => (
    <ConnectedRouter history={history}>
        <Layout>
            <Switch>
                <Route path="/login" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/users" component={UsersList} />
            </Switch>
        </Layout>
    </ConnectedRouter>
);

export default Routes;
