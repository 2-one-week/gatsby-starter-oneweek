import React, { FC } from 'react';
import styled from 'styled-components';

const StyledPostCardWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  max-width: ${({ theme: { sizes } }) => sizes.bigContainer};

  @media (max-width: 966px) {
    max-width: ${({ theme: { sizes } }) => sizes.smallContainer};
  }
`;

const PostCardWrapper: FC = ({ children }) => {
  return <StyledPostCardWrapper>{children}</StyledPostCardWrapper>;
};

export default PostCardWrapper;
