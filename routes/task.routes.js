
const router = require("express").Router();

const Task = require("../models/Task.model");
const Journey = require("../models/Journey.model");


router.post("/tasks", (req, res, next) => {
    const { title, description, journeyId } = req.body;

    Task.create({ title, description, Journey: journeyId })
        .then(newTask => {
            console.log(title, description)
            return Journey.findByIdAndUpdate(journeyId, { $push: { tasks: newTask._id } });
        })
        .then(response => res.json(response))
        .catch(err => res.json(err));
});

module.exports = router;
