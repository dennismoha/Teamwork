// eslint-disable-next-line no-undef
const jwt = require('jsonwebtoken');

// eslint-disable-next-line no-undef
module.exports = (req,res,next) => {
    try {
        
        const token = req.headers.authorization.split(' ')[1];
        console.log(req.headers.authorization);
        //const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'Randomuserauthentication');
        const userId = decodedToken.userId;
        if(req.body.userId && req.body.userId !== userId) {
            throw 'invalid user'
        }else {
            next()
        }
       
      }
      catch(err) {
     console.log('unauthorized ' + err )
     throw err
     //res.status(401).send(err)
    
      }
}