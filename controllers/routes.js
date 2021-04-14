const router = require('express').Router();
const path = require('path');

const { Workout } = require('../models');
const { db } = require('../models/Workout');


// load home
router.get('/', (req, res) => {
    res.sendFile('index.html')
});

// from home -> continue workout or new Workout
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
});

// // from home -> click new workout
router.post('/api/workouts', (req, res) => {
    const workout = new Workout(req.body);
    workout.save()
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            console.log(error)
        })
});

// add exercise button
router.put('/api/workouts/:id', (req, res) => {
    const exercise = req.body;
    Workout.findById(req.params.id) 
        .then((result) => {
            result.exercises.push(exercise);
            result.save();
        })
        .catch((err) => {
            console.log(err);
        })
    });

// dashboard = /stats
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
});

// get workouts in range
router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([])
    console.log(req);
});


// get last workout --- should this have 
router.get('/api/workouts', (req, res) => {
    Workout.find()
        .then((data) => {res.json(data)})
});

// });


// from Add your exercise -> add Exercise button -> handle form submit
router.post('/api/workouts/:id', ( req, res) => {

    console.log(req.body, req.params, "line14-routes");
    if (req.params !== `id: 'undefined'`) {
        const workout = new Workout({

            exercises: [req.body]
        });

            workout.save()
            .then((result) => {
                res.send(result)
            })
            .catch((err) => {
                console.log(err);
            }); 

    } else {
        console.log('here, line33')
        };    
    // });
    
    
});


module.exports = router;


