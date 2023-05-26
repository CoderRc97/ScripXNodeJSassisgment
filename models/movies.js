const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    imdb_title_id:{
        type: 'String'
    },
    original_title : {
        type: 'String'
    },
    year : {
        type :Number
    },
    date_published : {
        type:'String'
    },
    genre:
        {
            type:'String'
    }
    ,
    duration:{
        type:'String'
    },
    language:{
        type:'String'
    },
    description:{
        type:'String'
    },
    reviews_from_users : {
        type:Number
    },
    reviews_from_critics :{
        type:Number
    },
});

const Movies = mongoose.model('Movies',MovieSchema);
module.exports = Movies;