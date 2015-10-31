var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Meetup = mongoose.model('meetups');

router.get('/meetups', function(req, res, next) {
  Meetup.find(function(err, data){
    if(err){
      throw err;
    } else {
      res.json(data);
    }
  });
});

router.get('/meetup/:id', function(req, res, next){
  var id = {'_id': req.params.id};
  Meetup.findOne(id, function(err, data){
    if(err){
      throw err;
    } else {
      res.json(data);
    }
  });
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

router.delete('/meetup/:id', function(req, res, next){
  var id = {"_id": req.params.id};
  Meetup.findOneAndRemove(id, function(err, data){
    if(err){
      throw err;
    } else {
      res.json({Message: 'Meetup Removed.'});
    }
  });
});

module.exports = router;
