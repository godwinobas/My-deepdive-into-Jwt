const express = require ("express");
const mongoose = require ("mongoose");
const authRoutes = require('./routes/authRoutes');
const cookieparser = require('cookie-parser');

const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieparser());

// View Engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://godwinobas0:bPqgVeJfGkiyPL6i@cluster0.htnb5xy.mongodb.net/'
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/kunu', (req, res) => res.render('kunu'));
app.use(authRoutes);

//  cookies
