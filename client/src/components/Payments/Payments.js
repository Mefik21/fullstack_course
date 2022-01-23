import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const Payments = (props) => {
    const {handleToken} = props;
    return (
        <StripeCheckout
            name="Emaily"
            description="$5 для отправки 5 писем"
            amount={500}
            token={(token) => handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}>
            <button className="waves-effect waves-light btn">Оплатить картой</button>
        </StripeCheckout>
    );
};

export default connect(null, actions)(Payments);
