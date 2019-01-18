import React, { Component } from 'react';
import { connect } from 'react-redux';

export class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <h3>Create Account for Free</h3>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name*" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Phone Number*" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Zip Code*" />
                </div>
                <button type="button" className="btn btn-link">Terms of Service</button>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        );
    }
}

export default connect(null, null)(SignUp);
