'use strict';

var octicon = require('helper-octicon');

module.exports = function(id) {
  return `
    <a href="#${id}" name="${id}" class="anchor">
      <span class="anchor-target" id="${id}"></span>
      <span class="octicon octicon-link"></span>
      ${octicon('link')}
    </a>`;
};
