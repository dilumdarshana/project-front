import React, { Component } from 'react';
import { connect } from 'react-redux';

export class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            phone: null,
        };
    }

    render() {
        return (
            <h3>Login</h3>
        );
    }
}

export default connect(null, null)(SignIn);
