import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

const SurveyList = ({ surveys, fetchSurveys }) => {
    useEffect(() => {
        fetchSurveys();
    }, [fetchSurveys]);

    function renderSurveys() {
        return surveys.reverse().map((survey) => {
            return (
                <div className="card darken-1" key={survey._id}>
                    <div className="card-content">
                        <span className="card-title">{survey.title}</span>
                    </div>
                    <div className="card-content">
                        <p>{survey.body}</p>
                        <p className="right">Sent on: {new Date(survey.dateSent).toLocaleDateString()}</p>
                    </div>
                    <div className="card-action">
                        <a>Yes: {survey.yes}</a>
                        <a>No: {survey.no}</a>
                    </div>
                </div>
            );
        });
    }

    return (
        <>{renderSurveys()}</>
    );
};

function mapStateToProps({ surveys }) {
    return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
