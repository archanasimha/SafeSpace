var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main_page');
});
router.get('/home', function(req, res, next) {
  res.render('home');
});

/* GET home page. */
router.get('/events', function(req, res, next) {
  res.render('events');
});
router.get('/events/recent', function(req, res, next) {
  res.render('recentevents');
});

router.get('/advice', function(req, res, next) {
  res.render('advice');
});
router.get('/question_of_the_day', function(req, res, next) {
  res.render('question_of_the_day');
});

module.exports = router;
