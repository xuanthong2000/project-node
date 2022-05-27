var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email: String,
    password: String
});
var User = module.exports = mongoose.model('User', userSchema);