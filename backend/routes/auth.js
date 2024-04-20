const express = require('express');

const router = express.Router();

const { signUpHandler, loginHandler } = require('./../controllers/authControllers');

router.route("/register")
     .post(signUpHandler);

router.route("/login")
     .post(loginHandler);

     module.exports = router;