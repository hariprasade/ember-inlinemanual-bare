/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-inlinemanual-bare',
  contentFor: function(type, config) {
    if (!config.inlineManual || config.inlineManual.enabled === false) {
      return;
    }
    if (type === 'head-footer') {
      return '<script>!function(){var e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=1,e.src="https://inlinemanual.com/embed/player.' + config.inlineManual.siteId + '.bare.js",e.charset="UTF-8",t.parentNode.insertBefore(e,t)}();</script>';
    }
  }
};
