var backbone = require('backbone');

// if in browser, attach jquery to backbone
if (typeof window !== 'undefined') {
  var $ = require('jquery')(window);
  backbone.$ = $;
}

module.exports = backbone;
