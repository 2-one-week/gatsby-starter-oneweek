import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
    width: 100%;
  }
  body {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    /* font-size: 62.5%; */
    font-family: KoPubWorld, NotoSansKR, NotoSansJP, -apple-system, BlinkMacSystemFont, "Helvetica Neue", "맑은 고딕", "Yu Gothic", "Segoe UI", Roboto, system-ui, sans-serif !important;
  }
  @font-face { 
    font-family: local('KoPubWorld'); 
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot');
    src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf') format('truetype');
    /* font-size: 62.5% !important; */
  }
  a {
    text-decoration: none !important;
    color: ${({ theme: { colors } }) => colors.mainColor};

    &.visited{
      text-decoration: none
    }
  }
  #___gatsby{
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
