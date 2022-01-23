import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header/Header';
import Landing from './Landing/Landing';


const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

const App = (props) => {
    const { fetchUser } = props;
    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div className={'container'}>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='surveys' element={<Dashboard />} />
                    <Route path='surveys/new' element={<SurveyNew />} />
                </Routes>
            </Router>
        </div>
    );
};
export default connect(null, actions)(App);
