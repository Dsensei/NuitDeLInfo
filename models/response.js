'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResponseSchema = new Schema({
    test: {
        type: Schema.ObjectId,
        ref: 'TestMatch'
    },

    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Response', ResponseSchema);
