'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { history } from '../store';
import { 
    verifyPhone,
} from '../containers/customer_login/actions';

export class VerifyPhone extends Component {
    constructor(props) {
        super(props);

        this.state = {
            code: null,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
       
    }

    componentDidMount() {
        const { phone } = this.props;
        if (!phone) {
            history.push('/login');
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        const { phone, verify } = this.props;
        const { code } = this.state;

        verify({ phone, code });
    }

    addFormData(e) {
        this.setState({ code: e.target.value });
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <h3>Verify</h3>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Verification Code*" onChange={e => this.addFormData(e)} />
                </div>
                <button type="submit" className="btn btn-primary">Verify</button>
            </form>
        );
    }
}

VerifyPhone.propTypes = {
    verify: PropTypes.func,
    phone: PropTypes.string,
}

VerifyPhone.defaultProps = {
    phone: null,
}

const mapDispatchToProps = dispatch => ({
    verify: data => dispatch(verifyPhone(data)),
});

export default connect(null, mapDispatchToProps)(VerifyPhone);
