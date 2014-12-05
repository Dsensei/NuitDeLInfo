'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CustomSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  answer : {
    type: String,
    required: true,
  },
  base_user : {type : Schema.Types.ObjectId, ref: 'User'},
});

mongoose.model('Custom', CustomSchema);
