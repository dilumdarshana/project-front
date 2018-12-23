import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserForm from './user_form';

class NewUser extends Component {
    constructor(props) {
        super(props);
    }

    submit(values) {
        // eslint-disable-next-line no-console
        console.log('submit', values);
    }

    render() {
        const { onCancel, user } = this.props;

        const initialFormValues = {
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
        };

        return (
            <UserForm onSubmit={this.submit} cancel={onCancel} initialValues={initialFormValues} />
        );
    }
}

NewUser.prototype = {
    onCancel: PropTypes.func,
};

NewUser.defaultProps = {
    onCancel: null,
};

export default connect(null, null)(NewUser);
