import styled from 'styled-components';

const TagsWrapper = styled.ul`
  width: 100%;
  height: 40px;
  margin: 15px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const TagItemsWrapper = styled.li`
  list-style: none;
  width: auto;
  height: 30px;
  padding: 5px 10px;
  margin: 15px 10px;
  background-color: ${({ theme: { colors } }) => colors.mainColor};
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.white};

  p {
    font-size: 14px;
  }

  @media (max-width: 640px) {
    margin: 15px 5px;
  }
`;

export default { TagsWrapper, TagItemsWrapper };
