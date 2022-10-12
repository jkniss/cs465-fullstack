const express = require('express');
const router = express.Router();
const tripsController = require("../controllers/trips");
const authController = require('../controllers/authentication');


// trips

router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .post(authController.register);

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode)
    .put(tripsController.tripsUpdateTrip);


module.exports = router;