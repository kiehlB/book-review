'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Peace';
    src: url('../public/font/Peace.otf') format("opentype");
    font-weight: 800;
  }
  
  @font-face {
    font-family: 'Malgun Gothic';
    src: url('../public/font/malgun.ttf');
    font-weight: 400;
  }
  
  @font-face {
    font-family: 'Pretendard';
      font-weight: 400;
    font-display: swap;
      src: url('../public/font/PretendardR.woff2') format('woff');
  }
`;
