import React, { FC } from 'react';

import useScroll from '@hooks/useScroll';
import { Language, English } from '@constants/lang';

import S from './style';

export interface ITags {
  fieldValue: string;
  totalCount: number;
}

interface ITagList {
  currentTag: string;
  tags: ITags[];
  onClickTag: (tagName: string) => void;
}

const TagList: FC<ITagList> = ({ currentTag, tags, onClickTag }) => {
  const [scorllState] = useScroll();
  return (
    <S.Container>
      <S.Wrapper position={scorllState.pageYOffset}>
        <S.TagHeader>
          {Language === English ? 'Tag List' : '태그 목록'}
        </S.TagHeader>
        <S.TagBody>
          <S.TagItem
            isCurrent={currentTag === 'Recent' || currentTag === 'ALL'}
            onClick={() => {
              onClickTag('ALL');
            }}
          >
            ALL
          </S.TagItem>
          {tags.map((tag, index) => (
            <S.TagItem
              key={index}
              isCurrent={currentTag === tag.fieldValue}
              onClick={() => {
                onClickTag(tag.fieldValue);
              }}
            >
              {tag.fieldValue}({tag.totalCount})
            </S.TagItem>
          ))}
        </S.TagBody>
      </S.Wrapper>
    </S.Container>
  );
};

export default TagList;
