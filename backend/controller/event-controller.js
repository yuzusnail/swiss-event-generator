const mongoose = require('mongoose')
const {EventModel, RoundModel, GameModel} = require('../model/event-model');
const CreateEvent = async(req, res) => {
    const { user } = req.param;
    const { eventName } = req.body;
    
    if (!eventName)
        return res.status(400).json({error: "There should be an event name"});
    try {
        const newEvent = await EventModel.create({
            organizerId: user._id,
            eventName: eventName,
            isStarted: false
        })
        res.status(200).json({ eventName });
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {CreateEvent};