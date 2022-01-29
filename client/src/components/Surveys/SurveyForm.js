import React from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../utils/validateEmails';
import {formFields} from './formFields'

const SurveyForm = (props) => {
    function renderFields() {
        return formFields.map(({ title, name }) => {
            return <Field label={title} type="text" name={name} key={name} component={SurveyField} />;
        });
    }

    return (
        <div>
            <form action="" onSubmit={props.handleSubmit(props.onSurveySubmit)}>
                {renderFields()}
                <Link to="/surveys" className="red btn waves-effect left waves-light">
                    Cancel
                </Link>
                <button className="btn waves-effect right waves-light" type="submit" name="action">
                    Next
                    <i className="material-icons right">done</i>
                </button>
            </form>
        </div>
    );
};

function validate(values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    formFields.forEach(({ name }) => {
        if (!values[name]) {
            errors[name] = `Поле должно содеражить ${name}`;
        }
    });


    return errors;
}

export default reduxForm({
    form: 'surveyForm',
    validate,
    destroyOnUnmount: false
})(SurveyForm);
