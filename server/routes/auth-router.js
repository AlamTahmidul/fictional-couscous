const AuthController = require('../controllers/auth-controller');

module.exports = (app) => {
    app.post('/register', AuthController.registerUser);
    app.post('/login', AuthController.loginUser);
    app.get('/logout', AuthController.logoutUser);
    app.get('/loggedIn', AuthController.getLoggedIn);
}