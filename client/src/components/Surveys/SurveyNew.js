import React, { useState } from 'react';
import SurveyForm from './SurveyForm';
import { reduxForm } from 'redux-form';
import SurveyFormReview from './SurveyFormReview';

const SurveyNew = () => {
    const  [formReviewState, setFormReviewState]  = useState({
        showFormReview: false
    });

    function renderContent() {
        if (formReviewState.showFormReview) {
            return <SurveyFormReview onSurveyCancel={() => {
                            setFormReviewState(prevstate => ({
                ...prevstate,
                showFormReview: false
            }))

            }}/>
        }

        return <SurveyForm onSurveySubmit={() => {
            setFormReviewState(prevstate => ({
                ...prevstate,
                showFormReview: true
            }))
        }}/>
    }

    return (
        <div>
            {renderContent()}
        </div>
    );
};

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);
