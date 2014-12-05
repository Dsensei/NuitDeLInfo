'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestMatchSchema = new Schema({
    request: {
        type: Schema.ObjectId,
        ref: 'Request'
    },

    refugee: {
       	type: Schema.ObjectId,
        ref: 'Refugee'
    },

    valid: {
        type: Boolean,
      	default: false
    }
});

mongoose.model('TestMatch', TestMatchSchema);
