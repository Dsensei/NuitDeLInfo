'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var RefugeeSchema = new Schema({
  base_user : {type : Schema.Types.ObjectId, ref: 'User'},
  nation :  {
    type : String,
    required: true
  },
  refuge : {type : Schema.Types.ObjectId, ref: 'Refuge'},
});

mongoose.model('Refugee', RefugeeSchema);
