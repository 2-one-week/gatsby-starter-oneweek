import React, { FC } from 'react';

import S from './style';
interface IPostContent {
  html: string;
}

const PostContent: FC<IPostContent> = ({ html }) => (
  <S.PostContentWrapper dangerouslySetInnerHTML={{ __html: html }} />
);

export default PostContent;
