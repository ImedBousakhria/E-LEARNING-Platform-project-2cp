const jwt = require('jsonwebtoken');
const User = require('../models/User');

// check current user
module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {

    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();

      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });

  } else {
      res.locals.user = null;
      next();
  }
};

//check if user is authenticated to access the page
module.exports.requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
  
    // check json web token exists & is verified
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {

        if (err) {
          console.log(err.message);
          res.redirect('/user/login');

        } else {
          next();
        }
      });

    } else {
      res.redirect('/user/login');
    }
};