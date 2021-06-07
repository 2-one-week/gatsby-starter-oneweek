import styled from 'styled-components';

const Container = styled.section`
  width: auto;
  height: auto;
  position: absolute;
  left: -250px;
  top: 40px;
  overflow: hidden auto;

  @media (max-width: 500px) {
    display: block;
    position: static;
    left: 0;
    top: 70px;
  }
`;

const Wrapper = styled.section<{ position: number }>`
  position: ${({ position }) => position > 100 && 'fixed'};
  top: ${({ position }) => position > 100 && '120px'};
`;

const TagHeader = styled.h4`
  width: 200px;
  padding: 5px 0;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray500};
  font-size: 16px;
`;

const TagBody = styled.ul`
  width: 200px;
  color: rgb(134, 142, 150);
  line-height: 1.5;
  font-size: 0.875rem;
  max-height: calc(100vh - 128px);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 240px;
  }
`;

const TagItem = styled.li<{ isCurrent: boolean }>`
  line-height: 1.5;
  list-style: none;
  font-size: 14px;
  color: ${({ theme: { colors }, isCurrent }) =>
    isCurrent ? colors.mainColor : colors.gray700};
  text-align: start;
  padding: 3px 0;
  cursor: pointer;
  font-weight: bold;
`;

export default { Container, Wrapper, TagHeader, TagBody, TagItem };
