const Movies=require('../models/movies');

module.exports.home=async function(req,res){

    let movies = await Movies.find({});
    return res.render('home',{
        title:"home",
        movies : movies
    });
}

module.exports.GetLang=async function(req,res){
    try{
        let language =await Movies.find({language : req.params.language});
        console.log(req.params.language);
    return res.status(200).json( {
        message: 'Movies fetched successfully',
        data: language
    })
    }
   catch{
    console.log('Internal server error!!');
        return res.status(500).json( {
            message: 'Internal Server Error'
        })
    }
   
}
module.exports.GetGenre=async function(req,res){
    
    try{
        let genArr=[];
        let movies =await Movies.find({});
       for(let i=0;i<movies.length;i++){
        let genreArray=[];
        genreArray= movies[i].genre.split(', ');
            if(genreArray.includes(req.params.genre) == true)
                {
                    genArr.push(movies[i]);
                }
       }
       
       return res.status(200).json( {
        message: 'Movies fetched successfully',
        data: genArr
        
    })
    
    }
   catch{
    console.log('Internal server error!!');
        return res.status(500).json( {
            message: 'Internal Server Error'
        })
    }
    
}