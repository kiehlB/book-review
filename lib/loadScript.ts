function loadScript(src: string, strategy = 'defer') {
  const script = document.createElement('script');
  script.src = src;
  if (strategy === 'async') {
    script.async = true;
  } else {
    script.defer = true;
  }
  document.head.appendChild(script);
}
