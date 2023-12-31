
const router = require("express").Router();
const mongoose = require('mongoose');

const Journey = require("../models/Journey.model");
const Task = require("../models/Task.model");

router.post("/", (req, res, next) => {
    const { title, description } = req.body;

    Journey.create({ title, description, tasks: [] })
        .then(response => res.json(response))
        .catch(err => res.json(err));
});

router.get('/', (req, res, next) => {
    Journey.find()
        .populate('tasks')
        .then(allJourneys => res.json(allJourneys))
        .catch(err => res.json(err));
})

//GET Route to retrieve a specific journey by ID
router.get('/:journeyId', (req, res, next) => {
    const { journeyId } = req.params;
    //Check if there is a journey to be found by the ID.
    if (!mongoose.Types.ObjectId.isValid(journeyId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    Journey.findById(journeyId)
        .populate('tasks')
        .then(journey => res.status(200).json(journey))
        .catch(error => res.json(error));
})
router.put('/:journeyId', (req, res, next) => {
    const { journeyId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(journeyId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }
    // Use the findByIdAndUpdate method to retrieve a specific journey by ID.
    Journey.findByIdAndUpdate(journeyId, req.body, { new: true })
        .then((updatedJourney) => res.json(updatedJourney))
        .catch(error => res.json(error));
});
// Delete Route to erase a specific journey by Id
router.delete('/:journeyId', (req, res, next) => {
    const { journeyId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(journeyId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Journey.findByIdAndRemove(journeyId)
        .then(() => res.json({ message: `Journey with ${journeyId} is removed successfully.` }))
        .catch(error => res.json(error));
});

module.exports = router;
