var express = require('express')
var router = express.Router()
var app = express();

var sFingerPrint = '[Router]:Default:';

console.log(sFingerPrint + 'LOADED');

router.get('/', function (req, res) {
  console.log(sFingerPrint + 'GET/');
  res.render('index.ejs');
});

app.use(function(err, req, res, next) {
  if (err) {
    console.log(sFingerPrint + "ERR");
    console.log(err);
  }
})
module.exports = router