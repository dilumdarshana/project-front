import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import NewUser from './new_user';
import {
    getUsers,
} from './actions';
import {
    getUsersState,
    getUsersErrorState,
} from './selectors';

class UsersList extends Component {
    // If you don’t initialize state and you don’t bind methods,
    // you don’t need to implement a constructor for your React component.
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            showUserModal: false,
            userEdit: []
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleOnEdit = this.handleOnEdit.bind(this);
    }

    componentDidMount() {
        const { props } = this;
        props.getUsers();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { users } = this.props;
        if (users !== prevProps.users) {
            this.setState({ users });
        }
    }

    showModal() {
        this.setState({ showUserModal: true });
    }

    handleOnEdit(e, user) {
        this.setState({ userEdit: user, showUserModal: true });
    }

    hideModal() {
        this.setState({ showUserModal: false });
    }

    render() {
        const { users, showUserModal, userEdit } = this.state;

        const userList = users.map((user) => {
            const {
                id, first_name: firstName, last_name: lastName, avatar,
            } = user;

            return (
                <tr key={id}>
                    <td><img src={avatar} width="15" alt="" /></td>
                    <td>{ firstName }</td>
                    <td>{ lastName }</td>
                    <td><button type="button" className="btn" onClick={(e) => { this.handleOnEdit(e, user); }}>Edit</button></td>
                </tr>
            );
        });

        return (
            <div>
                <h3>Users</h3>
                <button type="button" className="btn float-right" name="Add" onClick={this.showModal}>Add New</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th />
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        { userList }
                    </tbody>
                </table>
                <ReactModal isOpen={showUserModal}>
                    <NewUser onCancel={this.hideModal} user={userEdit} />
                </ReactModal>
            </div>
        );
    }
}

UsersList.propTypes = {
    getUsers: PropTypes.func,
    users: PropTypes.arrayOf(PropTypes.string),
};

UsersList.defaultProps = {
    getUsers: null,
    users: [],
};

const mapStateToProps = createStructuredSelector({
    users: getUsersState(),
});

const mapDispatchToProps = dispatch => ({
    getUsers: () => {
        dispatch(getUsers());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
