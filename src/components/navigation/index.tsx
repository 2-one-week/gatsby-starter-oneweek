import React, { FC } from 'react';
import { Link } from 'gatsby';

import { CATEGORY_PAGE, ABOUT_PAGE } from '@constants/path';
import TagList from '@components/tag-list';

import { INavigation } from './type';
import S from './style';

const Navigation: FC<INavigation> = ({
  tagName = 'Recent',
  tags,
  onClickTag,
}) => {
  return (
    <S.Navigation>
      <S.H1 current>{tagName}</S.H1>
      <Link to={CATEGORY_PAGE}>
        <S.H1>Category</S.H1>
      </Link>
      <Link to={ABOUT_PAGE}>
        <S.H1>About</S.H1>
      </Link>
      <S.TagListWrapper>
        <TagList currentTag={tagName} tags={tags} onClickTag={onClickTag} />
      </S.TagListWrapper>
    </S.Navigation>
  );
};

export default Navigation;
