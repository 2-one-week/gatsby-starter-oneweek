import styled from 'styled-components';

const Navigation = styled.ul`
  width: 100%;
  margin: 40px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;

  li {
    border: 1px solid ${({ theme: { colors } }) => colors.mainColor};
    border-radius: 6px;
    margin: 5px 0;

    &:first-child {
      padding: 6px 10px;
      text-align: start;
    }
    &:last-child {
      padding: 6px 10px;
      text-align: end;
    }

    a {
      font-size: 15px;
      opacity: 0.8;
    }

    &:hover {
      background-color: ${({ theme: { colors } }) => colors.mainColor};
      & > a {
        color: white;
      }
    }
  }
`;

export default { Navigation };
