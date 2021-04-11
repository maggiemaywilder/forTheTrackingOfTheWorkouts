const router = require('express').Router();
const WorkoutDB = require('../models');

module.exports = (app) => {
    router.get('/', (req, res) => {
        res.sendFile('index.html')
    });

    router.get('/exercise', (req, res) => {
        res.sendFile('exercise.html')
    });


}



