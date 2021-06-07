import styled from 'styled-components';
import { Link } from 'gatsby';

const Achor = styled.section`
  width: auto;
  height: auto;
  position: absolute;
  left: 100%;
  overflow: hidden auto;
  @media (max-width: 900px) {
    display: none;
  }
`;

const PostAnchorWrapper = styled.section<{ position: number }>`
  width: 240px;
  margin-left: 60px;
  border-left: 2px solid rgb(233, 236, 239);
  padding: 0.25rem 0.75rem;
  color: rgb(134, 142, 150);
  line-height: 1.5;
  font-size: 0.875rem;
  max-height: calc(100vh - 128px);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: ${({ position }) => position > 100 && 'fixed'};
  top: ${({ position }) => position > 100 && '120px'};
`;

const SLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  font-size: 16px;
  margin: 5px 0;
  & > a {
    margin-left: 10px;
    font-size: 14px;
  }
`;

export default { Achor, PostAnchorWrapper, SLink };
