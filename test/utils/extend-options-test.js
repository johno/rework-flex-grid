var assert = require('assert');
var extendOptions = require('../../lib/utils/extend-options');

describe('extend-options', function() {

  var options = {
    a: 'a',
    b: 'b',
    c: 'c'
  };

  var defaultOptions = {
    a: 1,
    b: 2,
    c: 3
  }

  it('should not override provided options', function() {
    assert.deepEqual(extendOptions(defaultOptions, options), options)
  });

  it('should not add missing options', function() {
    var options = {
      a: 'a'
    }

    assert.deepEqual(
      extendOptions(defaultOptions, options),
      { a: 'a', b: 2, c: 3 });
  });
});
