import React, { FC } from 'react';
import styled from 'styled-components';

const StyledCategoryListWrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: auto;
  margin: 20px 0;
`;

const CategoryListWrapper: FC = ({ children }) => {
  return <StyledCategoryListWrapper>{children}</StyledCategoryListWrapper>;
};

export default CategoryListWrapper;
