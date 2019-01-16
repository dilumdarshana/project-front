import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            phone: null,
        };
    }

    handleSubmit(e) {
        e.preventDefault();


    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <h3>Login</h3>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Phone*" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>

        );
    }
}

export default connect(null, null)(SignIn);
