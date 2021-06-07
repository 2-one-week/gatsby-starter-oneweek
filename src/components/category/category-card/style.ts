import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';

const changePageAnimation = keyframes`
    0% {
        opacity: 0.01;
        transform: translate(0px, 5px);
    }
    100% {
        opacity: 1;
        transform: translate(0px, 0px);
    }
`;

const Container = styled.li`
  width: 100%;
  height: auto;
  border-radius: 6px;
  list-style: none;
  padding: 12px 10px;
  margin-bottom: 15px;
  animation: 0.4s ease-in-out 0s 1 normal none running ${changePageAnimation};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.gray100};
  }
`;

const LinkWrapper = styled(Link)`
  h2 {
    font-size: 18px;
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;
  }
  .date {
    margin: 5px 0;
    color: ${({ theme: { colors } }) => colors.gray500};
    font-size: 12px;
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;
  }

  .excerpt {
    margin: 7px 0;
    color: ${({ theme: { colors } }) => colors.gray700};
    font-size: 14px;
    overflow: hidden;
    white-space: wrap;
    text-overflow: ellipsis;
  }
`;

export default { Container, LinkWrapper };
