const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { isAuthenticated } = require('../middleware/jwt.middleware');
const User = require('../models/User.model');

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

router.get("/:userId", isAuthenticated, (req, res) => {
    const userId = req.params.userId;
    console.log(userId)
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

router.get("/", isAuthenticated, (req, res) => {
    res.send("hello world !")
})

// UPDATE: Update user profile by ID
router.put("/:userId", isAuthenticated, (req, res) => {
    const userId = req.params.userId;
    console.log("userId _ _ _ _ ", userId)
    const { email, name } = req.body;
    console.log("Email _____ name", email, name)

    User.findByIdAndUpdate(
        userId,
        { email, name, },
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

router.delete("/:userId", isAuthenticated, (req, res) => {
    const userId = req.params.userId;
    console.log("User Id", userId)
    User.findOneAndRemove(userId)
        .then((deletedUser) => {
            if (!deletedUser) {
                return res.status(404).json({ error: "User not found" });
            }
            res.status(204).send();
        })
        .catch((error) => {
            res.status(500).json({ error: "Internal server error" });
        });
});

module.exports = router;
