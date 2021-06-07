import React, { FC } from 'react';

import { buyMeACoffeeId } from '@constants/user-info';
import { Language, English } from '@constants/lang';

import S from './style';

const SponsorButton: FC = () => (
  <S.Container>
    <S.BuyMeCoffeeButton>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.buymeacoffee.com/${buyMeACoffeeId}`}
      >
        <img
          src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
          alt="Buy me a coffee"
        />
        <span>{Language === English ? 'Buy me a Coffee' : '커피 한잔?'}</span>
      </a>
    </S.BuyMeCoffeeButton>
  </S.Container>
);

export default SponsorButton;
