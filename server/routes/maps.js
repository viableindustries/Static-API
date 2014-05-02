var express = require('express');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get('/', function(request, response) {

  var url_parts = url.parse(request.url, true);

  var geography_param = url_parts.query['geography'];
  // var geojson = JSON.parse(geography_param.replace(/&quot;/g,'"'));

  response.render('maps.html', { __geojson__: JSON.stringify(geography_param)});
});

module.exports = router;
