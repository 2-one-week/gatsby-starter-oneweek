import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

const Header = styled.header<{ hide: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: ${({ theme }) => theme.space[8]};
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray200};
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(10px);
  width: 100%;
  display: ${({ hide }) => (hide ? 'none' : 'block')};
`;

const HeaderContainer = styled.section<{ path: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme: { sizes } }) => sizes.bigContainer};
  height: 100%;
  padding: 0 ${({ theme }) => theme.space[6]};
  margin: 0 auto;
  a {
    margin: 0 20px;
  }

  @media (max-width: 700px) {
    max-width: ${({ theme: { sizes } }) => sizes.smallContainer};
    margin: 0;
    a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 0;
    }
  }
`;

const HamBurgerIconWrapper = styled.section`
  display: none;
  @media (max-width: 640px) {
    display: block;
  }
`;

const changePageAnimation = keyframes`
    0% {
        opacity: 0.8;
        transform: translate(-240px, 0px);
    }
    100% {
        opacity: 1;
        transform: translate(0px, 0px);
    }
`;

const TagContainer = styled.section<{ isOpenTags: boolean }>`
  display: none;
  @media (max-width: 640px) {
    display: ${({ isOpenTags }) => (isOpenTags ? 'block' : 'none')};
    width: 260px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ theme: { colors } }) => colors.gray50};
    animation: 0.5s ease-in-out 0s 1 normal none running ${changePageAnimation};
  }
`;

const TagHeader = styled.section`
  width: 100%;
  height: ${({ theme }) => theme.space[8]};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 25px;
`;

const TagBody = styled.section`
  width: 100%;
  height: auto;

  padding: 5px 10px;
`;

const HeaderLink = styled(Link)<{ bold?: string }>`
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.mainColor};
  font-size: 18px;
  font-weight: ${({ bold }) => bold && 'bold'};
  margin: 0 20px;
`;

export default {
  Header,
  HamBurgerIconWrapper,
  TagContainer,
  TagHeader,
  TagBody,
  HeaderContainer,
  HeaderLink,
};
