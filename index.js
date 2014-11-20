'use strict';

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
}]

module.exports = function flex() {
  return function flex(options) {
    var classNames = options.classNames || FLEX_GRID_DEFAULT_CLASS_NAMES;
  };
};
