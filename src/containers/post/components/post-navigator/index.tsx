import React, { FC } from 'react';
import { Link } from 'gatsby';

import { Language, English } from '@constants/lang';

import { IPostNavigator } from './type';
import S from './style';

const PostNavigator: FC<IPostNavigator> = ({ previous, next }) => {
  return (
    <S.Navigation>
      <li>
        {previous ? (
          <Link to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        ) : (
          <Link to={'/'}>{Language === English ? 'Go Home' : '홈으로'}</Link>
        )}
      </li>
      <li>
        {next ? (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        ) : (
          <Link to={'/'}>{Language === English ? 'Go Home' : '홈으로'}</Link>
        )}
      </li>
    </S.Navigation>
  );
};

export default PostNavigator;
