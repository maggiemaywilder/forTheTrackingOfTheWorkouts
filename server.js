const express = require('express');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require('./controllers/routes.js');

app.use(routes);

app.listen(PORT, () => console.log(`App now listening at localhost:${PORT}`));

