var assert = require('assert'),
    getPrefixedSelector = require('../../lib/utils/get-prefixed-selector');

describe('get-prefixed-selector', function() {
  it('should prefix the class name argument', function() {
    assert.equal(
      getPrefixedSelector('prefix', 'class'),
      'prefix-class'
    );
  });
});
