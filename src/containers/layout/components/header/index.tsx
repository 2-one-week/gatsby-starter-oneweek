import React, { FC, useState } from 'react';

import useScroll from '@hooks/useScroll';
import GithubIcon from '@assets/github-icon';
import HamBurgerIcon from '@assets/hamburger-icon';
import CloseIcon from '@assets/close-icon';
import TagList from '@components/tag-list';
import { githubId } from '@constants/user-info';

import { IHeader } from './type';
import S from './style';

const Header: FC<IHeader> = ({ path, title, tagName, tags, onClickTag }) => {
  const [scorllState] = useScroll();

  const [isOpenTags, setIsOpenTags] = useState<boolean>(false);

  const handleOpenTag = () => {
    setIsOpenTags(!isOpenTags);
  };

  const handleClickTag = (tagName: string) => {
    onClickTag?.(tagName);
    setIsOpenTags(false);
  };

  return (
    <S.Header hide={scorllState.hide}>
      <S.HeaderContainer path={path}>
        {path === 'home' && (
          <S.HamBurgerIconWrapper>
            <HamBurgerIcon
              width={'24px'}
              height={'20px'}
              onClick={handleOpenTag}
            />
            <S.TagContainer isOpenTags={isOpenTags}>
              <S.TagHeader>
                <CloseIcon
                  width={'20px'}
                  height={'20px'}
                  onClick={handleOpenTag}
                />
              </S.TagHeader>
              <S.TagBody>
                <TagList
                  currentTag={tagName ?? 'ALL'}
                  tags={tags ?? []}
                  onClickTag={handleClickTag}
                />
              </S.TagBody>
            </S.TagContainer>
          </S.HamBurgerIconWrapper>
        )}
        <S.HeaderLink bold={'true'} to="/">
          {title}
        </S.HeaderLink>
        <a target="_blank" href={`https://github.com/${githubId}`}>
          <GithubIcon width={'30px'} height={'30px'} />
        </a>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
