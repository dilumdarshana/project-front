import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Can not be empty';
    }
    if (!values.lastName) {
        errors.lastName = 'Can not be empty';
    }
    if (!values.description) {
        errors.description = 'Can not be empty';
    }
    return errors;
};

const renderField = ({
    input, label, type, meta: { touched, error, warning },
}) => (
    <div>
        <label htmlFor={input.name} className="control-label">{ label }</label>
        <div>
            <input {...input} placeholder={label} type={type} className="form-control" />
            { touched && ((error && <span className="text-danger">{ error }</span>) || (warning && <span>{ warning }</span>)) }
        </div>
    </div>
);

const renderTextarea = ({
    input, label, type, meta: { touched, error, warning },
}) => (
    <div>
        <label htmlFor={input.name} className="control-label">{ label }</label>
        <div>
            <textarea {...input} placeholder={label} className="form-control" />
            { touched && ((error && <span className="text-danger">{ error }</span>) || (warning && <span>{ warning }</span>)) }
        </div>
    </div>
);

let UserForm = (props) => {
    const {
        handleSubmit, pristine, submitting, cancel,
    } = props;

    return (
        <div className="modal-form-wrapper">
            <p>Add new user</p>
            <form onSubmit={handleSubmit} method="POST">
                <div className="form-group">
                    <Field name="firstName" component={renderField} label="First Name" type="text" />
                </div>
                <div className="form-group">
                    <Field name="lastName" component={renderField} label="Last Name" type="text" />
                </div>
                {/* <div className="form-group">
                    <Field name="description" component={ renderTextarea } label="Description" />
                </div> */}
                <div className="form-group">
                    <button type="submit" disabled={submitting} className="btn btn-primary float-left">Submit</button>
                    <button type="button" onClick={cancel} className="btn btn-danger float-right">Cancel</button>
                </div>
            </form>
        </div>
    );
};

UserForm = reduxForm({
    form: 'user_form',
    enableReinitialize: true,
    validate,
})(UserForm);

const selector = formValueSelector('user_form');

UserForm = connect((state) => {
    console.log('state', state);

    const formData = selector(state, 'firstName', 'lastName', 'description');

    return {
        formData,
    };
})(UserForm);

export default UserForm;
