var getColSelector = require('./get-col-selector');
var toPercentage = require('to-percentage');

module.exports = function createColRule(currCol, numCols, classNames) {
  var colRule = {
    type: 'rule',
    selectors: [getColSelector(currCol, numCols, classNames)],
    declarations: [{
      type: 'declaration',
      property: 'max-width',
      value: toPercentage(currCol/numCols, 10)
    }, {
      type: 'declaration',
      property: 'flex-basis',
      value: toPercentage(currCol/numCols, 10)
    }]
  };

  return colRule;
}
