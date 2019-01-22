import React, { Component } from 'react';
import { connect } from 'react-redux';

export class CustomerProfile extends Component {
    render() {

        return(
            <h3>Customer Profile</h3>
        )
    }
}

export default connect(null, null)(CustomerProfile);
