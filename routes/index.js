var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Search businesses' });
});
router.get('/businessOwners', function(req, res, next) {
  res.render('businessOwners', { title: 'join us' });
})
router.get('/businessOwners/addBusiness', function(req, res, next) {
  res.render('addBusiness', { title: 'Add your business' });
})
module.exports = router;
