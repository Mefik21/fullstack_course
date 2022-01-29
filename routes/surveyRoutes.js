const mongoose = require('mongoose');
const authMiddleware = require('../middleware/authMiddleware');
const creditsMiddleware = require('../middleware/creditsMiddleware');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = (app) => {
    app.get('/api/surveys/thanks', (req, res) => {
        res.send('Спасибо за ваш отзыв!')
    })

    app.post('/api/surveys', authMiddleware, creditsMiddleware, async (req, res) => {
        const { title, subject, body, recipients } = req.body;

        const survey = new Survey({
            title,
            subject,
            body,
            recipients: recipients.split(',').map((email) => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });

        //Место для отправки писем
        const mailer = new Mailer(survey, surveyTemplate(survey));

        try {
            await mailer.send();

            await survey.save();
            req.user.credits -= 1;

            const user = await req.user.save();
            console.log(mailer)
            res.send(user);

        } catch (error) {
            res.status(422).send(error);
        }
    });
};
