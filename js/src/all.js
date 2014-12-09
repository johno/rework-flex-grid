var updateGrid = require('./update-grid');

(function() {
  function onTabClick(event) {
    var activeTabs = document.querySelectorAll('.active');

   for (var i = 0; i < activeTabs.length; i++) {
      activeTabs[i].className = activeTabs[i].className.replace('active', '');
    }

    event.target.className += ' active';
    document.getElementById(event.target.href.split('#')[1]).className += ' active';
  }

  var el = document.getElementById('tabs');
  el.addEventListener('click', onTabClick, false);
}());

(function() {
  window.updateGrid = updateGrid;
  updateGrid();
}());
