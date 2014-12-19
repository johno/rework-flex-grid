var getPrefixedSelector = require('./utils/get-prefixed-selector')

module.exports = function getColSelector(currCol, numCols, classNames, modifier) {
  var classModifiers;

  if (currCol == numCols) {
    if (modifier) {
      classModifiers = currCol + '--' + modifier;
    } else {
      classModifiers = currCol;
    }
  } else {
    if (modifier) {
      classModifiers = currCol + '-' + numCols + '--' + modifier;
    } else {
      classModifiers = currCol + '-' + numCols;
    }
  }

  return getPrefixedSelector(
    classNames.grid,
    classNames.row,
    classNames.col,
    classModifiers);
};
