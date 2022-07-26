const express = require('express');
const user = express();

const UserController = require('../../controller/UserController');
const verifyToken = require('../../middleware/verifyToken');



user.get('/:id', UserController.getOneUser);
user.get('/username/:username', UserController.findByUsername);
user.get('/email/:email', UserController.findByEmail);

user.post('/register', UserController.registerUser);
user.post('/login', UserController.login);

user.put('/change-name', verifyToken, UserController.changeName);
user.put('/change-username', verifyToken, UserController.changeUsername);
user.put('/change-email', verifyToken, UserController.changeEmail);
user.put('/change-password', verifyToken, UserController.changePassword);



module.exports = user