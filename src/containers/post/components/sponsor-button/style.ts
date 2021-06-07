import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  max-width: ${({ theme: { sizes } }) => sizes.smallContainer};
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const BuyMeCoffeeButton = styled.article`
  text-align: right;
  margin: 4px;
  display: inline-block;
  padding: 0px 7px;
  width: auto;
  height: 33px;
  text-decoration: none;
  background-color: ${({ theme: { colors } }) => colors.mainColor};
  color: #ffffff;
  border: 1px solid transparent;
  border-radius: 6px;
  letter-spacing: -0.08px;
  box-sizing: border-box;
  font-size: 12px;
  line-height: 30px;
  text-align: left;

  &:hover,
  &:active {
    background-color: ${({ theme: { colors } }) => colors.mainColor};
  }

  img {
    width: 20px;
    margin-bottom: 1px;
    box-shadow: none;
    border: none;
    vertical-align: middle;
  }

  span {
    margin-left: 6px;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

export default { Container, BuyMeCoffeeButton };
