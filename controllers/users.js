/* eslint-disable no-undef */
const db = require('../dbConfig/db');
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken');

const Signup = function (req,res){
    bcrypt.hash(req.body.password, 10) .then(
        (hash) => {
            const email = req.body.email
            const password = hash

           db.query('insert into employees (email,password) values($1,$2)',[email,password])
            .then(
                    () => {
                        res.status(201).json({
                            message: "new user added successfully"
                        })
                    }
                ).catch(
                    (error) => {
                        res.status(400).json({message:'that email address exist'})
                       throw error
                        
                    }
                )
        }
    )
}
    


const login = (req,res)=> {    
   const {email} = req.body;
   //const {password} = bcrypt.hash(req.body.password)    
    db.query('select * from employees where email = $1',[email])
   .then(
		(user) => {
			if(!user) {
				return res.status(401).json({
					error: new Error ("user not found")
				});
            }
            
            const k = (user.rows[0].password)
            
        bcrypt.compare(req.body.password,k).then(
            (valid) => {
                if(!valid) {
                    return res.status(401).json({
                        error : new Error("incorrect password")
                    });
                }

                const token = jwt.sign({userId:user._id},'Randomuserauthentication',{expiresIn:'24h'})
                res.status(200).json({
                    userId: user._id,
                    token: token
                })
            }
            ).catch(
                (error) => {
                    res.status(400).send(error)
                   // throw error
                    
                }
            )
    })
    .catch((error)=> {
        console.log('error last catch')
        throw error
    })

    
   
}


module.exports = {Signup,login}
