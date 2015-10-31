var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Meetup = mongoose.model('meetups');

router.get('/meetups', function(req, res, next) {
  Meetup.find(function(err, data){
    if(err){
      throw err;
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

router.get('/meetups/:id', function(req, res, next){
  Meetup.findById(function(err, data){
    if(err){
      throw err
    }
  })
});

router.post('/meetups', function(req, res, next){
  var newMeetup = new Meetup({
    name: req.body.name,
    category: req.body.category,
    location: req.body.location,
    coordinates: req.body.coordinates,
    time: req.body.time,
    date: req.body.date,
    members: req.body.members
  });
  newMeetup.save(function(err, data){
    if (err){
      throw err;
    } else {
      res.json({Message:'Meetup Saved!'});
    }
  });
});

module.exports = router;
