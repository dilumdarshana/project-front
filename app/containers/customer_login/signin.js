import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { history } from '../../store';
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { loginSuccess: loginSuccessPrev, loginError: loginErrorPrev } = prevProps;
        const { loginSuccess, loginError } = this.props;

        if (loginSuccessPrev !== loginSuccess) {
            if (loginSuccess) {
                history.push('/verify');
            }
        }

        if (loginErrorPrev !== loginError) {
            // console.log('Error', this.props.loginError.message);
        }
    }

    addFormData(e) {
        this.setState({ phone: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { props: { login }, state: { phone } } = this;

        login(phone);
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <h3>Login</h3>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Phone*" onChange={e => this.addFormData(e)} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        );
    }
}

SignIn.propTypes = {
    login: PropTypes.func,
    loginSuccess: PropTypes.bool,
    loginError: PropTypes.string,
};

SignIn.defaultProps = {
    login: null,
    loginSuccess: false,
    loginError: null,
};

const mapStateToProps = createStructuredSelector({
    loginSuccess: getUserLoginState(),
    loginError: getUserLoginErrorState(),
});

const mapDispatchToProps = dispatch => ({
    login: data => dispatch(customerLogin(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
