import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.backgroundPrimary};

  width: 100%;
`;

export const Header = styled.nav`
  display: flex;
  justify-content: center;

  background: ${({ theme }) => theme.backgroudSecondary};

  border-bottom: 1px solid #dbdbdb;

  height: 60px;
  min-height: 60px;
  width: 100%;
`;

export const Content = styled.main`
  display: grid;
  justify-content: center;
  grid-template-columns: 620px 300px;
  grid-template-rows: 100%;
  grid-gap: 0 30px;

  height: 100%;
  width: 100%;
  max-width: 950px;
`;
