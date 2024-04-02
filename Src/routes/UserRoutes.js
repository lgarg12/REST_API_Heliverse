const express = require('express');
const router = express.Router();
const User = require('../models/User');

const { addUser, updateUser, getUserById, getAllUsers, deleteUser } = require('../controller/userController');

router.post('/users', addUser);
router.put('/users/:id', updateUser);
router.get('/users/:id', getUserById);
router.get('/users', getAllUsers);
router.delete('/users/:id', deleteUser);

module.exports = router;
