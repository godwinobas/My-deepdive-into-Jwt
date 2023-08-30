const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const requireAuth = async (req, res, next) => {
    const token = req.cookies.jwt;

    // check json web token exists and is verified
    try{
        if (!token) throw Error('invalid token')
        const decodedToken = await jwt.verify(token, secret)
        console.log(decodedToken);
        const user = await User.findById(decodedToken.id)
        req.user = user
      } catch(err) {
        console.log(err);
        res.redirect('/login')
      }
}

// check current user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, 'dig bick', async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.locals.user = null;
                next();
            } else {
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id);
                res.locals.user = user; 
                next();
            }
        })
    } else {
        res.locals.user = null;
        next();
    }
};

module.exports = { requireAuth, checkUser };