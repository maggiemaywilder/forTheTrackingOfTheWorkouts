const router = require('express').Router();
const { Workout } = require('../models');
const path = require('path');

// // dashboard = /stats
// router.get('/stats', (req, res) => {

// });

// get last workout --- should this have 
router.get('/api/workouts', (req, res) => {
    Workout.find()
        .then((data) => {res.json(data)})
});

// add exercise
router.put('/api/workouts/:id', ( req, res) => {
    const exercise = req.body;
    const condition = `id = ${req.params.id}`;
    // need id from params   _id: mongojs.ObjectId(params.id)
    console.log(req.params.id, exercise, "line14-routes");

    // Workout.findOne(condition, (error, res) => {
    //     res.set()
    //     res.save(function(error, document) {

        // })
    })
// });

// // create workout
router.post('/api/workouts', (req, res) => {
    const exercise = req.body;
    console.log(exercise);
    const workout = new Workout(exercise);
    workout.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
    }); 

// // get workouts in range
// router.get('/api/workouts/range', (req, res) => {
//     console.log(req)
// });

// // find or continue exercise
// router.get('/exercise/:id', (req, res) => {
//     console.log(req)
// });


// create exercise
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
});

// load home
router.get('/', (req, res) => {
    res.sendFile('index.html')
});


module.exports = router;


