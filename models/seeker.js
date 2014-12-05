'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SeekerSchema = new Schema({
  base_user : {type : Schema.Types.ObjectId, ref: 'User'},
});

mongoose.model('Seeker', SeekerSchema);
