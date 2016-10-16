var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SafeSpace' });
});

/* GET home page. */
router.get('/events', function(req, res, next) {
  res.render('events', { title: 'Events' });
});
router.get('/events/recent', function(req, res, next) {
  res.render('recentevents', { title: 'Recent Events' });
});

router.get('/advice', function(req, res, next) {
  res.render('advice', { title: 'Advice' });
});


module.exports = router;
