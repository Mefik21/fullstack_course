const keys = require('../../config/keys')

module.exports = (survey) => {
    return `
        <html>
        <body>
            <div style="text-align: center">
                <h3>Нам инетересен твой отзыв</h3>
                <p>Пожалуйста ответь на вопрос:</p>
                <p>${survey.body}</p>
                <div>
                    <a href="${keys.domain}/api/surveys/${survey.id}/yes">Yes</a>
                </div>
                <div>
                    <a href="${keys.domain}/api/surveys/${survey.id}/no">No</a>
                </div>
            </div>
        </body></html>
    `;
};
