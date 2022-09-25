const authRouter = require('./auth-router');
const userRouter = require('./users-router');
const animalRouter = require('./animals-router');

module.exports = (app) => {
    authRouter(app);
    userRouter(app);
    animalRouter(app);
}