import React, { FC } from 'react';
import styled from 'styled-components';

interface IPostTitle {
  title: string;
}

const StyledPostTitle = styled.h1`
  font-size: 2.5rem;
  margin: 30px 0;
`;

const PostTitle: FC<IPostTitle> = ({ title }) => (
  <StyledPostTitle>{title}</StyledPostTitle>
);

export default PostTitle;
