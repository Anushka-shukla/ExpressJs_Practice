var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool/', function(req, res){
  res.send('You are so cool!');
});

router.get('/cool/wow/', function(req, res){
  res.send('woahhh!!');
});

router.route('')

module.exports = router;
