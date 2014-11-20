'use strict';

var walk = require('rework-walk');
var getPrefixedSelector = require('./lib/utils/get-prefixed-selector.js');

var FLEX_GRID_DEFAULT_CLASS_NAMES = {
  gridClass: 'g',
  rowClass: 'r',
  colClass: 'c'
};

var FLEX_GRID_DEFAULT_UNITS = 'rem';

var FLEX_GRID_DEFAULT_MEDIA_QUERIES = {
  xs: '',
  sm: '',
  md: '',
  lg: '',
  xl: ''
}

var FLEX_GRID_DEFAULT_COL_DECLARATIONS = [{
  type: 'declaration',
  property: 'flex',
  value: '1'
}, {
  type: 'declaration',
  property: 'flex-direction',
  value: 'column'
}, {
  type: 'declaration',
  property: 'box-sizing',
  value: 'border-box'
}];

var FLEX_GRID_DEFAULT_ROW_DECLARATIONS = [{
  type: 'declaration',
  property: 'display',
  value: 'flex'
}, {
  type: 'declaration',
  property: 'box-sizing',
  value: 'border-box'
}, {
  type: 'declaration',
  property: 'max-width',
  value: '100%'
}, {
  type: 'declaration',
  property: 'flex-direction',
  value: 'row'
}, {
  type: 'declaration',
  property: 'flex-wrap',
  value: 'wrap'
}];

var FLEX_GRID_DEFAULT_GRID_DECLARATIONS = [{
  type: 'declaration',
  property: 'padding-left',
  value: '1rem'
}, {
  type: 'declaration',
  property: 'padding-right',
  value: '1rem'
}];

module.exports = function flex() {
  return function flex(css, options) {
    var classNames = options.classNames || FLEX_GRID_DEFAULT_CLASS_NAMES;
  };
};
