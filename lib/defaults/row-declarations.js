module.exports = function rowDeclarations() {
  return [{
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
}
