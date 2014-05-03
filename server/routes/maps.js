var fs = require('fs');
var express = require('express');
var router = express.Router();
var url = require('url');
var exec = require('child_process').exec, child;

router.get('/', function(request, response) {

  var url_parts = url.parse(request.url, true);

  var geography_param = url_parts.query['geography'];

  var requested_map_url = 'http://services.commonscloud.org/maps/live?' + geography_param;

  console.log('requested_map_url', requested_map_url);
  var command = 'phantomjs generate.js ' + requested_map_url;

  console.log('command', command);

  child = exec(command,
    function (error, stdout, stderr) {
      if (error !== null) {
        console.log('exec error: ' + error);
      }

      console.log(stdout);
      return true;

      // var img = fs.readFileSync(stdout);
      // response.writeHead(200, {'Content-Type': 'image/png' });
      // response.end(img, 'binary');
  });

});

/* GET home page. */
router.get('/live', function(request, response) {

  var url_parts = url.parse(request.url, true);

  var geography_param = url_parts.query['geography'];

  response.render('maps.html', { __geojson__: geography_param});
});

module.exports = router;
