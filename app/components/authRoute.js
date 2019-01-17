import React, { Fragment } from 'react';
import { Redirect, Switch } from 'react-router';

class AuthRoute extends Switch {
    constructor(props) {
        super(props);

        this.state = {
            isLogged: false,
        };
    }

    componentWillMount() {
        // check token validity
        this.setState({ isLogged: true });
    }

    render() {
        const { isLogged } = this.state;
        return (
            isLogged ? <Fragment>{ this.props.children }</Fragment> : <Redirect to="/" />
        );
    }
}

export default AuthRoute;
