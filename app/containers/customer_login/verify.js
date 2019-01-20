import React, { Component } from 'react';
import { connect } from 'react-redux';
import VerifyPhone from './../../components/verifyPhone';

export class Verify extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <VerifyPhone phone={343434} />
        )
    }
}

export default connect(null, null)(Verify);
