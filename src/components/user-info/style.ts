import styled from 'styled-components';

const Container = styled.section`
  margin: 24px 0;

  .author-description {
    display: flex;
  }

  .author-image {
    margin-top: 12px;
    margin-right: 12px;
    margin-bottom: 0;
    min-width: 72px;
  }

  .author-name-prefix {
    font-size: 90%;
    margin-right: 4px;
  }

  .author-name-content {
    display: inline-block;
    text-align: center;
    font-size: 95%;
    padding: 6px 8px;
    font-weight: bolder;
    border-radius: 8px;
    transform-origin: center;

    &:hover {
      background-color: ${({ theme: { colors } }) => colors.mainColor};
      color: white;
    }
  }

  .author-introduction {
    margin-top: 4px;
    font-size: 80%;
    line-height: 1.4;
    color: ${({ theme: { colors } }) => colors.gray700};
  }

  .author-socials {
    margin-top: 4px;
  }

  a {
    margin-right: 8px;
    font-size: 80%;

    &.visited {
      text-decoration: none;
    }
  }
`;
export default { Container };
