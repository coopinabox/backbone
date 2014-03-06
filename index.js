var backbone = require('backbone');
require('backbone-react-component');

// if in browser, attach jquery to backbone
if (typeof window !== 'undefined') {
  var $ = require('jquery')(window);
  backbone.$ = $;
}

module.exports = backbone;
