const express = require('express');
const router = express.Router();
const { getUsers, createUser, getUserById, updateUser, deleteUser } = require('../controllers/user.controller');

// Request to get a list of users
router.get('/', getUsers);

// Request to search user by Id
router.get('/:id', getUserById);

// Request to create a new user
router.post('/', createUser);

// Request to update user
router.put('/:id', updateUser);

// Request to delete user
router.delete('/:id', deleteUser);

module.exports = router;
