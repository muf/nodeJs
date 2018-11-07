var express = require('express');
var app = express();

var path = require('path');
var bodyParser = require('body-parser');

var sRouterPath = './router/';

//# Add new Router Path here.

var htConfig = {
  'path' : {
    'views' : '/public/view/'
    , 'view engine' : 'ejs'
  }
  , 'routers' : [
    'default' // for default path '/';
  ]
  , 'port' : 3000
}

var nPort = 3000;

loadRouter(app, htConfig['routers']);
loadPath(app, htConfig['path'])

app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public')));
app.use(function(err, req, res, next) {
  console.log("[APP]:ERR > " + err);
})

app.listen(htConfig['port'], function () {
  console.log('Example app listening on port' + htConfig['port']);
});


function loadRouter(app, aRouter) {
  aRouter.forEach(sRouter => {
      console.log('LOAD.. [Router]:PATH:ADD:' + sRouterPath + sRouter);
      app.use('/' + (sRouter == 'default' ? '' : sRouter), require(sRouterPath + sRouter));
  })
}

function loadPath(app, aPath) {
  for (var sPath in aPath) {
    console.log('Set [Path] : ' + sPath + " / " + aPath[sPath]);
    app.set(sPath, path.join(__dirname, aPath[sPath]))
  }
}
