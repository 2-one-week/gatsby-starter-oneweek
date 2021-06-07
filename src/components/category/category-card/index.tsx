import React, { FC } from 'react';

import { getDateLabel } from '@utils/date';

import { ICategoryCard } from './type';
import S from './style';

const CategoryCard: FC<ICategoryCard> = ({ node }) => {
  return (
    <S.Container>
      <S.LinkWrapper to={node.fields.slug}>
        <h2>{node.frontmatter.title}</h2>
        <p className="date">
          {getDateLabel(`${new Date(node.frontmatter.date).getTime()}`)}
        </p>
        <p className="excerpt">{node.excerpt}</p>
      </S.LinkWrapper>
    </S.Container>
  );
};

export default CategoryCard;
