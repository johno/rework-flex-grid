'use strict';

var walk = require('rework-walk');
var toPercentage = require('to-percentage');
var extendOptions = require('extend-options');

var gridDeclarations = require('./lib/defaults/grid-declarations');
var rowDeclarations = require('./lib/defaults/row-declarations');
var colDeclarations = require('./lib/defaults/col-declarations');
var mediaQueries = require('./lib/defaults/media-queries');
var classNames = require('./lib/defaults/class-names');
var gridUnits = require('./lib/defaults/grid-units');

var getPrefixedSelector = require('./lib/utils/get-prefixed-selector');

module.exports = function flex() {
  return function flex(css, options) {
    options = extendOptions({
      numColumns: 12,
      units: 'rem'
    }, options);

    css.rules = css.rules.concat({
      type: 'rule',
      selectors: ['.g'],
      declarations: gridDeclarations()
    });

    css.rules = css.rules.concat({
      type: 'rule',
      selectors: [getPrefixedSelector('.g', 'r')],
      declarations: rowDeclarations()
    });

    console.log(css);
  };
};
