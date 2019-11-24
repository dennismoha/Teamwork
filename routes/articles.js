const express = require('express');
const router = express.Router();
const getArticles = require('../controllers/articles');
const auth = require('../middleware/auth')

router.post('/newarticle/',auth,getArticles.createArticles);                     //creates a new article 
router.get('/',auth,getArticles.getarticles);                         //displays all the articles
router.get('/:id',auth,getArticles.articleIdById);         //displays a specific article
            
router.put('/articleupdate/:id',auth,getArticles.articleUpdate);     //updates a specific article
router.delete('/:id',auth,getArticles.deleteArticle);  //deletes a specific article 
router.get('/userArticle/:id',auth,getArticles.userArticles);

module.exports = router;

