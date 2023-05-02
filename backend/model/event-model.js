const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventName: {
        type: String,
        required: true
    },
    entryUserList: {
        type: [mongoose.ObjectId],
        required: true
    },
    isStarted: {
        type: Boolean,
        required: true
    },
    currentRound: {
        type: Number,
        required: true
    },
    totalRound: {
        type: Number,
        required: true
    },
    startTime: {
        type: Date
    }
})

const roundSchema = new Schema({
    eventId: {
        type: eventSchema,
        required: true
    },
    primaryId: {
        type: mongoose.ObjectId,
        required: true
    },
    secondaryId: {
        type: mongoose.ObjectId
        // Secondary player may be NULL, due to bye
    },
    numRound: {
        type: Number,
        required: true
    },
    primaryScore: {
        type: Number,
        required: true
    },
    secondaryScore: {
        type: Number,
        required: true
    },
    isFinished: {
        type: Boolean,
        required: true
    }
})

const eventModel = mongoose.model('Event', eventSchema);
const roundModel = mongoose.model('Round', roundSchema);

module.exports = {eventModel, roundModel};