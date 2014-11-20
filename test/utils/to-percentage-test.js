var assert = require('assert'),
    toPercentage = require('../../lib/utils/to-percentage');

describe('to-percentage', function() {
  it('should return the correct percentage', function() {
    assert.equal(toPercentage(0.43123456, 5), '43.12346%');
  });

  it('should handle .500 correctly', function() {
    assert.equal(toPercentage(0.500, 5), '50%');
  });
});
