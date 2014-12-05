# Rework Flex Grid

__Currently under development.__

[![Build Status](https://travis-ci.org/johnotander/rework-flex.svg?branch=master)](https://travis-ci.org/johnotander/rework-flex)

Rework CSS plugin for generating custom flex grids.

## Installation

```
npm install --save rework-flex
```

## Usage

```javascript
var fs       = require('fs'),
    rework   = require('rework'),
    flexGrid = require('rework-flex-grid');

var flexGridOptions = {
  numColumns: 12,
  units: 'rem',
  classNaming: {
    gridClass: 'g',
    rowClass: 'r',
    colClass: 'c'
  },
  mediaQueries: {
    xs: '',
    sm: '',
    md: '',
    lg: '',
    xl: ''
  }
};

var css = fs.readFileSync('css/my-file.css', 'utf8').toString();
var out = rework(css).use(flexGrid(flexGridOptions)).toString();
```

_Note:_ This plugin produces CSS that should be [prefixed](https://github.com/postcss/autoprefixer).

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com) ([@4lpine](https://twitter.com/4lpine)).
