const express = require('express');

const routes = require('./controllers/routes');

const app = express();
const PORT = process.env.PORT || 3000;

// do I need something like const db = require('./models')
const mongoose = require('mongoose');
const dbURI = `mongodb+srv://B3stpward:B3stpward@workoutdb.nkddx.mongodb.net/workoutDB?retryWrites=true&w=majority`;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));


app.use(routes);



mongoose.connect(dbURI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useFindAndModify: true, 
        useCreateIndex: true 
    })
    .then((result) => app.listen(PORT, () => console.log(`App now listening at localhost:${PORT}`)))
    .catch((err) => console.log(err));



