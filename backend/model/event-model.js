const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    primaryId: {
        type: mongoose.ObjectId,
        required: true
    },
    secondaryId: {
        type: mongoose.ObjectId
        // Secondary player may be NULL, due to bye
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
});

const roundSchema = new Schema({
    roundNumber: {
        type: Number,
        required: true
    },
    gameList: {
        type: [gameSchema],
        required: true
    },
    isFinished: {
        type: Boolean,
        required: true
    }
})
const eventSchema = new Schema({
    organizerId: {
        type: mongoose.ObjectId,
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    entryUserList: {
        type: [mongoose.ObjectId],
    },
    roundList: {
        type: [roundSchema],
    },
    isStarted: {
        type: Boolean,
        required: true
    },
    currentRound: {
        type: Number,
    },
    totalRound: {
        type: Number,
    },
    startTime: {
        type: Date
    }
})

const EventModel = mongoose.model('Event', eventSchema);
const RoundModel = mongoose.model('Round', roundSchema);
const GameModel = mongoose.model('Game', gameSchema);

module.exports = {EventModel, RoundModel, GameModel};