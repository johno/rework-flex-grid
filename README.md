# Rework Flex Grid

__Currently under development (it's nearing completion).__

[![Build Status](https://travis-ci.org/johnotander/rework-flex-grid.svg?branch=master)](https://travis-ci.org/johnotander/rework-flex-grid)

Rework CSS plugin for generating custom, lightweight [flex](http://caniuse.com/#search=flex) grids.

### Why?

Every project is different.

You should be able to create a grid on the fly that's catered to your project. If you only want 8
columns you can create a grid with exactly 8 columns rather than being stuck with 12. This helps to avoid
unnecessary bloat in your CSS. This grid generator uses [flex](http://caniuse.com/#search=flex) to
dramatically reduce CSS declarations in the grid system.

#### Mobile-first

Rework Flex Grid creates a grid system that is 100% mobile-first. This ensures that mobile browsers
aren't forced to parse media queries when they're not applicable. Less parsing means faster rendering
which means faster load-to-content times which means happier users. Yay.

#### Customizable

You come up with your own naming scheme for classes. You set the breakpoints. You decide if you want column
offsets. It's all in the configuration.

#### Low Specificity

All grid classes have a specificity value of 10. They consist of one class, and exactly one class,
resulting in CSS similar to:

```css
.gridClass {
  /* ... */
}

.gridClass-rowClass {
  /* ... */
}

.gridClass-rowClass-columnClass {
  /* ... */
}

@media screen and (min-width: 32rem) {
  .gridClass-rowClass-columnClass--sm {
    /* ... */
  }
}
```

This ensures that the grid won't stomp on your styles, and makes it easy for you to override defaults.

## Installation

```
npm install --save rework-flex-grid
```

## Usage

```javascript
var fs       = require('fs'),
    rework   = require('rework'),
    flexGrid = require('rework-flex-grid');

var flexGridOptions = {
  numColumns: 12,
  classNames: {
    grid: 'g',
    row: 'r',
    col: 'c'
  },
  mediaQueries: {
    sm: '32rem',
    md: '48rem',
    lg: '64rem'
  }
};

var css = fs.readFileSync('css/my-file.css', 'utf8').toString();
var out = rework(css).use(flexGrid(flexGridOptions)).toString();
```

_Note:_ This plugin produces CSS that should be [prefixed](https://github.com/postcss/autoprefixer).

## TODO:

- [ ] Create a mini app to allow people to generate grids in their browser.
- [ ] Offset configuration.
- [X] Media queries.
- [X] Media query configuration.

## Acknowledgements

Inspired by [Yahoo!'s Rework Pure Grids](https://github.com/yahoo/rework-pure-grids).
Adapted some flex grid code from [Kristofer Joseph](https://github.com/kristoferjoseph/flexboxgrid).

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com) ([@4lpine](https://twitter.com/4lpine)).
