const express = require('express');
const { getPickupline } = require('../controllers/pickupLines');

const router = express.Router();

router.route('/').get(getPickupline);

module.exports = router;