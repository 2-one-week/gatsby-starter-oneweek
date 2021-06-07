import React, { FC } from 'react';

import { githubId } from '@constants/user-info';

import S from './style';

const Footer: FC = () => (
  <S.Footer>
    ©<a href={`https://github.com/${githubId}`}>{githubId}</a>, Built with{' '}
    <a href="https://github.com/2-one-week/gatsby-starter-oneweek">
      gatsby-starter-oneweeek
    </a>
  </S.Footer>
);

export default Footer;
