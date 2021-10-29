import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50px;
  min-width: 50px;
  overflow: hidden;

  margin: 0 5px;
`;

export const Photo = styled.img`
  height: 50px;
  width: 50px;

  margin-bottom: 5px;

  border-radius: 50%;
`;

export const UserName = styled.div`
  width: 50px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-size: 10px;
`;
