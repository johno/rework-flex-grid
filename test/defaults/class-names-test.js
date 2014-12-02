var assert = require('assert');
var classNames = require('../../lib/defaults/class-names');

describe('class-names', function() {

  it('should return the correct defaults', function() {
    assert.deepEqual(classNames(), { rowClass: 'r', colClass: 'c', gridClass: 'g'});
  });
});
