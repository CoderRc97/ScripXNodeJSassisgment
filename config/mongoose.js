const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/MoviesFile');

const db = mongoose.connection;

db.on('error', console.error.bind(console,"Error connecting mongodb"));
db.once('open', function(){
    console.log('Connected to DB')
});

module.exports =db;