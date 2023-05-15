(function initTheme() {
  const a = localStorage.getItem('persist:root');

  const b = JSON.parse(a).core;

  var theme = JSON.parse(b).isdark;

  if (theme === 'dark') {
    window.document.querySelector('html').classList.add('dark');
  } else if (theme === 'light') {
    window.document.querySelector('html').classList.add('light');
  }
})();
