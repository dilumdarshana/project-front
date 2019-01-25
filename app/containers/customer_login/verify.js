import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import VerifyPhone from '../../components/verifyPhone';
import { history } from '../../store';

import {
    getLoggedCustomer
} from '../../containers/customer_login/selectors';

export class Verify extends Component {

    handleSuccess() {
        history.push('/profile');
    }

    render() {
        const { loggedCustomer: { phone } } = this.props;
        return (
            <VerifyPhone phone={phone} onSuccess={this.handleSuccess} onDirectAccess="/" />
        )
    }
}

Verify.propTypes = {
    loggedCustomer: PropTypes.object,
};

Verify.defaultProps = {
    loggedCustomer: null,
};

const mapStateToProps = createStructuredSelector({
    loggedCustomer: getLoggedCustomer(),
});

export default connect(mapStateToProps, null)(Verify);
