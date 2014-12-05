'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RefugeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  adress : {
    type: String,
    required: true,
  },
  descrip : {
    type: String,
    required: true,
  },
});

mongoose.model('Refuge', RefugeSchema);
