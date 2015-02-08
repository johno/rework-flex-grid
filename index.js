'use strict';

var toPercentage = require('to-percentage');
var extendOptions = require('extend-options');

var createColOffsetRule = require('./lib/create-col-offset-rule');
var getColSelector = require('./lib/get-col-selector');
var createColRule = require('./lib/create-col-rule');

var mobileFirstColDeclarations = require('./lib/defaults/mobile-first-col-declarations');
var gridDeclarations = require('./lib/defaults/grid-declarations');
var rowDeclarations = require('./lib/defaults/row-declarations');
var colDeclarations = require('./lib/defaults/col-declarations');
var mediaQueries = require('./lib/defaults/media-queries');
var classNames = require('./lib/defaults/class-names');
var gridUnits = require('./lib/defaults/grid-units');

var getPrefixedSelector = require('./lib/utils/get-prefixed-selector');

var classNames, mediaQueries;

module.exports = function flex(options) {
  return function flex(css) {
    options = extendOptions({
      numColumns: 12,
      units: 'rem'
    }, options || {});

    classNames = extendOptions({
      grid: 'g',
      row: 'r',
      col: 'c'
    }, options.classNames || {});

    mediaQueries = extendOptions({
      sm: '32rem',
      md: '48rem',
      lg: '64rem'
    }, options.mediaQueries || {});

    // Grid declarations.
    css.rules = css.rules.concat({
      type: 'rule',
      selectors: ['.' + classNames.grid],
      declarations: gridDeclarations()
    });

    // Row declarations.
    css.rules = css.rules.concat({
      type: 'rule',
      selectors: [getPrefixedSelector(classNames.grid, classNames.row)],
      declarations: rowDeclarations()
    });

    var colSelectors = [];
    var mediaQuerySelectors = [];
    // Iterate over all possible columns.
    for(var i = 1; i <= options.numColumns; i++) {
      colSelectors.push(getColSelector(i, options.numColumns, classNames));
      css.rules = css.rules.concat(createColRule(i, options.numColumns, classNames));

      if (options.offsets && i !== options.numColumns) {
        css.rules = css.rules.concat(createColOffsetRule(i, options.numColumns, classNames));
      }

      // Add the media query modifiers to the selectors list.
      Object.keys(mediaQueries).forEach(function(mediaQuery) {
        var mediaQuery = getColSelector(i, options.numColumns, classNames, mediaQuery);
        mediaQuerySelectors.push(mediaQuery);
        colSelectors.push(mediaQuery);
      });
    }

    // Add all base column declarations.
    css.rules = css.rules.concat({
      type: 'rule',
      selectors: [colSelectors],
      declarations: colDeclarations()
    });

    // Add mobile first default declarations.
    css.rules = css.rules.concat({
      type: 'rule',
      selectors: [mediaQuerySelectors],
      declarations: mobileFirstColDeclarations()
    });

    // Add media queries with modifiers.
    Object.keys(mediaQueries).forEach(function(key) {
      var mediaQueryRules = [];

      for(var i = 1; i <= options.numColumns; i++) {
        mediaQueryRules = mediaQueryRules.concat(
                            createColRule(
                              i,
                              options.numColumns,
                              classNames,
                              key));
      }

      css.rules.push({
        type: 'media',
        media: 'screen and (min-width: ' + mediaQueries[key] + ')',
        rules: mediaQueryRules
      });
    });
  };
};
