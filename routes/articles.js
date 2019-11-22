const express = require('express');
const router = express.Router();
const getArticles = require('../controllers/articles');
const auth = require('../middleware/auth')

router.post('/newarticle/',getArticles.createArticles);                     //creates a new article 
router.get('/',auth,getArticles.getarticles);                         //displays all the articles
router.get('/:id',getArticles.articleIdById);         //displays a specific article
            
router.put('/articleupdate/:id',getArticles.articleUpdate);     //updates a specific article
router.delete('/:id',getArticles.deleteArticle);  //deletes a specific article 
router.get('/userArticle/:id',getArticles.userArticles);

module.exports = router;

