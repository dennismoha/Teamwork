const db = require('../dbConfig/db');

//adding a new gif comment
const addGifComments =(req,res,next) => {
    const {comment} = req.body
    db.query('insert into gif_comment (comment) values($1)',[comment],(err,results)=> {
        if(err) {
            throw err
        }
        res.status(201).send('successfully added a new gif comment')
    })
}

//show all comments for a specific gif

const gifCommentsdisplay = (req,res) => {
    const {gif_comment_id} = parseInt(req.params.id);
    db.query('select comment from gif_comment where gif_comment_id = $1',[gif_comment_id],(err,results)=> {
        if(err) {
            throw err;
                   
        }
        res.send(results);
        console.log('comment of the gif with id showed')
    })
}







module.exports = {addGifComments,gifCommentsdisplay}