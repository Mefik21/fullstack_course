const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const authMiddleware = require('../middleware/authMiddleware')

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
    });
};
