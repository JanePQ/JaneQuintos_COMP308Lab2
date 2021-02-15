var mongoose = require('mongoose'), Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String
});

// use schema to define the User model
mongoose.model('User', UserSchema);
