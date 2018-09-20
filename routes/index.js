var express = require('express');
var router = express.Router();
const tweetController = require('../controllers/tweetController');

// /* GET home page. */

router.get('/facebook', tweetController.facebook);
router.get('/linkedin', tweetController.linkedin);
router.get('/following', tweetController.following);




router.get('/', function(req, res, next) {
  res.render('index', { title: 'LASU' });
});






// router.get('/lasu', function(req, res, next) {
//     res.render('thing', { title: 'Unilag' });
//   });

//   router.get('/tellme', function(req, res, next) {
//     res.render('profile', { title: 'What can you tell us about Lasu?' });
//   });


  router.get('/learn/pgd', function(req, res, next) {
    res.render('tweet', { title: 'Thank Mr Segun for your time in investing in me' });
  });
  


// router.get('/', tweetController.homePage);
// router.get('/thing', tweetController.tweets);
// router.get('/profile', tweetController.profilePage);


// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
