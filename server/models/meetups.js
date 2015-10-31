var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Meetup = new Schema ({
  name: String,
  category: String,
  location: String,
  coordinates: Array,
  time: String,
  date: Date,
  members: Array
});

module.exports = mongoose.model('meetups', Meetup);
