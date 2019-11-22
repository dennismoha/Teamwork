/* eslint-disable no-undef */
 const db = require('../dbConfig/db');
 const multer = require('multer');



 //creating a new gif

 const storage = multer.diskStorage({
	destination: function(req, file,cb) {
		cb(null,'uploads/')
	},
	filename: function(req,file,cb) {
		console.log(file)
		cb(null, file.originalname)
	}
})

const imgg = (req,res,next) => {
	const upload = multer({storage}).single('image')
	upload(req,res, (err)=> {
		if(err) {
			throw err			
		}
		console.log('file uploaded to the server')
		console.log(req.file)

		//sending files to cloudinary
		const cloudinary = require('cloudinary').v2
		cloudinary.config({
		cloud_name: 'moha254',
		api_key: '934657442839282',
		api_secret: 'hA-U4qbIYxTLwqJ34_OUmic6fgM'

		})

		const path = req.file.path
		console.log(path);
		const uniquefilename = new Date().toISOString()

		cloudinary.uploader.upload(
			path,
			{public_id: `blog/${uniquefilename}`, tags: `blog`},
			(err,image)=> {
				if(err){
					res.send(err)
					console.log('error uploading to cloudinary')
				}

				db.query('insert into gifs (url) values($1)',[image.url])
				console.log('gif image successfully')
			}
			)
	})
	next()
}

const deleteGif = (req,res,next) => {
	const id = parseInt(req.params.id)
	db.query('DELETE from gifs where id=$1',[id],(err,results)=> {
		if(err) {
			throw err			
		}
		res.status(200).json({message:'gif successfully deleted'})
	})
}




module.exports = {imgg,deleteGif}







 