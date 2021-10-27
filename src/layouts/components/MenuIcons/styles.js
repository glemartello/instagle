import styled from 'styled-components';
import { FiHome, FiMessageCircle, FiHeart } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 10px;
  }
`;

export const HomeIcon = styled(FiHome)`
  height: 22px;
  width: 22px;

  color: ${({ theme }) => theme.fontColor};
`;
export const MessageIcon = styled(FiMessageCircle)`
  height: 22px;
  width: 22px;

  color: ${({ theme }) => theme.fontColor};
`;
export const NotificationIcon = styled(FiHeart)`
  height: 22px;
  width: 22px;

  color: ${({ theme }) => theme.fontColor};
`;
export const ProfileIcon = styled.div``;
