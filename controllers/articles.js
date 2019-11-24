const db = require('../dbConfig/db');

//displaying all the articles
const getarticles = function (req,res,next){
    db.query('select * from articles ',function(err,results){
        if(err) {
            res.status(400).send(err)
            console.log("there's an error in the get article route")
        }
        res.status(200).json(results.rows);
        console.log('get articles working well');
    });
    
}

//getting an article with a single id
const articleIdById = function(request,response,next){
    const den = parseInt(request.params.id)
    console.log(den)

    db.query('select * from articles where id = $1',[den],(err,results)=>{
        if(err) {
            throw err;
        }
        response.status(200).json(results.rows)  
        console.log(results)      
        console.log('select Id article worked well');
    })
   
  
}



//article post route
const createArticles = (req,res,next)=> {
    const {content} = req.body;
    
    db.query('insert into articles (content) values($1)',[content],(err,results)=>{
        if(err) {
           throw err           
        }     
       //res.status(201).send(`User added with ID: ${results.rows}`)  
       res.status(201).send(results.rows)     
        console.log('added new article');
    })
    

}



//displaying all articles from a certain user
const userArticles = function(req,res,next){
    const Id = parseInt(req.params.id);

    db.query('select * from articles where article_id =$1',[Id],(err,results)=>{
        if(err) {
            throw err
        }
        res.status(201).json(results.rows);
    })

}

//const deleteArticles;
const deleteArticle = (req,res,next)=> {
    const id = parseInt(req.params.id);
    db.query("DELETE FROM articles WHERE id = $1 ",[id],(err,results)=> {
        if(err) {
            throw err;
        }
        res.status(200).send('article successfully deleted')
    })
}


//const updateArticles;
const articleUpdate = (req,res)=> {
   const Id = parseInt(req.params.id);
   const {article, content} = req.body;
   console.log(req.body)
   db.query('UPDATE articles SET article_id = $1,content = $2 where id= $3',[article,content,Id],function(err,results) {
       if(err) {
         throw err;
         console.log(err)
       }
       res.status(200).send(`User modified with ID: ${Id}`);
   })
}

module.exports = {getarticles,
                  articleIdById,                  
                  createArticles,                  
                  deleteArticle,
                  articleUpdate,
                  userArticles}
