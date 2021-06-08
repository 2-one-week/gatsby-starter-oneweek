import styled from 'styled-components';

const Navigation = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 20px;
  position: relative;

  @media (max-width: 640px) {
    justify-content: space-between;
    margin: 0;
    h1 {
      margin: 10px 0;
    }
  }
`;

const H1 = styled.h1<{ current?: boolean }>`
  margin: 10px 30px 10px 0;
  color: ${({ theme: { colors }, current }) =>
    current ? colors.mainColor : colors.black};
`;

const TagListWrapper = styled.section`
  width: auto;
  height: auto;
  @media (max-width: 900px) {
    display: none;
  }
`;

export default { Navigation, H1, TagListWrapper };
