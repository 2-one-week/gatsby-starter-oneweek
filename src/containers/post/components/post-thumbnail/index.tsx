import React, { FC } from 'react';
import styled from 'styled-components';

interface IPostThumbnail {
  title: string;
  imageSrc?: string;
}

const StyledImage = styled.img`
  max-height: 100vh;
  width: auto;
  max-width: 100%;
  margin: 2rem auto 0px;
  height: auto;
  object-fit: contain;
  display: block;
  overflow: hidden;
`;

const PostThumbnail: FC<IPostThumbnail> = ({ title, imageSrc }) => {
  return <StyledImage src={imageSrc} alt={`${title} thumbnail`} />;
};

export default PostThumbnail;
