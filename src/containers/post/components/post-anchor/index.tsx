import React, { FC, useEffect, useState } from 'react';

import useScroll from '@hooks/useScroll';

import S from './style';
import { IFilteredAnchor } from './type';
import { filterAnchorDetails } from './make-anchor';

const loop = (anchors: IFilteredAnchor[]) =>
  anchors.map((item) => {
    if (item.children.length > 0) {
      return (
        <S.SLink to={item.href} key={item.href}>
          {item.title}
          {loop(item.children)}
        </S.SLink>
      );
    }
    return (
      <S.SLink to={item.href} key={item.href}>
        {item.title}
      </S.SLink>
    );
  });

const PostAnchor: FC = () => {
  const [anchors, setAnchors] = useState<IFilteredAnchor[]>([]);
  const [scorllState] = useScroll();

  useEffect(() => {
    const findedAnchors = document.getElementsByClassName('post-anchor');
    setAnchors(filterAnchorDetails(findedAnchors));
  }, []);

  return (
    <S.Achor>
      <S.PostAnchorWrapper position={scorllState.pageYOffset}>
        {loop(anchors)}
      </S.PostAnchorWrapper>
    </S.Achor>
  );
};

export default PostAnchor;
