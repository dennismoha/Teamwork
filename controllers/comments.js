const db = require('../dbConfig/db');

//creating a new comment
const createComment = (req,res)=> {
    const {text} = req.body;
    console.log(text)
    db.query('insert into comments (text) values($1)',[text],(err,results)=> {
        if(err) {
            throw err;            
        }
        res.status(200).send(`comment added with ID: ${results.text}`)
    })


}



const commentsDisplay= function (req,res){
    db.query('select * from comments ',function(err,results){
        if(err) {
            throw err
        }
        res.status(200).json(results.rows)       
    });  
}


//getting a specific comment by it's id
const comentIdDisplay = (req, res) => {
    const Id = parseInt(req.params.id);

    db.query('select * from comments where comment_id = $1',[Id],(err,results)=> {
        if(err) {
            throw err;
        }        
        res.status(200).send(results);
    })
   
}

//updating a comment
const updateComment = (req,res)=> {
    const comment_id = parseInt(req.params.id);
    const {text} = req.body;
    db.query('UPDATE comments SET text = $1 where comment_id = $1',[text,comment_id],(err,results)=> {
        if(err) {
            throw err
        }
        console.log(results)
        // res.status(200).send(results)
        res.status(200).send(`comment modified with ID: ${comment_id}`)
    })

}

module.exports = {createComment,commentsDisplay,comentIdDisplay,updateComment};
                             