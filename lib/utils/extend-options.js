module.exports = function extendOptions(defaultOptions, options) {
  Object.keys(defaultOptions).forEach(function(key) {
    if(!(key in options)) {
      options[key] = defaultOptions[key];
    }
  });

  return options;
}
