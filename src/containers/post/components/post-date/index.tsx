import React, { FC } from 'react';
import styled from 'styled-components';

import { getDateLabel } from '@utils/date';

const StyledPostDate = styled.p`
  text-align: right;
  font-size: 14px;
  color: ${({ theme: { colors } }) => colors.gray600};
  margin: 20px 0;
`;

interface IPostDate {
  date: string;
}

const PostDate: FC<IPostDate> = ({ date }) => {
  return (
    <StyledPostDate>
      {getDateLabel(`${new Date(date).getTime()}`)}
    </StyledPostDate>
  );
};

export default PostDate;
