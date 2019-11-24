const db = require('../dbConfig/db');

//adding a new gif comment
const addGifComments =(req,res) => {
    const {comment} = req.body
    db.query('insert into gif_comment (comment) values($1)',[comment],(err,results)=> {
        if(err) {
            throw err
        }
        res.status(201).send('successfully added a new gif comment')
    })
}

//show all comments for a specific gif

// const gifCommentsdisplay = (req,res) => {
//     const {gif_comment_id} = parseInt(req.params.id);
//     db.query('select * from gif_comment where gif_comment_id = $1',[gif_comment_id],(err,results)=> {
//         if(err) {
//             throw err;
                   
//         }
//         res.send(results.rows[0])
//         console.log(results)
//     })
// }

const gifCommentsdisplay =(req,res) => {
    db.query('select comment from gif_comment',(err,results)=> {
        if(err) {
            throw err
        }
        res.send(results.rows[0])
        console.log(results.rows)
    })
}





module.exports = {addGifComments,gifCommentsdisplay}