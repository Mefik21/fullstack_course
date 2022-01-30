import React from 'react';
import { connect } from 'react-redux';
import { formFields } from './formFields';
import * as actions from '../../actions/index';
import { useNavigate } from 'react-router-dom';

const SurveyFormReview = (props) => {
    const { onSurveyCancel, formValues, submitSurvey } = props;

    let navigate = useNavigate();

    function renderFields() {
        return formFields.map(({ title, name }) => {
            return (
                <div key={name}>
                    <label>{title}</label>
                    <div>{formValues[name]}</div>
                </div>
            );
        });
    }

    return (
        <div>
            Подтвердите заполенные данные для отправки
            {renderFields()}
            <button className="yellow darken-3 btn-flat" onClick={onSurveyCancel}>
                Вернутся
            </button>
            <button
                className="btn waves-effect waves-light right pulse"
                type="submit"
                name="action"
                onClick={() => submitSurvey(formValues, navigate)}>
                Submit
                <i className="material-icons right">send</i>
            </button>
        </div>
    );
};

function mapStatetoProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStatetoProps, actions)(SurveyFormReview);
