import React, { FC } from 'react';

import { getDateLabel } from '@utils/date';

import { IPostCard } from './type';
import S from './style';

const PostCard: FC<IPostCard> = ({ node }) => {
  const {
    excerpt,
    frontmatter: { thumbnail, title, date },
    fields: { slug },
  } = node;

  return (
    <S.Container>
      <S.SLink to={slug}>
        <S.Background>
          {thumbnail ? (
            <S.ImageWrapper src={thumbnail.childImageSharp.fluid.src} />
          ) : (
            <p>{title}</p>
          )}
        </S.Background>

        <S.ContentWrapper>
          <S.TitleWrapper>{title}</S.TitleWrapper>
          <S.ExcerptWrapper>
            {excerpt.length > 70 ? `${excerpt.slice(0, 70)}...` : excerpt}
          </S.ExcerptWrapper>
          <S.DateWrapper>
            {getDateLabel(`${new Date(date).getTime()}`)}
          </S.DateWrapper>
        </S.ContentWrapper>
      </S.SLink>
    </S.Container>
  );
};

export default PostCard;
