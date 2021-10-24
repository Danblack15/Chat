function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function () {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

addLoadEvent(l());
addLoadEvent(function () {
  console.log('Страница полностью загружена!')
});

function l() {
  console.log('Загрузка..')
}
