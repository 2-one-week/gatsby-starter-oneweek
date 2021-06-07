import React, { FC, useRef, useEffect } from 'react';

import S from './style';

interface ICategoryListItem {
  categoryName: string;
  categoryItemCount: number;
  isCurrent: boolean;
  onClick?: () => void;
}

const SMOOTH = 'smooth';
const CENTER = 'center';

const CategoryListItem: FC<ICategoryListItem> = ({
  isCurrent,
  onClick,
  categoryName,
  categoryItemCount,
}) => {
  const targetCategory = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (isCurrent) {
      targetCategory.current?.scrollIntoView({
        behavior: SMOOTH,
        inline: CENTER,
      });
    }
  }, [isCurrent]);

  return (
    <S.Container ref={targetCategory} isCurrent={isCurrent} onClick={onClick}>
      <p>{categoryName}</p>
      <S.NumberWrapper isCurrent={isCurrent}>
        {categoryItemCount}
      </S.NumberWrapper>
    </S.Container>
  );
};

export default CategoryListItem;
