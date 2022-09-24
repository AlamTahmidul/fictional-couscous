const express = require('express');
const router = express.Router();
const auth = require('../auth');
const UserController = require('../controllers/user-controller');

// router.post('/user', auth.verify, UserController.createTop5List);
/* Note: Create User is handled by auth.register via POST /register */
router.get('/user/:id', auth.verify, UserController.getUser);
router.put('/user/:id', auth.verify, UserController.updateUser);
router.delete('/user/:id', auth.verify, UserController.deleteUser);

module.exports = router;