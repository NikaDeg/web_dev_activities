const express = require('express');
const router = express.Router();

const {
    getAllUsers,
    createUser,
    getUserById,
    deleteUser
} = require("../controllers/userController");

// GET /users
router.get("/", getAllUsers);

// POST /users
router.post("/", createUser);

// GET /users/:userId
router.get("/:userId", getUserById);

// DELETE /users/:userId
router.delete("/:userId", deleteUser);

module.exports = router;