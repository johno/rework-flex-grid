module.exports = function generateGridExample(gridCss, gridOptions) {
  var gridExampleElem = document.getElementById('grid-example');

  while(gridExampleElem.firstChild) {
    gridExampleElem.removeChild(gridExampleElem.firstChild);
  }

  var cssNode = document.createElement('style');
  cssNode.appendChild(document.createTextNode(gridCss));
  gridExampleElem.appendChild(cssNode);

  var gridNode = document.createElement('div');
  gridNode.className = gridOptions.gridClass;
  gridExampleElem.appendChild(gridNode);

  for(var i = 1; i < gridOptions.numColumns; i++) {
    var rowNode = document.createElement('div');
    rowNode.className = gridOptions.gridClass + '-' + gridOptions.rowClass;

    rowNode.appendChild(createGridItemNode(i, gridOptions));
    rowNode.appendChild(createGridItemNode(gridOptions.numColumns - i, gridOptions));
    gridNode.appendChild(rowNode);
  }
};

function createGridItemNode(currCol, gridOptions) {
  var node = document.createElement('div');
  node.className = [
    gridOptions.gridClass,
    gridOptions.rowClass,
    gridOptions.colClass,
    currCol,
    gridOptions.numColumns].join('-') + ' grid-item';

  node.appendChild(document.createTextNode(currCol + '-' + gridOptions.numColumns));
  return node;
}
