var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main_page');
});
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
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

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
}};

router.get('/angry', function(req, res, next) {
  res.render('angry');
});
<<<<<<< Updated upstream

=======
router.get('/anxious', function(req, res, next) {
  res.render('anxious');
});
router.get('/confused', function(req, res, next) {
  res.render('confused');
});
router.get('/content', function(req, res, next) {
  res.render('content');
});
router.get('/disappointed', function(req, res, next) {
  res.render('disappointed');
});
router.get('/frustrated', function(req, res, next) {
  res.render('frustrated');
});
>>>>>>> Stashed changes
router.get('/question_of_the_day', function(req, res, next) {
  res.render('question_of_the_day');
});

module.exports = router;
