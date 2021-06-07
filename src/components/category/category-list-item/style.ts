import styled from 'styled-components';

const Container = styled.li<{ isCurrent: boolean }>`
  width: auto;
  height: 30px;
  padding: 0 10px;
  margin: 0px 5px;
  border: 1px solid
    ${({ theme: { colors }, isCurrent }) =>
      isCurrent ? colors.mainColor : colors.gray600};
  border-radius: 8px;
  color: ${({ theme: { colors }, isCurrent }) =>
    isCurrent ? colors.mainColor : colors.gray600};
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;

  p {
    font-size: 14px;
  }

  &:hover {
    border: 1px solid ${({ theme: { colors } }) => colors.mainColor};
    color: ${({ theme: { colors } }) => colors.white};
    background-color: ${({ theme: { colors } }) => colors.mainColor};

    & > article {
      color: ${({ theme: { colors } }) => colors.mainColor};
      background-color: ${({ theme: { colors } }) => colors.white};
    }
  }
`;

const NumberWrapper = styled.article<{ isCurrent: boolean }>`
  width: auto;
  min-width: 20px;
  max-width: 50px;
  height: 20px;
  font-size: 12px;
  border-radius: 18px;
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors }, isCurrent }) =>
    isCurrent ? colors.mainColor : colors.gray600};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;

export default { Container, NumberWrapper };
