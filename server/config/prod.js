module.exports = {
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uris: ['http://localhost:5000/auth/google/callback'],
    javascript_origins: ['http://localhost:5000'],
    mongoURI: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
};
