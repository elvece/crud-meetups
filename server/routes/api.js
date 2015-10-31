var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Meetup = mongoose.model('meetups');

// router.get('/api/meetups', function(req, res, next) {
//   res.json(meetups);
// });

module.exports = router;
