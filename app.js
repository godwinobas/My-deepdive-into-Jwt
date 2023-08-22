const express = require ("express");
const mongoose = require ("mongoose");

const app = express();

// Middleware
app.use(express.static('public'));

// View Engine
app.set('view engine', 'ejs');

// database connection
const dbURI = ''
mongoode.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/kunu', (req, res) => res.render('kunu'));