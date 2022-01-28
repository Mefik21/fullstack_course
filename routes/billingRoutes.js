const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const authMiddleware = require('../middleware/authMiddleware');

module.exports = (app) => {
    app.post('/api/stripe', authMiddleware, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'USD',
            description: '$5 to 5 credits',
            source: req.body.id
        });

        req.user.credits += 5;
        const user = await req.user.save();

        res.send(user);
        
        // Переделать под действующую версию
        // const session = await stripe.checkout.sessions.create({
        //     line_items: [
        //         {
        //             price_data: {
        //                 currency: 'usd',
        //                 product_data: {
        //                     name: '$5 to 5 credits'
        //                 },
        //                 unit_amount: 500
        //             },
        //             quantity: 1
        //         }
        //     ],
        //     mode: 'payment',
        //     success_url: '/surveys',
        //     cancel_url: '/'
        // });
        // console.log(session)

        // req.user.credits += 5;
        // const user = await req.user.save();

        // res.send(user);
        // res.redirect(303, session.url)
    });
};
