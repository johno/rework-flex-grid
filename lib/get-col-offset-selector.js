var getPrefixedSelector = require('./utils/get-prefixed-selector')

module.exports = function getColSelector(currCol, numCols, classNames) {
  return getPrefixedSelector(
    classNames.grid,
    classNames.row,
    classNames.col,
    'offset-' + (numCols - currCol));
};
