var assert = require('assert');
var gridUnits = require('../../lib/defaults/grid-units');

describe('grid-units', function() {

  it('should default to rems', function() {
    assert.equal(gridUnits(), 'rem');
  });
});
