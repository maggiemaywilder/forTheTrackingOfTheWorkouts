const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [{
        type: {
            type: String,
            required: true 
        },
        name: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true

        },
        weight: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number,
    }}],
}, { timestamps: true });

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;
