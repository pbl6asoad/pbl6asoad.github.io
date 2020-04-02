const express = require('express');
const router = express.Router();
const passport = require('passport');

const user_controller = require('../controllers/user.controller');

router.get('/redirect/', user_controller.redirect)

router.post('/create', express.urlencoded({ extended: true }), user_controller.user_create);

router.get('/login', express.urlencoded({ extended: true }), user_controller.user_login);

router.get('/loging', express.urlencoded({ extended: true }), user_controller.user_loging);
router.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });
module.exports = router;