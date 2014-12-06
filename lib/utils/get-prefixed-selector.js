module.exports = function getPrefixedSelector() {
  var args = [].slice.call(arguments);
  return '.' + args.join('-');
};
