import React, { Fragment } from 'react';
import { Redirect, Switch } from 'react-router';
import browserStorage from '../helpers/browserStorage';
import constants from '../constants';

class AuthRoute extends Switch {
    constructor(props) {
        super(props);

        this.state = {
            loggedUSer: null,
        };
    }

    componentWillMount() {
        // check token validity
        const storedData = browserStorage.getLocalStorage('lst_token');

        if (storedData.token) {
            this.setState({ loggedUSer: storedData.user });
        }
    }

    render() {
        const { loggedUSer } = this.state;
        const { roles } = this.props;

        
        return (
            loggedUSer ? <Fragment>{ this.props.children }</Fragment> : <Redirect to="/" />
        );
    }
}

export default AuthRoute;
