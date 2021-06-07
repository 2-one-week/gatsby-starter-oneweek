import React, { FC } from 'react';

import S from './style';

interface IPostTags {
  tags: string[];
}

const PostTags: FC<IPostTags> = ({ tags }) => {
  return (
    <S.TagsWrapper>
      <h4>Tags</h4>
      {tags.map((tag, index) => (
        <S.TagItemsWrapper key={index}>{tag}</S.TagItemsWrapper>
      ))}
    </S.TagsWrapper>
  );
};

export default PostTags;
