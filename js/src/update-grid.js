var rework = require('rework')
var reworkFlexGrid = require('rework-flex-grid');
var isBlank = require('is-blank');

var setCss = require('./set-css');

module.exports = function updateGrid() {
  var numColumnsElem = document.getElementById('numColumns');
  var gridClassElem = document.getElementById('gridClassName');
  var rowClassElem = document.getElementById('rowClassName');
  var colClassElem = document.getElementById('colClassName');

  var numColumns, gridClass, rowClass, colClass;

  numColumns = isBlank(numColumnsElem.value) ? 12 : numColumnsElem.value;
  gridClass = isBlank(gridClassElem.value) ? 'g' : gridClassElem.value;
  rowClass = isBlank(rowClassElem.value) ? 'r' : rowClassElem.value;
  colClass = isBlank(colClassElem.value) ? 'c' : colClassElem.value;

  var gridCss = rework('').use(reworkFlexGrid({
    numColumns: numColumns,
    classNames: {
      grid: gridClass,
      row: rowClass,
      col: colClass
    }
  })).toString().trim();

  setCss(gridCss);
};
