import styled from 'styled-components';

const PostContentWrapper = styled.article`
  line-height: 1.625;
  color: ${({ theme: { colors } }) => colors.gray700};

  a {
    color: ${({ theme: { colors } }) => colors.mainColor};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: ${({ theme: { colors } }) => colors.gray800};
    line-height: 1.8;
  }

  h1 {
    font-weight: 800;
    font-size: 22px;
    margin: 10px 0;
  }

  h2 {
    font-weight: 700;
    font-size: 20px;
    margin: 10px 0;
  }

  h3 {
    font-size: 18px;
    margin: 10px 0;
  }

  h4 {
    font-size: 16px;
    margin: 10px 0;
  }

  p {
    font-size: 14px;
    line-height: 1.8;
    margin: 4px 0;

    & > code {
      background-color: white;
      font-size: 15px;
      border-radius: 4px;
      border: 1px solid ${({ theme: { colors } }) => colors.mainColor};
      color: ${({ theme: { colors } }) => colors.mainColor};
      padding: 2px 4px;
      margin: 15px 0;
      font-family: KoPubWorld, NotoSansKR, NotoSansJP, -apple-system,
        BlinkMacSystemFont, 'Helvetica Neue', '맑은 고딕', 'Yu Gothic',
        'Segoe UI', Roboto, system-ui, sans-serif !important;
    }

    & > img {
      max-width: 100%;
      margin: 10px 0;
    }

    & > span {
      max-width: 100%;
      margin: 10px 0;
    }
  }

  pre {
    overflow: auto;
    background: ${({ theme: { colors } }) => colors.gray800};
    color: ${({ theme: { colors } }) => colors.gray300};
    padding: ${({ theme: { space } }) => space[6]};
    border-radius: 4px;
    line-height: 1.6;
  }

  img {
    margin: 20px 0;
    max-width: 100%;
    border-radius: 8px;
  }

  ol {
    margin: 8px 25px;
    line-height: 1.8;
  }

  ul {
    margin: 8px 25px;
    line-height: 1.8;
  }

  li {
    margin: 4px 0;
    line-height: 1.8;
  }

  deckgo-highlight-code {
    margin: 18px 0;
    font-family: KoPubWorld, NotoSansKR, NotoSansJP, -apple-system,
      BlinkMacSystemFont, 'Helvetica Neue', '맑은 고딕', 'Yu Gothic', 'Segoe UI',
      Roboto, system-ui, sans-serif !important;
  }

  blockquote {
    margin: 2rem 0px;
    border-left: 4px solid ${({ theme: { colors } }) => colors.mainColor};
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: rgb(248, 249, 250);
    padding: 1rem 1rem 1rem 2rem;
    color: rgb(33, 37, 41);
  }

  span {
    font-family: KoPubWorld, NotoSansKR, NotoSansJP, -apple-system,
      BlinkMacSystemFont, 'Helvetica Neue', '맑은 고딕', 'Yu Gothic', 'Segoe UI',
      Roboto, system-ui, sans-serif !important;
  }

  hr {
    margin: 16px 0;
  }

  table {
    border: 1px solid ${({ theme: { colors } }) => colors.mainColor};
    margin: 8px auto;
    min-width: 40%;
    max-width: 100%;
    border-collapse: collapse;

    font-size: 13px;
    border-spacing: 2px;
    & thead > tr > th {
      text-align: center;
      border-bottom: 4px solid ${({ theme: { colors } }) => colors.mainColor};
    }

    & tbody > tr > td {
      border: 1px solid ${({ theme: { colors } }) => colors.mainColor};
    }

    & td {
      word-break: break-word;
      padding: 0.5rem;
    }
  }
`;

export default { PostContentWrapper };
