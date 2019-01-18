import React, { Component } from 'react';
import { connect } from 'react-redux';

export class VerifyPhone extends Component {
    constructor(props) {
        super(props);

        this.state = {
            code: null,
        }
    }

    handleSubmit(e) {
        e.preventDefault();
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



export default connect(null, null)(VerifyPhone);
