'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CustomSchema = new Schema({
  fact: {
    type: String,
    required: true
  },
  answer: {
    type: Boolean,
    required: true,
  },
  init: {
    type: Boolean,
    required: true,
  },
  base_user : {type : Schema.Types.ObjectId, ref: 'User'},
});

mongoose.model('Custom', CustomSchema);
