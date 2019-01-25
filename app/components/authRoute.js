import React, { Fragment } from 'react';
import { Redirect, Switch } from 'react-router';
import BrowserStorage from '../helpers/browserStorage';
import constants from '../constants';

class AuthRoute extends Switch {
    constructor(props) {
        super(props);

        this.state = {
            isRouteAccessible: false,
        };
    }

    componentWillMount() {
        // check token validity
        const storedData = BrowserStorage.getLocalStorage('lst_token');
        const { roles } = this.props;

        const allowedRoles = roles.filter(role => {
            return constants.user_types[role] === storedData.user.type;
        });

        if (storedData.token && allowedRoles.length > 0) {
            this.setState({ isRouteAccessible: true });
        }
    }

    render() {
        const { isRouteAccessible } = this.state;
        
        return (
            isRouteAccessible ? <Fragment>{ this.props.children }</Fragment> : <Redirect to="/" />
        );
    }
}

export default AuthRoute;
