import './header.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from '../Payments/Payments';

const Header = (props) => {
    const {auth} = props;

    function renderContent() {
        switch (auth.user) {
            case null:
                return;
            case false:
                return (
                    <li><a href='/auth/google'>Login With Google</a></li>
                );
            default:
                return (
                    <>
                        <li><Payments/></li>
                        <li>Кредитов на счету: {auth.user.credits}</li>
                        <li><a href='/api/logout'>Logout</a></li>
                    </>
                );
        }
    }

    return (
        <nav>
            <div className='nav-wrapper'>
                <Link to={auth.user ? '/surveys' : '/'} className='brand-logo'>Emaily</Link>
                <ul id='nav-mobile' className='right'>
                    {renderContent()}
                </ul>
            </div>
        </nav>
    );
};

const mapStateToProps = ({ auth }) => {
    return {
        auth
    };
};

export default connect(mapStateToProps, null)(Header);