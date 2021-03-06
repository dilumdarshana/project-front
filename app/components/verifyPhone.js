import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { history } from '../store';
import browserStorage from '../helpers/browserStorage';
import {
    verifyPhone,
} from '../containers/customer_login/actions';
import {
    getCustomerPhoneVerifyState,
    getVerifiedCustomerState,
    getVerifyCustomerErrorState,
} from '../containers/customer_login/selectors';

export class VerifyPhone extends Component {
    constructor(props) {
        super(props);

        this.state = {
            code: null,
        };
    }

    componentDidMount() {
        const { phone, onDirectAccess } = this.props;
        if (!phone) {
            history.push(onDirectAccess);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { verifyStatus: verifyStatusPrev, verifyCustomerError: verifyCustomerErrorPrev } = prevProps;
        const {
            verifyStatus, onSuccess, verifiedCustomer, verifyCustomerError,
        } = this.props;

        if (verifyStatusPrev !== verifyStatus) {
            if (verifyStatus) {
                onSuccess();
            }
            if (verifiedCustomer) {
                browserStorage.setLocalStorage('lst_token', verifiedCustomer.data);
            }
        }

        if (verifyCustomerErrorPrev !== verifyCustomerError) {
            // TODO...
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
    verifiedCustomer: PropTypes.object,
    verifyStatus: PropTypes.bool,
    verifyCustomerError: PropTypes.string,
    onSuccess: PropTypes.func,
    onDirectAccess: PropTypes.func,
};

VerifyPhone.defaultProps = {
    verify: null,
    phone: null,
    verifiedCustomer: null,
    verifyStatus: false,
    verifyCustomerError: null,
    onSuccess: null,
    onDirectAccess: null,
};

const mapStateToProps = createStructuredSelector({
    verifyStatus: getCustomerPhoneVerifyState(),
    verifiedCustomer: getVerifiedCustomerState(),
    verifyCustomerError: getVerifyCustomerErrorState(),
});

const mapDispatchToProps = dispatch => ({
    verify: data => dispatch(verifyPhone(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VerifyPhone);
