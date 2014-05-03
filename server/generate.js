var page = require('webpage').create();
var system = require('system');

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
               .toString(16)
               .substring(1);
  }
  return s4() + s4() + '' + s4() + '' + s4() + '' + s4() + '' + s4() + s4() + s4();
}

var uuid = guid();
var request_url = 

page.viewportSize = { width: 532, height: 712 };
page.open(system.args[1], function() {

  var extension = (system.args[2] !== 'undefined') ? system.args[2]: 'png';

  setTimeout(function() {
    page.render('public/map_' + uuid + '.' + extension);

    var generated_image = 'http://services.commonscloud.org/map_' + uuid + '.' + extension;
    console.log(generated_image);

    phantom.exit();
  }, 2000);

});
