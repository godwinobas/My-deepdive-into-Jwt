const express = require ("express");
const mongoose = require ("mongoose");

const app = express();

// Middleware
app.use(express.static('public'));

// View Engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://godwinobas0:bPqgVeJfGkiyPL6i@cluster0.htnb5xy.mongodb.net/'
mongoode.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/kunu', (req, res) => res.render('kunu'));