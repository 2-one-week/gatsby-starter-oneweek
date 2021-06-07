import React, { FC } from 'react';
import styled from 'styled-components';

interface ISVGIcon {
  width: string;
  height: string;
  onClick?: () => void;
}

const StyledPath = styled.path`
  fill: ${({ theme: { colors } }) => colors.mainColor};
`;

const HamBurgerIcon: FC<ISVGIcon> = ({ width, height, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      onClick={onClick}
      viewBox="0 0 18 12"
    >
      <StyledPath
        id="ic_menu_24px"
        d="M3,18H21V16H3Zm0-5H21V11H3ZM3,6V8H21V6Z"
        transform="translate(-3 -6)"
      />
    </svg>
  );
};

export default HamBurgerIcon;
