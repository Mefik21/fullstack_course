import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header/Header';
import Landing from './Landing/Landing';
import Dashboard from './Dashboard/Dashboard';
import SurveyNew from './Surveys/SurveyNew';

const App = (props) => {
    const { fetchUser } = props;

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    return (
        <Router>
            <div className="container">
                <Header />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="surveys" element={<Dashboard />} />
                    <Route path="surveys/new" element={<SurveyNew />} />
                </Routes>
            </div>
        </Router>
    );
};
export default connect(null, actions)(App);
