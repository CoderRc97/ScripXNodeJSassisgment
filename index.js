const express = require('express');
const app =express();
const port =8000;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const csvtojson=require('csvtojson');
const Movies = require('./models/movies');

app.use(express.urlencoded()); 
app.use(express.static('./assets'));
app.use(expressLayouts);


// extract style and scripts from sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//set up view engine
app.set('view engine','ejs');
app.set('views','./views');

const csvfilepath = "IMDb-movies (1).csv";
csvtojson()
.fromFile(csvfilepath)
.then((json) => {
    
    Movies.insertMany(json).then(function(){
        console.log("data inserted")
    }).catch(function(error){
        console.log(error);
    });
});
app.use('/',require('./routes/index'));
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
    }

    console.log(`server is running: ${port}`);
});