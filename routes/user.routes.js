const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { isAuthenticated } = require('../middleware/jwt.middleware');
const User = require('../models/User.model');

// CREATE: Create a new user
router.post("/", (req, res) => {
    const { email, password, name, avatar } = req.body;
    const newUser = new User({ email, password, name, avatar });

    newUser
        .save()
        .then((user) => {
            res.status(201).json(user);
        })
        .catch((error) => {
            res.status(400).json({ error: "Unable to create user" });
        });
});

// READ: Get user profile by ID
router.get("/user/:userId", isAuthenticated, (req, res) => {
    const userId = req.params.userId;

    User.findById(userId)
        .then((foundUser) => {
            if (!foundUser) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json({ user: foundUser });
        })
        .catch((error) => {
            res.status(500).json({ error: "Internal server error" });
        });
});

// UPDATE: Update user profile by ID
router.put("/user/:userId", isAuthenticated, (req, res) => {
    const userId = req.params.userId;
    const { email, password, name,} = req.body;

    User.findByIdAndUpdate(
        userId,
        { email, password, name,},
        { new: true } // Return the updated user
    )
        .then((updatedUser) => {
            if (!updatedUser) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(200).json(updatedUser);
        })
        .catch((error) => {
            res.status(500).json({ error: "Internal server error" });
        });
});

// DELETE: Delete user profile by ID
router.delete("/user/:userId", isAuthenticated, (req, res) => {
    const userId = req.params.userId;

    User.findByIdAndRemove(userId)
        .then((deletedUser) => {
            if (!deletedUser) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(204).send(); // No content to send (successful deletion)
        })
        .catch((error) => {
            res.status(500).json({ error: "Internal server error" });
        });
});

module.exports = router;
