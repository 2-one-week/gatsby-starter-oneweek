import styled from 'styled-components';

const Main = styled.main<{ path: string }>`
  width: 100%;
  height: 100%;
  max-width: ${({ theme: { sizes }, path }) =>
    path === 'home' ? sizes.bigContainer : sizes.smallContainer};
  margin: ${({ theme }) => theme.space[8]} auto 0;
  padding: ${({ theme }) => theme.space[6]};
`;

const MainContent = styled.section`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.space[6]};
  overflow-y: auto;
`;

export default { Main, MainContent };
