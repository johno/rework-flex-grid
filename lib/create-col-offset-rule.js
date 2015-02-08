var getColOffsetSelector = require('./get-col-offset-selector');
var toPercentage = require('to-percentage');

module.exports = function createColRule(currCol, numCols, classNames, modifier) {
  var colRule = {
    type: 'rule',
    selectors: [getColOffsetSelector(currCol, numCols, classNames, modifier)],
    declarations: [{
      type: 'declaration',
      property: 'margin-left',
      value: toPercentage((numCols-currCol)/numCols, 10)
    }]
  };

  return colRule;
};
