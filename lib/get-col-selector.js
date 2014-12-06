var getPrefixedSelector = require('./utils/get-prefixed-selector')

module.exports = function getColSelector(currCol, numCols, classNames) {
  if (currCol == numCols) {
    return getPrefixedSelector(
      classNames.grid,
      classNames.row,
      classNames.col,
      currCol);
  } else {
    return getPrefixedSelector(
      classNames.grid,
      classNames.row,
      classNames.col,
      currCol,
      numCols);
  }
};
