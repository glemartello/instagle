import styled from 'styled-components';
import { IoEllipsisHorizontal } from 'react-icons/io5';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  margin-bottom: 24px;
`;

export const Header = styled.div`
  display: flex;
  padding: 14px 16px;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.borderColor};
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;

  object-fit: cover;
`;

export const UserInfo = styled.div`
  margin-left: 12px;
`;

export const UserName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.fontColorAlt};
`;

export const Location = styled.div`
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.fontColorAlt};
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Options = styled.div`
  cursor: pointer;
`;

export const OptionIcon = styled(IoEllipsisHorizontal)`
  margin-top: 6px;
`;

export const Image = styled.img`
  height: 618px;
  width: 618px;

  object-fit: cover;
`;
