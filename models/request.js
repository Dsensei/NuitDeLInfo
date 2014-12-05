'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RequestSchema = new Schema({
    firstName: {
        type: String,
        require: true
    },

    lastName: {
        type: String,
        require: true
    },

	seeker: {
    	type: Schema.ObjectId,
    	ref: 'Seeker'
    },

    nationality: {
        type: String,
        required: true
    }
});

mongoose.model('Request', RequestSchema);
