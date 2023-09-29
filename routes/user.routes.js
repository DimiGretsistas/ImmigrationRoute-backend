const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
const { isAuthenticated } = require('../middleware/jwt.middleware');
const User = require('../models/User.model');

const fileUploader = require('../config/cloudinary.config');

router.put('/', fileUploader.single('avatar'), (req, res, next) => {
    let { name, email, avatar } = req.body;
    const request = res.req;
    const user = request.payload;
    const userId = user._id;
    console.log(userId);

    avatar = req.file ? req.file.path : undefined;
    User.findByIdAndUpdate(userId, { name, avatar, email }, { new: true })
        .then((profileUpdated) => res.json(profileUpdated))
        .catch(error => res.json(error));
});
router.get("/", isAuthenticated, (req, res) => {
    const userId = req.payload._id
    User.findById(userId)
        .then((foundUser) => {
            // console.log("Response from User",foundUser)
            res.status(200).json({ user: foundUser })
        })
        .catch((error) => {
            console.log("Error response", error)
        })
})

module.exports = router;

