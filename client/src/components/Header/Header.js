import './header.scss';
import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
    console.log(props);

    function renderContent() {
        switch (props.auth.user) {
            case null:
                return;
            case false:
                return (
                    <li><a href='/auth/google'>Login With Google</a></li>
                );
            default:
                return (
                    <li><a href='/api/logout'>Logout</a></li>
                );
        }
    }

    return (
        <nav>
            <div className='nav-wrapper'>
                <a className='brand-logo'>Emaily</a>
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