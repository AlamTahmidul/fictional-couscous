const auth = require('../auth');
const UserController = require('../controllers/user-controller');

module.exports = (app) => {
    app.get('/user/:id', auth.verify, UserController.getUser);
    app.put('/user/:id', auth.verify, UserController.updateUser);
    app.delete('/user/:id', auth.verify, UserController.deleteUser);
        // router.post('/user', auth.verify, UserController.createTop5List);
    /* Note: Create User is handled by auth.register via POST /register */
}