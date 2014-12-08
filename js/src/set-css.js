module.exports = function setCss(cssText) {
  var cssCodeElem = document.getElementById('css-code');

  if (cssCodeElem.firstChild) {
    cssCodeElem.removeChild(cssCodeElem.firstChild);
  }

  cssCodeElem.appendChild(document.createTextNode(cssText));
};
