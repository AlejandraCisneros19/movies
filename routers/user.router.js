const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/', userController.registerUser);

router.get('/', userController.getUser);

router.post('/login', userController.loginUser);

module.exports=router;