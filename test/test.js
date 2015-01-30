var assert   = require('assert'),
    fs       = require('fs'),
    rework   = require('rework'),
    flexGrid = require('..');

function fixture(name) {
  return fs.readFileSync('test/fixtures/' + name, 'utf8').trim();
}

describe('rework-flex', function() {

  it('should create the default grid correctly', function() {
    var output = rework(fixture('source.css')).use(flexGrid()).toString().trim();
    var expected = fixture('default.css');

    fs.writeFileSync('test/fixtures/default.output.css', output);

    assert.equal(output, expected);
  });

  it('should correctly handle custom class names', function() {
    var output = rework(fixture('source.css')).use(flexGrid({
      classNames: {
        grid: 'grid',
        row: 'row'
      }
    })).toString().trim();
    var expected = fixture('custom-class-names.css');

    fs.writeFileSync('test/fixtures/custom-class-names.output.css', output);

    assert.equal(output, expected);
  });

  it('should generate offsets when added as an option', function() {
    var output = rework(fixture('source.css')).use(flexGrid({
      offsets: true
    })).toString().trim();
    var expected = fixture('offsets.css');

    fs.writeFileSync('test/fixtures/offsets.output.css', output);

    assert.equal(output, expected);
  });
});
