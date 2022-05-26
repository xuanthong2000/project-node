// usertModel.js
var mongoose = require('mongoose');
// Setup schema
var todoListSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    deadline_date: {
        type: Date
    }
});
// Export User model
var TodolistModel = module.exports = mongoose.model('Todolist', todoListSchema);
module.exports.get = function(callback, limit) {
    TodolistModel.find(callback).limit(limit);
}