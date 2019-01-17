import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { customerLogin } from './actions';
import {
    getUserLoginState,
    getUserLoginErrorState,
} from './selectors';

export class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            phone: null,
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.login('+94777610577');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.loginSuccess !== this.props.loginSuccess) {
            console.log('xxxx', this.props.loginSuccess)
        }

        if (prevProps.loginError !== this.props.loginError) {
            console.log('Error', this.props.loginError.message)
        }
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

SignIn.propTypes = {
    login: PropTypes.func,
    loginSuccess: PropTypes.object,
    loginError: PropTypes.object,
};

SignIn.defaultProps = {
    login: null,
    loginSuccess: null,
    loginError: null,
};

const mapStateToProps = createStructuredSelector({
    loginSuccess: getUserLoginState(),
    loginError: getUserLoginErrorState(),
});

const mapDispatchToProps = dispatch => ({
    login: data => {
        dispatch(customerLogin(data));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
