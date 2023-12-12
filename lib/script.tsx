import React, { useEffect } from 'react';

const loadScript = (src: string, defer = false, async = false) => {
  const script = document.createElement('script');
  script.src = src;
  script.defer = defer;
  script.async = async;
  document.body.appendChild(script);
};

const PopupComponent = () => {
  useEffect(() => {
    loadScript('https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js', true);
    loadScript('https://developers.kakao.com/sdk/js/kakao.js', true);
    loadScript('https://www.googletagmanager.com/gtag/js?id=G-R64H1TLKCP', false, true);
  }, []);

  return <div>{/* 팝업 컨텐츠 */}</div>;
};

export default PopupComponent;
