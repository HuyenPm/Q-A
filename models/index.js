let mongoose = require('mongoose');
const url = 'mongodb+srv://dev:nopassword@cluster0-bmqym.mongodb.net/admin';

mongoose.set('debug', true);
mongoose.connect(url, {dbName: 'q-a'})
    .then(() => {
        console.log("Database connected");
    })
    .catch(error => {
        console.log(error)
    });

mongoose.Promise = Promise;

module.exports.Question = require('./question');