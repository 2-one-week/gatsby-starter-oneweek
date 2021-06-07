import React, { FC } from 'react';
import styled from 'styled-components';

const StyledPostCardWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const PostCardWrapper: FC = ({ children }) => {
  return <StyledPostCardWrapper>{children}</StyledPostCardWrapper>;
};

export default PostCardWrapper;
