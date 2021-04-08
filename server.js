const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

const dbURI = `mongodb+srv://B3stpward:B3stpward@workoutdb.nkddx.mongodb.net/workoutDB?retryWrites=true&w=majority`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true, useCreateIndex: true })
    .then((result) => app.listen(PORT, () => console.log(`App now listening at localhost:${PORT}`)))
    .catch((err) => console.log(err));


app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require('./controllers/routes.js'));

    // example from class exercise
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });




