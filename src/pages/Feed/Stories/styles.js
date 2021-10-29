import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  margin-bottom: 24px;

  background: ${({ theme }) => theme.backgroundSecondary};

  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 3px;
`;

export const StoriesContainer = styled.div`
  display: flex;
  align-items: center;

  margin: 16px 10px;

  overflow-x: auto;
`;
