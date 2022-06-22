/*
 * 
 * Author's name: Benny Baby
 * Website name:
 * 
 */

//required dependencies
var express = require('express');
var router = express.Router();

/* GET to home page. */
router.get('/home', function(req, res, next) {
  res.render('home');
});
module.exports = router;

//Get to about page
router.get('/about', function (req, res, next) {
    res.render('about');

});
module.exports = router;

//Get to portfolio page
router.get('/portfolio', function (req, res, next) {
    res.render('portfolio');
});
module.exports = router;

/* GET to resume page. */
router.get('/resume', function(req, res, next) {
  res.render('resume');
});
module.exports = router;

//Get to services page
router.get('/services', function (req, res, next) {
    res.render('services');
});
module.exports = router;

//Get to contact page
router.get('/contact', function (req, res, next) {
    res.render('contact');
});
module.exports = router;




