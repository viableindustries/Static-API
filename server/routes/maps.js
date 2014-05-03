var express = require('express');
var router = express.Router();
var url = require('url');
var phantom = require('phantom');

/* GET home page. */
router.get('/', function(request, response) {

  var url_parts = url.parse(request.url, true);

  var geography_param = url_parts.query['geography'];

  var requested_map_url = 'http://services.commonscloud.org/maps/live?' + geography_param

  phantom.create(function(ph) {
    ph.createPage(function(page) {
      page.open(requested_map_url, function(status) {
        console.log('Opened site? %s', status);
        // page.render('grr.png');
        ph.exit();
      });
    });
  });

});

/* GET home page. */
router.get('/live', function(request, response) {

  var url_parts = url.parse(request.url, true);

  var geography_param = url_parts.query['geography'];

  response.render('maps.html', { __geojson__: geography_param});
});

module.exports = router;
